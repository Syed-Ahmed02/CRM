'use client';
import { TimelineContent } from '@/components/ui/timeline-animation';
import Image from 'next/image';
import { useRef } from 'react';

const revealVariants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      delay: i * 0.12,
      duration: 0.5,
    },
  }),
  hidden: {
    filter: 'blur(10px)',
    y: -20,
    opacity: 0,
  },
};

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="bg-background relative h-full py-16 md:py-24"
    >
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-screen-md space-y-3 text-center">
          <TimelineContent
            as="h2"
            className="text-foreground text-balance text-3xl font-semibold lg:text-4xl"
            animationNum={0}
            customVariants={revealVariants}
            timelineRef={sectionRef}
          >
            Trusted by networking teams worldwide
          </TimelineContent>
          <TimelineContent
            as="p"
            className="text-muted-foreground mx-auto"
            animationNum={1}
            customVariants={revealVariants}
            timelineRef={sectionRef}
          >
            Here's what our customers say about building relationships with NS
          </TimelineContent>
        </div>

        <div className="flex flex-col gap-2 pt-10 lg:grid lg:grid-cols-3 lg:px-0 lg:py-10">
          {/* Column 1 */}
          <div className="flex flex-col gap-2 md:flex">
            <TimelineContent
              animationNum={2}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="border-border bg-primary text-primary-foreground relative flex flex-1 flex-col justify-end overflow-hidden rounded-xl border p-5"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
              <article className="relative mt-auto">
                <p className="text-sm leading-relaxed">
                  "NS completely transformed how our sales team manages
                  relationships. Pipeline visibility went from a nightmare to a
                  breeze overnight."
                </p>
                <div className="flex items-end justify-between pt-5">
                  <div>
                    <h3 className="font-semibold">Guillermo Rauch</h3>
                    <p className="text-primary-foreground/70 text-sm">CEO of Vercel</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop"
                    alt="Guillermo Rauch"
                    width={200}
                    height={200}
                    className="size-14 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={3}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="border-border bg-chart-3 flex flex-col justify-end overflow-hidden rounded-xl border p-5 text-white"
            >
              <article className="mt-auto">
                <p className="text-sm leading-relaxed">
                  "We closed 40% more deals in Q1 after switching. The contact
                  intelligence features are unmatched."
                </p>
                <div className="flex items-end justify-between pt-5">
                  <div>
                    <h3 className="font-semibold">Rika Shinoda</h3>
                    <p className="text-white/70 text-sm">Head of Sales, Kintsugi</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?q=80&w=687&auto=format&fit=crop"
                    alt="Rika Shinoda"
                    width={200}
                    height={200}
                    className="size-14 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            {[
              {
                num: 4,
                quote:
                  '"The automated follow-up sequences save our reps 3 hours a day. Relationship management has never felt this effortless."',
                name: 'Marcus Chen',
                role: 'VP Sales, OdeaoLabs',
                img: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1021&auto=format&fit=crop',
              },
              {
                num: 5,
                quote:
                  '"Onboarding the whole team took a single afternoon. The UX is intuitive and the data imports were flawless."',
                name: 'Jordan Park',
                role: 'CTO, Labsbo',
                img: 'https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=687&auto=format&fit=crop',
              },
              {
                num: 6,
                quote:
                  '"Customer support responds in minutes, not days. When we had a migration issue they fixed it before we even wrote a ticket."',
                name: 'Steven Sunny',
                role: 'CEO, Boxefi',
                img: 'https://images.unsplash.com/photo-1740102074295-c13fae3e4f8a?q=80&w=687&auto=format&fit=crop',
              },
            ].map(({ num, quote, name, role, img }) => (
              <TimelineContent
                key={num}
                animationNum={num}
                customVariants={revealVariants}
                timelineRef={sectionRef}
                className="border-border bg-muted text-foreground flex flex-col justify-end overflow-hidden rounded-xl border p-5"
              >
                <article className="mt-auto">
                  <p className="text-sm leading-relaxed">{quote}</p>
                  <div className="flex items-end justify-between pt-5">
                    <div>
                      <h3 className="font-semibold">{name}</h3>
                      <p className="text-muted-foreground text-sm">{role}</p>
                    </div>
                    <Image
                      src={img}
                      alt={name}
                      width={200}
                      height={200}
                      className="size-12 rounded-xl object-cover lg:size-14"
                    />
                  </div>
                </article>
              </TimelineContent>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-2 md:flex">
            <TimelineContent
              animationNum={7}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="border-border bg-chart-3 flex flex-col justify-end overflow-hidden rounded-xl border p-5 text-white"
            >
              <article className="mt-auto">
                <p className="text-sm leading-relaxed">
                  "NS has been a key partner in our growth. Every outreach feels
                  personal even at scale."
                </p>
                <div className="flex items-end justify-between pt-5">
                  <div>
                    <h3 className="font-semibold">Priya Mehta</h3>
                    <p className="text-white/70 text-sm">Founder, OdeaoLabs</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1563237023-b1e970526dcb?q=80&w=765&auto=format&fit=crop"
                    alt="Priya Mehta"
                    width={200}
                    height={200}
                    className="size-14 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>

            <TimelineContent
              animationNum={8}
              customVariants={revealVariants}
              timelineRef={sectionRef}
              className="border-border bg-primary text-primary-foreground relative flex flex-1 flex-col justify-end overflow-hidden rounded-xl border p-5"
            >
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff18_1px,transparent_1px),linear-gradient(to_bottom,#ffffff18_1px,transparent_1px)] bg-[size:50px_56px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
              <article className="relative mt-auto">
                <p className="text-sm leading-relaxed">
                  "We evaluated six CRMs and NS won on every dimension — features,
                  speed, and the team's commitment to our success. It's genuinely
                  raised our network's value."
                </p>
                <div className="flex items-end justify-between pt-5">
                  <div>
                    <h3 className="font-semibold">Paul Brauch</h3>
                    <p className="text-primary-foreground/70 text-sm">CTO, Spectrum</p>
                  </div>
                  <Image
                    src="https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=687&auto=format&fit=crop"
                    alt="Paul Brauch"
                    width={200}
                    height={200}
                    className="size-14 rounded-xl object-cover"
                  />
                </div>
              </article>
            </TimelineContent>
          </div>
        </div>
      </div>
    </section>
  );
}
