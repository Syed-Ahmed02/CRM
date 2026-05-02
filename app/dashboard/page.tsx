import { UserButton } from "@clerk/nextjs"

export default function DashboardPage() {
  return (
    <main className="min-h-svh bg-[radial-gradient(circle_at_top_left,var(--color-primary)/12,transparent_32rem)] p-6">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <header className="flex items-center justify-between gap-4 rounded-3xl border bg-card/80 p-5 shadow-sm backdrop-blur">
          <div>
            <p className="text-sm font-medium text-primary">
              Authenticated area
            </p>
            <h1 className="font-heading text-3xl font-semibold tracking-tight">
              Dashboard
            </h1>
          </div>
          <UserButton />
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">Status</p>
            <p className="mt-2 text-2xl font-semibold">Protected</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">Auth</p>
            <p className="mt-2 text-2xl font-semibold">Clerk</p>
          </div>
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <p className="text-sm text-muted-foreground">Backend</p>
            <p className="mt-2 text-2xl font-semibold">Convex</p>
          </div>
        </div>
      </section>
    </main>
  )
}
