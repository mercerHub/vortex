"use client"

import * as React from "react"
import { Minus, Plus, Sidebar } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { SidebarFooter, SidebarHeader, SidebarInset, SidebarTrigger } from "../ui/sidebar"
import Image from "next/image"
import { getMe } from "@/utils/api/api"
import { getFromLocalStorage } from "@/utils/functions/persisters"
import { getUser } from "@/utils/functions/utility"


export function DrawerDemo() {
  const [user,setUser] = React.useState()


  React.useEffect(() => {
    const fetchUserData = async () => {
      const userData = await getUser()
      setUser(userData)
    }
    fetchUserData()
  }, [])


  return (
    <div className="w-1/3">
      <div className="flex items-center flex-col gap-3">
        <img
          src={`${user && user.profile_picture_url ? user.profile_picture_url : "/avatars/shadcn.jpg"}`}
          alt="Cover"
          className="rounded-lg w-full max-h-32 object-cover"
          className="rounded-lg"
        />
        <div className="text-3xl font-semibold rounded-lg border-1 border-gray-200 w-full py-2 px-4 text-center">{user && user.name}</div>
      </div>
    </div>
  )
}
