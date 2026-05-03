import { Geist_Mono, Inter, Nunito_Sans } from "next/font/google"

import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { ConvexClientProvider } from "@/components/convex-client-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const nunitoSansHeading = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const clerkAppearance = {
  variables: {
    colorPrimary: "oklch(0.527 0.154 150.069)",
    colorPrimaryForeground: "oklch(0.982 0.018 155.826)",
    colorForeground: "oklch(0.145 0 0)",
    colorMutedForeground: "oklch(0.556 0 0)",
    colorBackground: "oklch(1 0 0)",
    colorInput: "oklch(1 0 0)",
    colorInputForeground: "oklch(0.145 0 0)",
    colorBorder: "oklch(0.922 0 0)",
    colorRing: "oklch(0.527 0.154 150.069)",
    colorDanger: "oklch(0.577 0.245 27.325)",
    colorSuccess: "oklch(0.527 0.154 150.069)",
    colorWarning: "oklch(0.809 0.105 251.813)",
    colorNeutral: "oklch(0.556 0 0)",
    borderRadius: "0.45rem",
    fontFamily: "var(--font-sans)",
    fontFamilyButtons: "var(--font-sans)",
  },
  elements: {
    cardBox:
      "shadow-lg shadow-zinc-950/10 ring-1 ring-border/70 rounded-xl overflow-hidden",
    card: "bg-card text-card-foreground",
    headerTitle: "font-heading text-2xl font-semibold tracking-normal",
    headerSubtitle: "text-muted-foreground",
    formFieldLabel: "text-foreground font-medium",
    formFieldInput:
      "bg-background text-foreground border-border focus-visible:ring-primary/30",
    formButtonPrimary:
      "bg-primary text-primary-foreground hover:bg-primary/85 shadow-none",
    socialButtonsBlockButton:
      "border-border bg-background text-foreground hover:bg-muted",
    footerActionLink: "text-primary hover:text-primary/80",
    identityPreviewEditButton: "text-primary hover:text-primary/80",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        fontMono.variable,
        inter.variable,
        nunitoSansHeading.variable,
      )}
    >
      <body>
        <ClerkProvider appearance={clerkAppearance}>
          <ConvexClientProvider>
            <ThemeProvider>
              <TooltipProvider>{children}</TooltipProvider>
            </ThemeProvider>
          </ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  )
}
