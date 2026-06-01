import {
  Heading,
  Text,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@opencosmos/ui';
import { Section } from './Section';

const COLUMNS = ['PreflightUX', 'Aaru', 'Synthetic Users', 'Maze AI'];

const ROWS = [
  {
    label: 'Primary focus',
    values: [
      'Expert-grade workflow usability & structural friction',
      'Macro-market sentiment & demographic polling',
      'Qualitative concept & copy validation',
      'Unmoderated human usability testing',
    ],
  },
  {
    label: 'Mechanics',
    values: [
      'Browser-driving agents on live interfaces',
      'Statistical respondents to surveys',
      'Chat-based generative interviews',
      'Humans executing click-paths',
    ],
  },
  {
    label: 'Moat',
    values: [
      'Published calibration + academic peer review',
      'Proprietary scale & data ingestion',
      'First-mover brand in the AI niche',
      'Access to paid human panels',
    ],
  },
];

export function Differentiation() {
  return (
    <Section id="differentiation" variant="wide">
      <div className="max-w-2xl mb-10">
        <Heading level={2}>Why it’s different</Heading>
        <Text variant="secondary" size="lg" className="mt-4">
          Every commercial platform synthesizes consumer personas. None grade for
          domain expertise. None publish calibration reports against real users. The
          expert-user, calibration-disciplined lane is wide open — and that’s the one
          PreflightUX runs in.
        </Text>
      </div>
      <div className="overflow-x-auto rounded-lg border border-[var(--color-border)]/40">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-40">Dimension</TableHead>
              {COLUMNS.map((c, i) => (
                <TableHead
                  key={c}
                  className={i === 0 ? 'text-[var(--color-primary)] font-semibold' : ''}
                >
                  {c}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {ROWS.map((row) => (
              <TableRow key={row.label}>
                <TableHead scope="row" className="font-medium align-top">
                  {row.label}
                </TableHead>
                {row.values.map((v, i) => (
                  <TableCell
                    key={i}
                    className={`align-top ${i === 0 ? 'text-[var(--color-text-primary)] font-medium' : 'text-[var(--color-text-secondary)]'}`}
                  >
                    {v}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Section>
  );
}
