import { Heading, Text, Timeline, TimelineItem } from '@opencosmos/ui';
import { Section } from './Section';

const STEPS = [
  {
    title: 'Artifact in',
    description: 'Hand us a prototype, a Figma flow, or a written PRD. No production code required.',
  },
  {
    title: 'Double-grounded personas',
    description: 'Personas grounded in real, anonymized interview transcripts and skill-graded on the exact axes your product demands.',
  },
  {
    title: 'The User Agent drives the UI',
    description: 'A browser-driving agent navigates as each persona — thinking aloud, hitting friction, and generating an interaction trace.',
  },
  {
    title: 'The Judge Agent scores it',
    description: "An independent critic grades each trace against Nielsen's heuristics and your domain-specific rules — separating simulation from critique.",
  },
  {
    title: 'Signal out',
    description: 'A severity-ranked critique plus a calibration score, visualized as an interactive cohort constellation.',
  },
];

export function HowItWorks() {
  return (
    <Section id="how" variant="narrow">
      <div className="mb-12">
        <Heading level={2}>How it works</Heading>
        <Text variant="secondary" size="lg" className="mt-4 max-w-2xl">
          One pipeline, two agents, and a discipline of measuring itself against
          reality.
        </Text>
      </div>
      <Timeline>
        {STEPS.map((step, i) => (
          <TimelineItem
            key={step.title}
            title={step.title}
            description={step.description}
            status={i === STEPS.length - 1 ? 'active' : 'completed'}
            isLast={i === STEPS.length - 1}
          />
        ))}
      </Timeline>
    </Section>
  );
}
