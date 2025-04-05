"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import axiosInstance from "@/utils/api/axiosInstance"
import { getFromLocalStorage, setToLocalStorage } from "@/utils/functions/persisters"


interface UserData {
  first_name: string
  last_name: string
  email: string
  username: string
  avatar: string
  name: string
  id: string
}

// This is sample data.
const data = {
  user: {
    name: "User Name",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
    first_name: "User",
    last_name: "Name",
    username: "username",
    id: "1",
  },
  teams: [
    {
      name: "Vortex",
      logo: GalleryVerticalEnd,
      plan: "Pro",
      isActive: true,
    },
    // {
    //   name: "Acme Corp.",
    //   logo: AudioWaveform,
    //   plan: "Startup",
    // },
    // {
    //   name: "Evil Corp.",
    //   logo: Command,
    //   plan: "Free",
    // },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [user, setUser] = React.useState<UserData>(data.user)

  React.useEffect(() => {
    const fetchUser = async () => {
      if(getFromLocalStorage("user")) {
        setUser(getFromLocalStorage("user"))
        return
      }
      try {
        const response = await axiosInstance.get("/users/me").then((res) => {
          return res.data.data
        })
        setUser({
          ...response,
          name: response.first_name + " " + response.last_name,
          first_name: response.first_name,
          last_name: response.last_name,
          email: response.email,
          username: response.username,
          avatar: response.profile_picture_url,
          id: response.id,
        })
        setToLocalStorage("user", {
          ...response,
          name: response.first_name + " " + response.last_name,
          first_name: response.first_name,
          last_name: response.last_name,
          email: response.email,
          username: response.username,
          avatar: response.profile_picture_url,
          id: response.id,
        })
      } catch (error) {
        console.error("Error fetching user:", error)
      }
    }

    fetchUser()
  }, [])
  return (
    <Sidebar collapsible="icon" {...props} className="font-sans">
      <SidebarHeader className="text-3xl">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
