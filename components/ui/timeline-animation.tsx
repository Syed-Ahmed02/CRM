'use client';
import { cn } from '@/lib/utils';
import { motion, useInView } from 'motion/react';
import { ReactNode, RefObject } from 'react';

const motionElements = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
  section: motion.section,
  article: motion.article,
} as const;

type SupportedTag = keyof typeof motionElements;

type CustomVariants = {
  visible: (i: number) => object;
  hidden: object;
};

type TimelineContentProps = {
  as?: SupportedTag;
  className?: string;
  animationNum: number;
  customVariants: CustomVariants;
  timelineRef: RefObject<HTMLElement | null>;
  children: ReactNode;
};

export function TimelineContent({
  as = 'div',
  className,
  animationNum,
  customVariants,
  timelineRef,
  children,
}: TimelineContentProps) {
  const isInView = useInView(timelineRef as RefObject<Element>, {
    once: true,
    margin: '-5% 0px',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = motionElements[as] as any;

  return (
    <MotionTag
      className={cn(className)}
      custom={animationNum}
      variants={customVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </MotionTag>
  );
}
