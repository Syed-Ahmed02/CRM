import { AppSidebar } from "@/components/app-sidebar"
import { DashboardKanbanBoard } from "@/components/dashboard/kanban-board"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="min-h-svh bg-[radial-gradient(circle_at_top_left,var(--color-primary)/12,transparent_32rem)]">
        <main className="flex flex-1 flex-col gap-8 p-4 md:p-6">
          <header className="flex items-center gap-4 border-b pb-5">
            <SidebarTrigger className="-ml-1" />
            <div>
              <p className="text-sm font-medium text-primary">
                Authenticated area
              </p>
              <h1 className="font-heading text-3xl font-semibold tracking-tight">
                Dashboard
              </h1>
            </div>
          </header>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">Pipeline value</p>
              <p className="mt-2 text-2xl font-semibold">$124.8K</p>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">Open projects</p>
              <p className="mt-2 text-2xl font-semibold">18</p>
            </div>
            <div className="rounded-xl border bg-card p-6 shadow-sm">
              <p className="text-sm text-muted-foreground">New contacts</p>
              <p className="mt-2 text-2xl font-semibold">42</p>
            </div>
          </div>

          <DashboardKanbanBoard />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
