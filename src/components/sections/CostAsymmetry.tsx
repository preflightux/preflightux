import { Heading, Text, Badge } from '@opencosmos/ui';
import { Section } from './Section';

export function CostAsymmetry() {
  return (
    <Section variant="narrow" className="text-center">
      <Badge variant="outline" size="md" className="mb-6">
        The cost asymmetry
      </Badge>
      <Heading level={2} className="!leading-tight">
        A flaw caught in a design file costs a revision.
        <br className="hidden md:block" />
        <span className="text-[var(--color-text-secondary)]">
          {' '}The same flaw caught after launch costs a re-build.
        </span>
      </Heading>
      <Text variant="secondary" size="lg" className="mt-6 max-w-2xl mx-auto">
        Yet the specialized users who would surface it — growth scientists, SREs,
        clinicians, associate lawyers — are scarce, expensive, and slow to recruit
        before there is anything built to test. So the riskiest decisions get made
        on the thinnest evidence. PreflightUX closes that gap.
      </Text>
    </Section>
  );
}
