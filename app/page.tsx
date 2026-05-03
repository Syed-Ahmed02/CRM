import { HeroSection } from "@/components/blocks/hero"
import { FeatureSection } from "@/components/blocks/features"
import { TestimonialsSection } from "@/components/blocks/testimonials"
import { CTASection } from "@/components/blocks/cta"
import { Footer } from "@/components/blocks/footer"
import { BlurFade } from "@/components/ui/blur-fade"

export default function Page() {
  return (
    <>
      <HeroSection />
      <BlurFade inView delay={0.05} duration={0.55} offset={18}>
        <FeatureSection />
      </BlurFade>
      <BlurFade inView delay={0.05} duration={0.55} offset={18}>
        <TestimonialsSection />
      </BlurFade>
      <BlurFade inView delay={0.05} duration={0.5} offset={16}>
        <CTASection />
      </BlurFade>
      <BlurFade inView duration={0.5} offset={14}>
        <Footer />
      </BlurFade>
    </>
  )
}
