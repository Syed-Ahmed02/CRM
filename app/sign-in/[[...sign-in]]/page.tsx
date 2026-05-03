import { SignIn } from "@clerk/nextjs"

export default function SignInPage() {
  return (
    <main className="from-background via-muted/35 to-background flex min-h-svh items-center justify-center bg-radial-[at_50%_20%] px-6 py-12">
      <SignIn signUpUrl="/sign-up" fallbackRedirectUrl="/dashboard" />
    </main>
  )
}
