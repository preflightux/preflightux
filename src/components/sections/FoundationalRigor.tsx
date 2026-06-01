'use client';

import {
  Heading,
  Text,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@opencosmos/ui';
import { SearchCheck, Footprints, ListOrdered } from 'lucide-react';
import { Section } from './Section';

const NIELSEN_HEURISTICS = [
  ['Visibility of system status', 'The interface keeps users informed about what is happening through timely, appropriate feedback.'],
  ['Match between system and the real world', "Speaks the users' language and follows real-world conventions instead of system jargon."],
  ['User control and freedom', 'Clear emergency exits, undo, and redo for actions taken by mistake.'],
  ['Consistency and standards', 'The same words, actions, and patterns mean the same thing throughout the product.'],
  ['Error prevention', 'Designs that prevent problems from occurring beat even the best error messages.'],
  ['Recognition rather than recall', 'Make options, actions, and information visible — do not force users to remember.'],
  ['Flexibility and efficiency of use', 'Accelerators and shortcuts serve experts without getting in the way of novices.'],
  ['Aesthetic and minimalist design', 'Every extra unit of information competes with the units that actually matter.'],
  ['Recognize, diagnose, and recover from errors', 'Plain-language errors that name the problem and suggest a concrete solution.'],
  ['Help and documentation', 'When help is needed it is easy to search, task-focused, and concrete.'],
];

const METHODS = [
  {
    icon: SearchCheck,
    title: 'Heuristic evaluation',
    body: 'Each persona inspects the interface against the full heuristic set, flagging violations the way a trained evaluator panel would.',
  },
  {
    icon: Footprints,
    title: 'Cognitive walkthrough',
    body: 'Personas attempt real tasks step by step, exposing the exact points where the product breaks the user’s mental model.',
  },
  {
    icon: ListOrdered,
    title: 'Severity ratings',
    body: 'Findings are scored 0–4 on frequency, impact, and persistence — so you fix the right things in the right order.',
  },
];

export function FoundationalRigor() {
  return (
    <Section id="method" className="bg-[var(--color-text-primary)]/[0.02]">
      <div className="max-w-2xl mb-12">
        <Badge variant="info" size="md" className="mb-4">
          Grounded in foundational UX science
        </Badge>
        <Heading level={2}>Rigor isn’t the new part. The users are.</Heading>
        <Text variant="secondary" size="lg" className="mt-4">
          Synthetic expert users are the bleeding edge. The standards we judge them
          by are not. PreflightUX evaluates every finding against the same
          battle-tested frameworks expert UX researchers have relied on for decades —
          so the signal is both novel in how it’s produced and orthodox in how it’s
          assessed.
        </Text>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {METHODS.map(({ icon: Icon, title, body }) => (
          <Card key={title} variant="outline" className="h-full">
            <CardHeader className="p-8">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                <Icon className="h-5 w-5" />
              </div>
              <CardTitle className="text-lg">{title}</CardTitle>
              <CardDescription className="mt-3 leading-relaxed">{body}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="max-w-3xl">
        <Heading level={3} className="mb-2">
          Nielsen’s 10 usability heuristics
        </Heading>
        <Text variant="secondary" className="mb-6">
          The Judge Agent scores every session against all ten — alongside the
          domain-specific heuristics authored for your product.
        </Text>
        <Accordion type="single" collapsible className="w-full">
          {NIELSEN_HEURISTICS.map(([title, body], i) => (
            <AccordionItem key={title} value={`h-${i}`}>
              <AccordionTrigger className="text-left">
                <span className="flex items-baseline gap-3">
                  <span className="text-[var(--color-primary)] tabular-nums font-semibold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>{title}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <Text variant="secondary" className="pl-9">
                  {body}
                </Text>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
