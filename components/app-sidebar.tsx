"use client"

import Link from "next/link"
import { UserButton, useUser } from "@clerk/nextjs"
import {
  RiCalendarLine,
  RiContactsBookLine,
  RiDashboardLine,
  RiFolderChartLine,
  RiInboxLine,
  RiListCheck3,
  RiMegaphoneLine,
  RiMoneyDollarCircleLine,
  RiSettings3Line,
  RiTeamLine,
} from "@remixicon/react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"

const workspaceItems = [
  { title: "Overview", href: "/dashboard", icon: RiDashboardLine, active: true },
  { title: "Inbox", href: "#", icon: RiInboxLine, badge: "12" },
  { title: "Calendar", href: "#", icon: RiCalendarLine },
]

const crmItems = [
  { title: "Contacts", href: "#", icon: RiContactsBookLine },
  { title: "Accounts", href: "#", icon: RiTeamLine },
  { title: "Deals", href: "#", icon: RiMoneyDollarCircleLine, badge: "8" },
  { title: "Campaigns", href: "#", icon: RiMegaphoneLine },
]

const projectItems = [
  { title: "Projects", href: "#", icon: RiFolderChartLine },
  { title: "Tasks", href: "#", icon: RiListCheck3, badge: "24" },
  { title: "Settings", href: "#", icon: RiSettings3Line },
]

function SidebarItems({
  items,
}: {
  items: {
    title: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    active?: boolean
    badge?: string
  }[]
}) {
  return (
    <SidebarMenu>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton
            render={<Link href={item.href} />}
            isActive={item.active}
            tooltip={item.title}
          >
            <item.icon />
            <span>{item.title}</span>
          </SidebarMenuButton>
          {item.badge ? <SidebarMenuBadge>{item.badge}</SidebarMenuBadge> : null}
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

export function AppSidebar() {
  const { user } = useUser()
  const displayName = user?.fullName ?? user?.username ?? "Alex Morgan"
  const email = user?.primaryEmailAddress?.emailAddress ?? "alex@northstar.co"

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              render={<Link href="/dashboard" />}
              size="lg"
              className="gap-3"
              tooltip="Northstar CRM"
            >
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-sidebar-primary font-heading text-sm font-bold text-sidebar-primary-foreground">
                N
              </span>
              <span className="flex min-w-0 flex-col">
                <span className="truncate font-heading font-semibold">
                  Northstar CRM
                </span>
                <span className="truncate text-xs text-sidebar-foreground/60">
                  Sales workspace
                </span>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarItems items={workspaceItems} />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>CRM</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarItems items={crmItems} />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarItems items={projectItems} />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="gap-3">
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "size-8",
                    userButtonPopoverCard: "rounded-xl",
                  },
                }}
              />
              <span className="flex min-w-0 flex-col">
                <span className="truncate font-medium">{displayName}</span>
                <span className="truncate text-xs text-sidebar-foreground/60">
                  {email}
                </span>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
