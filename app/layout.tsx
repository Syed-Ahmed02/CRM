import { Crimson_Pro, Geist_Mono, Gloock } from "next/font/google"

import "./globals.css"
import { ClerkProvider } from "@clerk/nextjs"
import { ConvexClientProvider } from "@/components/convex-client-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const gloockHeading = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
})

const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const clerkAppearance = {
  variables: {
    colorPrimary: "#C76F4A",
    colorPrimaryForeground: "#F2EAD7",
    colorForeground: "#2B1F17",
    colorMutedForeground: "#7A8260",
    colorBackground: "#F2EAD7",
    colorInput: "#F7F0E3",
    colorInputForeground: "#2B1F17",
    colorBorder: "#D9CEB8",
    colorRing: "#C76F4A",
    colorDanger: "#8C3A1E",
    colorSuccess: "#7A8260",
    colorWarning: "#D9A14B",
    colorNeutral: "#7A8260",
    borderRadius: "0.5rem",
    fontFamily: "var(--font-sans)",
    fontFamilyButtons: "var(--font-sans)",
  },
  elements: {
    cardBox:
      "shadow-lg shadow-wuslah-walnut/10 ring-1 ring-border/70 rounded-xl overflow-hidden",
    card: "bg-card text-card-foreground",
    headerTitle: "font-heading text-2xl font-normal tracking-normal",
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
        crimsonPro.variable,
        gloockHeading.variable,
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
