import { StatCard } from '@opencosmos/ui';
import { Section } from './Section';

export function Credibility() {
  return (
    <Section variant="wide">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard
          label="Peer review"
          value="CHI 2027"
          description="The methodology is being formalized for submission to ACM CHI — institutional credibility a wrapper can’t replicate."
        />
        <StatCard
          label="Calibration report"
          value="In progress"
          description="The first public benchmark — synthetic findings vs. real users on the same scenarios — is underway."
        />
        <StatCard
          label="Substrate"
          value="Open source"
          description="Built on the OpenCosmos UI system. The foundations are auditable; the methodology is the moat."
        />
      </div>
    </Section>
  );
}
