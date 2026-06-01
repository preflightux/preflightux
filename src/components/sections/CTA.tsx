import { Heading, Text, Button } from '@opencosmos/ui';
import { ArrowRightIcon, GithubIcon } from '../icons';
import { Section } from './Section';

export function CTA() {
  return (
    <Section id="contact" variant="narrow" className="text-center">
      <Heading level={2}>Run a pre-flight on your next build</Heading>
      <Text variant="secondary" size="lg" className="mt-4 max-w-xl mx-auto">
        PreflightUX is taking a small number of design-partner engagements. If
        you’re shipping a complex B2B product and want empirical signal before you
        commit engineering capital, let’s talk.
      </Text>
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Button size="lg" asChild className="cursor-pointer">
          <a href="mailto:shalom@shalomormsby.com?subject=PreflightUX%20pre-flight%20inquiry">
            Request a pre-flight
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild className="cursor-pointer gap-2">
          <a
            href="https://github.com/preflightux/preflightux"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="w-4 h-4" />
            Read the manifesto
          </a>
        </Button>
      </div>
    </Section>
  );
}
