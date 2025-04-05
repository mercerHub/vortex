import { AppSidebar } from "@/components/app-sidebar"
import { DrawerDemo } from "@/components/dashboard/userDetailsDrawer"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Layout({children}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col max-h-screen overflow-hidden">
        {/* Fixed header section */}
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 ">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="/dashboard">
                    <BreadcrumbPage>Feed</BreadcrumbPage>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        
        {/* Scrollable content section */}
        <div 
        style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(55, 65, 81, 0.5) transparent'
          }}
        className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded-full scrollbar-hidden scrollbar-thumb-gray-700/50">
          <div className="flex flex-col gap-4 p-4 pt-0">
            {children}
          </div>
        </div>
      </SidebarInset>
      <>
        <DrawerDemo/>
      </>
    </SidebarProvider>
  )
}