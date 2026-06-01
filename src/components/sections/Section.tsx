import { Container } from '@opencosmos/ui';

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  variant?: 'standard' | 'wide' | 'narrow';
  className?: string;
};

/**
 * Consistent vertical rhythm + max-width wrapper for landing-page sections.
 * Uses the OpenCosmos Container for design-system-aligned widths and padding.
 */
export function Section({ id, children, variant = 'standard', className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <Container variant={variant}>{children}</Container>
    </section>
  );
}
