'use client';

import { Header, Button } from '@opencosmos/ui';
import { GithubIcon } from '../components/icons';
import { Hero } from '../components/sections/Hero';
import { CostAsymmetry } from '../components/sections/CostAsymmetry';
import { Offer } from '../components/sections/Offer';
import { FoundationalRigor } from '../components/sections/FoundationalRigor';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Differentiation } from '../components/sections/Differentiation';
import { Credibility } from '../components/sections/Credibility';
import { CTA } from '../components/sections/CTA';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] selection:bg-[var(--color-primary)] selection:text-white flex flex-col">
      <Header
        logo={<span className="text-xl font-bold tracking-tight">PreflightUX</span>}
        navAlignment="right"
        navLinks={[
          { label: 'What you get', href: '#offer' },
          { label: 'Method', href: '#method' },
          { label: 'How it works', href: '#how' },
          { label: 'Differentiation', href: '#differentiation' },
        ]}
        actions={
          <Button variant="outline" size="sm" asChild className="gap-2 cursor-pointer">
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
        <Hero />
        <CostAsymmetry />
        <Offer />
        <FoundationalRigor />
        <HowItWorks />
        <Differentiation />
        <Credibility />
        <CTA />
      </div>

      <footer className="py-6 text-center text-sm text-[var(--color-text-secondary)] border-t border-[var(--color-border)]/10 mt-auto">
        <p>
          Built with{' '}
          <a
            href="https://studio.opencosmos.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-primary)] hover:underline transition-colors"
          >
            OpenCosmos UI
          </a>
        </p>
      </footer>
    </main>
  );
}
