import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <main className="from-background via-muted/35 to-background flex min-h-svh items-center justify-center bg-radial-[at_50%_20%] px-6 py-12">
      <SignUp signInUrl="/sign-in" fallbackRedirectUrl="/dashboard" />
    </main>
  )
}
