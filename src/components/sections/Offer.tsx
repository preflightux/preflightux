import {
  Heading,
  Text,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@opencosmos/ui';
import { ScanSearch, Scale, ShieldCheck, Gauge } from 'lucide-react';
import { Section } from './Section';

const DELIVERABLES = [
  {
    icon: ScanSearch,
    title: 'Synthetic expert-user audit',
    body: 'A cohort of synthetic expert personas drives your actual interface — or reads your PRD — thinking aloud and hitting friction the way your real power users would.',
  },
  {
    icon: Scale,
    title: 'Foundational-framework scoring',
    body: "Every interaction is graded against Nielsen's 10 usability heuristics, heuristic evaluation, and cognitive walkthrough — with severity ratings, not vibes.",
  },
  {
    icon: ShieldCheck,
    title: 'Auditable Actor / Critic critique',
    body: 'An independent Judge Agent reviews each session against domain-specific heuristics, producing a structured, traceable critique you can defend in a design review.',
  },
  {
    icon: Gauge,
    title: 'Published calibration score',
    body: 'We measure how closely the synthetic findings track real users and publish the result — so you know exactly how much to trust each finding.',
  },
];

export function Offer() {
  return (
    <Section id="offer">
      <div className="max-w-2xl mb-12">
        <Heading level={2}>What you get</Heading>
        <Text variant="secondary" size="lg" className="mt-4">
          Each engagement delivers a structured usability audit: your early
          artifacts driven by synthetic expert personas, evaluated against the
          foundational UX frameworks human researchers trust, and returned as an
          auditable, severity-rated critique — with a calibration score that says
          how closely the synthetic findings track real users.
        </Text>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DELIVERABLES.map(({ icon: Icon, title, body }) => (
          <Card key={title} variant="outline" hoverEffect className="h-full">
            <CardHeader className="p-8">
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle>{title}</CardTitle>
              <CardDescription className="mt-3 text-base leading-relaxed">
                {body}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
