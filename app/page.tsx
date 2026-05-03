import { HeroSection } from "@/components/blocks/hero"
import { FeatureSection } from "@/components/blocks/features"
import { TestimonialsSection } from "@/components/blocks/testimonials"
import { CTASection } from "@/components/blocks/cta"
import { Footer } from "@/components/blocks/footer"

export default function Page() {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  )
}
