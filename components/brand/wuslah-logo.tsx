import { cn } from "@/lib/utils"

export function WuslahMark({
  className,
  variant = "default",
}: {
  className?: string
  variant?: "default" | "inverse"
}) {
  const primaryClass =
    variant === "inverse" ? "text-primary-foreground" : "text-wuslah-terracotta"
  const secondaryClass =
    variant === "inverse"
      ? "text-primary-foreground/75"
      : "text-wuslah-sienna"

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("size-5 shrink-0", className)}
    >
      <circle
        cx="9"
        cy="12"
        r="6"
        stroke="currentColor"
        strokeWidth="1.5"
        className={primaryClass}
      />
      <circle
        cx="15"
        cy="12"
        r="6"
        stroke="currentColor"
        strokeWidth="1.5"
        className={secondaryClass}
      />
    </svg>
  )
}

export function WuslahLogo({
  className,
  showMark = true,
}: {
  className?: string
  showMark?: boolean
}) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      {showMark ? <WuslahMark /> : null}
      <span className="font-heading text-xl leading-none text-foreground">
        Wuslah
      </span>
    </span>
  )
}
