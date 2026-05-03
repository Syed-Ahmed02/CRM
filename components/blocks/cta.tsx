import { Button } from '@/components/ui/button';
import { RiArrowRightLine, RiCalendarLine } from '@remixicon/react';
import Link from 'next/link';

export function CTASection() {
  return (
    <section className="bg-muted py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-foreground max-w-lg text-balance text-3xl font-semibold lg:text-4xl">
          <span className="text-muted-foreground">Build stronger relationships.</span>{' '}
          Close more deals.
        </h2>
        <p className="text-muted-foreground mt-4 max-w-md text-lg">
          Join thousands of teams who use NS to turn every contact into a lasting connection.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            render={<Link href="#" />}
            size="lg"
            className="gap-2"
          >
            Get Started Free
            <RiArrowRightLine className="size-4 opacity-70" />
          </Button>
          <Button
            render={<Link href="#" />}
            variant="outline"
            size="lg"
            className="gap-2"
          >
            <RiCalendarLine className="size-4 opacity-70" />
            Request a Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
