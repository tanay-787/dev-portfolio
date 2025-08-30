'use client';

import * as React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type ScrollArrowProps = {
  href?: string | (() => void);
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
  ariaLabel?: string;
  duration?: number;     // time each chevron takes once
  spacing?: number;
  waveDelay?: number;    // delay between full waves
};

const sizeMap = { sm: 14, md: 20, lg: 26 } as const;

export function ScrollArrow({
  href = '#',
  className,
  size = 'md',
  active = true,
  ariaLabel = 'Scroll down',
  duration = 1.8,
  spacing = 14,
  waveDelay = 0.8,  // added delay between cycles
}: ScrollArrowProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (typeof href === 'function') {
      e.preventDefault();
      href();
    } else if (typeof href === 'string' && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const count = 3;
  const offset = duration / count;

  const animateProps = {
    opacity: [0, 1, 0],
    y: [0, spacing * 0.5, spacing],
  };

  const transitionProps = {
    duration,
    ease: 'linear' as const,
    repeat: Infinity,
    repeatDelay: waveDelay,
  };

  return (
    <a
      href={typeof href === 'string' ? href : '#'}
      onClick={handleClick}
      aria-label={ariaLabel}
      role="button"
      className={cn(
        'inline-flex items-center justify-center overflow-hidden h-22 w-8',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60',
        className
      )}
    >
      <div className="relative flex flex-col items-center justify-start">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            aria-hidden
            initial={{ opacity: 0, y: 0 }}
            animate={active ? animateProps : {}}
            transition={
              active
                ? {
                    ...transitionProps,
                    delay: i * offset,
                  }
                : {}
            }
            className="flex items-center"
          >
            <ChevronDown
              size={sizeMap[size]}
              color="currentColor"
              strokeWidth={2}
            />
          </motion.span>
        ))}
      </div>
    </a>
  );
}

export default ScrollArrow;
