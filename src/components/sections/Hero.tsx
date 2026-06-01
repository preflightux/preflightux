'use client';

import { Button, HeroBlock, OrbBackground, Typewriter } from '@opencosmos/ui';
import { ArrowRightIcon } from '../icons';

export function Hero() {
  return (
    <HeroBlock
      className="flex-1 min-h-[92vh] pt-24 dark bg-background"
      headline={
        <span className="block">
          <span className="block text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-none pb-2 text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] animate-gradient-x">
            PreflightUX
          </span>
          <span className="block text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-3">
            Empirical Signal Before the Build
          </span>
        </span>
      }
      description="Run calibrated synthetic expert users against your early designs and prototypes to surface deep workflow friction — graded against the same foundational UX frameworks human researchers trust — before you write a line of production code."
      badge="Calibrated Synthetic UX Testing"
      background={
        <OrbBackground
          hue={260}
          hoverIntensity={0.5}
          rotateOnHover={true}
          forceHoverState={false}
          orbColor1="#9c43fe"
          orbColor2="#4cc2e9"
          orbColor3="#101499"
          backgroundColor="#000000"
        />
      }
    >
      <div className="pt-4 flex flex-col items-center gap-8">
        <div className="h-8 flex items-center justify-center text-[var(--color-text-secondary)] font-medium text-lg">
          <span className="text-[var(--color-primary)]">
            <Typewriter
              text={[
                "Graded against Nielsen's 10 heuristics.",
                'Validate complex B2B workflows.',
                'Uncover mental-model mismatches.',
                'Calibrated against real users.',
              ]}
              speed={0.08}
              loop={true}
              delay={3}
              cursor="|"
            />
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <Button
            size="lg"
            asChild
            className="cursor-pointer"
          >
            <a href="#contact">
              Request a pre-flight
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            asChild
            className="cursor-pointer bg-white/10 backdrop-blur-md hover:bg-[var(--color-text-primary)] hover:text-[var(--color-background)] transition-all duration-300"
          >
            <a
              href="https://github.com/preflightux/preflightux"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the manifesto
            </a>
          </Button>
        </div>
      </div>
    </HeroBlock>
  );
}
