"use client"

import { motion, type Variants } from "motion/react"

import { cn } from "@/lib/utils"

type BlurFadeProps = {
  children: React.ReactNode
  className?: string
  variant?: Variants
  duration?: number
  delay?: number
  offset?: number
  direction?: "up" | "down" | "left" | "right"
  inView?: boolean
  inViewMargin?: `${number}px` | `${number}%` | `${number}px ${number}px` | `${number}px ${number}px ${number}px ${number}px`
  blur?: string
}

const directionOffset = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
} as const

export function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) {
  const axisOffset = directionOffset[direction]
  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: `blur(${blur})`,
      x: "x" in axisOffset ? axisOffset.x * offset : 0,
      y: "y" in axisOffset ? axisOffset.y * offset : 0,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
    },
  }

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      animate={inView ? undefined : "visible"}
      whileInView={inView ? "visible" : undefined}
      viewport={inView ? { once: true, margin: inViewMargin } : undefined}
      variants={variant ?? defaultVariants}
      transition={{ delay, duration, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
