'use client';

import { Header, Button, HeroBlock, OrbBackground, Typewriter } from '@opencosmos/ui';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] selection:bg-[var(--color-primary)] selection:text-white flex flex-col">
      <Header
        logo={<span className="text-xl font-bold tracking-tight">PreflightUX</span>}
        navAlignment="right"
        navLinks={[]}
        actions={
          <Button
            variant="outline"
            size="sm"
            asChild
            className="gap-2 cursor-pointer"
          >
            <a
              href="https://github.com/preflightux/preflightux"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="w-4 h-4" />
              Star on GitHub
            </a>
          </Button>
        }
      />
      <div className="flex-1 flex flex-col">
        <HeroBlock
            className="flex-1 min-h-[90vh] pt-24 dark bg-background"
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
            description={
              <span className="text-lg md:text-xl">
                Run high-fidelity, interactive simulations of specialized user personas against early product artifacts to surface deep usability friction before writing a single line of production code.
              </span>
            }
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
                                'De-risk engineering capital.',
                                'Validate complex B2B workflows.',
                                'Uncover mental model mismatches.',
                                'Calibrated against real transcripts.'
                            ]}
                            speed={0.08}
                            loop={true}
                            delay={3}
                            cursor="|"
                        />
                    </span>
                </div>
                <Button 
                    size="lg" 
                    variant="ghost" 
                    onClick={() => window.open('https://github.com/preflightux/preflightux', '_blank')}
                    className="cursor-pointer bg-white/10 backdrop-blur-md hover:bg-[var(--color-text-primary)] hover:text-[var(--color-background)] transition-all duration-300"
                >
                    Read the manifesto
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Button>
            </div>
        </HeroBlock>
      </div>

      <footer className="py-6 text-center text-sm text-[var(--color-text-secondary)] border-t border-[var(--color-border)]/10 mt-auto">
        <p>Built with <a href="https://studio.opencosmos.ai/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:underline transition-colors">OpenCosmos UI</a></p>
      </footer>
    </main>
  );
}
