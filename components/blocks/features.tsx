'use client'

import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { RiGlobalLine, RiUserSearchLine, RiLinkM, RiCalendarLine, RiBrainLine, RiTeamLine } from '@remixicon/react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

const fadeUp = {
    hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
    visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: { type: 'spring', bounce: 0.25, duration: 0.8 },
    },
}

const stagger = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

export function FeatureSection() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section className="dark:bg-muted/25 bg-zinc-50 py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <motion.div
                    ref={ref}
                    variants={stagger}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="mx-auto grid gap-2 sm:grid-cols-5"
                >
                    {/* Top-left large card */}
                    <motion.div variants={fadeUp} className="sm:col-span-3">
                        <Card className="group overflow-hidden shadow-black/5 sm:rounded-none sm:rounded-tl-xl h-full">
                            <CardHeader>
                                <div className="md:p-6">
                                    <p className="font-medium">Smart Connection Tracking</p>
                                    <p className="text-muted-foreground mt-3 max-w-sm text-sm">
                                        Never lose touch with your network. Automatically log interactions, set follow-up reminders, and surface the right contacts at the right time.
                                    </p>
                                </div>
                            </CardHeader>

                            <div className="relative h-fit pl-6 md:pl-12">
                                <div className="absolute -inset-6 [background:radial-gradient(75%_95%_at_50%_0%,transparent,hsl(var(--background))_100%)]"></div>
                                <div className="bg-background overflow-hidden rounded-tl-lg border-l border-t pl-2 pt-2 dark:bg-zinc-950">
                                    <img
                                        src="https://tailark.com/_next/image?url=%2Fmail2.png&w=3840&q=75"
                                        className="hidden dark:block"
                                        alt="Connection tracking dashboard dark"
                                        width={1207}
                                        height={929}
                                    />
                                    <img
                                        src="https://tailark.com/_next/image?url=%2Fmail2-light.png&w=3840&q=75"
                                        className="shadow dark:hidden"
                                        alt="Connection tracking dashboard light"
                                        width={1207}
                                        height={929}
                                    />
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Top-right card */}
                    <motion.div variants={fadeUp} className="sm:col-span-2">
                        <Card className="group overflow-hidden shadow-zinc-950/5 sm:rounded-none sm:rounded-tr-xl h-full">
                            <p className="mx-auto my-6 max-w-md text-balance px-6 text-center text-lg font-semibold sm:text-2xl md:p-6">
                                Discover the right people. Build meaningful connections.
                            </p>
                            <CardContent className="mt-auto h-fit">
                                <div className="relative mb-6 sm:mb-0">
                                    <div className="absolute -inset-6 [background:radial-gradient(50%_75%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                                    <div className="aspect-76/59 overflow-hidden rounded-r-lg border">
                                        <img
                                            src="https://tailark.com/_next/image?url=%2Forigin-cal-dark.png&w=3840&q=75"
                                            className="hidden dark:block"
                                            alt="People discovery dark"
                                            width={1207}
                                            height={929}
                                        />
                                        <img
                                            src="https://tailark.com/_next/image?url=%2Forigin-cal.png&w=3840&q=75"
                                            className="shadow dark:hidden"
                                            alt="People discovery light"
                                            width={1207}
                                            height={929}
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Bottom-left hotkey card */}
                    <motion.div variants={fadeUp} className="sm:col-span-2">
                        <Card className="group p-6 shadow-black/5 sm:rounded-none sm:rounded-bl-xl md:p-12 h-full">
                            <p className="mx-auto mb-12 max-w-md text-balance text-center text-lg font-semibold sm:text-2xl">
                                Access your network instantly, from anywhere.
                            </p>
                            <div className="flex justify-center gap-6">
                                <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 relative flex aspect-square size-16 items-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black">
                                    <span className="absolute right-2 top-1 block text-sm">fn</span>
                                    <RiGlobalLine className="mt-auto size-4" />
                                </div>
                                <div className="inset-shadow-sm dark:inset-shadow-white/5 bg-muted/35 flex aspect-square size-16 items-center justify-center rounded-[7px] border p-3 shadow-lg ring dark:shadow-white/5 dark:ring-black">
                                    <span>N</span>
                                </div>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Bottom-right integrations card */}
                    <motion.div variants={fadeUp} className="sm:col-span-3">
                        <Card className="group relative shadow-black/5 sm:rounded-none sm:rounded-br-xl h-full">
                            <CardHeader className="p-6 md:p-12">
                                <p className="font-medium">Seamless Integrations</p>
                                <p className="text-muted-foreground mt-2 max-w-sm text-sm">
                                    Sync with the tools you already use — calendar, email, LinkedIn, and more — so your network stays up to date automatically.
                                </p>
                            </CardHeader>
                            <CardContent className="relative h-fit px-6 pb-6 md:px-12 md:pb-12">
                                <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
                                    <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                                    <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                        <img
                                            className="m-auto size-8 invert dark:invert-0"
                                            src="https://oxymor-ns.tailus.io/logos/linear.svg"
                                            alt="Linear logo"
                                            width="32"
                                            height="32"
                                        />
                                    </div>
                                    <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                                    <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                        <img
                                            className="m-auto size-8 invert dark:invert-0"
                                            src="https://oxymor-ns.tailus.io/logos/netlify.svg"
                                            alt="Netlify logo"
                                            width="32"
                                            height="32"
                                        />
                                    </div>
                                    <div className="rounded-(--radius) aspect-square border border-dashed"></div>
                                    <div className="rounded-(--radius) bg-muted/50 flex aspect-square items-center justify-center border p-4">
                                        <img
                                            className="m-auto size-8 invert dark:invert-0"
                                            src="https://oxymor-ns.tailus.io/logos/github.svg"
                                            alt="GitHub logo"
                                            width="32"
                                            height="32"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
