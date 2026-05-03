import { AppSidebar } from "@/components/app-sidebar"
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

          <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
            <section className="rounded-xl border bg-card p-6 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h2 className="font-heading text-xl font-semibold">
                    Priority deals
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Typical CRM records placeholder data for now.
                  </p>
                </div>
              </div>
              <div className="mt-5 divide-y">
                {["Acme renewal", "Ridgeway onboarding", "Juniper pilot"].map(
                  (deal) => (
                    <div
                      key={deal}
                      className="flex items-center justify-between gap-4 py-3"
                    >
                      <span className="font-medium">{deal}</span>
                      <span className="text-sm text-muted-foreground">
                        In progress
                      </span>
                    </div>
                  )
                )}
              </div>
            </section>
            <section className="rounded-xl border bg-card p-6 shadow-sm">
              <h2 className="font-heading text-xl font-semibold">
                Project queue
              </h2>
              <div className="mt-5 space-y-3">
                {["Website launch", "Sales enablement", "Customer health"].map(
                  (project) => (
                    <div
                      key={project}
                      className="rounded-lg border bg-background px-4 py-3 text-sm font-medium"
                    >
                      {project}
                    </div>
                  )
                )}
              </div>
            </section>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
