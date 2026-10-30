# PreflightUX — Value Statement Candidates

**Purpose:** Working doc for the one gating task: a crystal-clear statement of the concrete value PreflightUX creates for a buyer. Not strategy — a reduction of it. One of these (or a hybrid) becomes the language of the README, the site, and the arm's-length engagement offer.

**Status:** Draft for Shalom's judgment · 2026-07-05 · **Wedge decided 2026-07-05:** early-stage founders building expert tools are the inception-phase buyer. All candidates are now aimed at that buyer; research-mature orgs are the later market (A, C).

**The pass test:** a design lead can repeat it to their VP in one sentence, and the VP nods. The final validation is not this document — it's saying the chosen statement out loud to 2–3 real people and watching their faces.

Each candidate answers the same six questions: **buyer · pain day · artifact in hand · decision changed · alternative & its cost · why believe us.** Each names its own weakest point.

---

## Candidate B — "Expert signal before the build" *(recommended: sellable today)*

**One sentence for the VP:**
> "Before we commit engineering to this design, simulated versions of our actual power users run it and find the friction we'd otherwise discover in production — and the vendor publishes how often those findings match real users."

| Question | Answer |
|---|---|
| **Buyer** | The product/design lead building a tool for specialists — SREs, growth scientists, clinicians, ad-ops, associate lawyers — at the moment there's a prototype but no production code. |
| **Pain day** | The week they must commit engineering capital to one design, knowing their real users are unrecruitable pre-build: too scarce, too expensive, too slow — or there's nothing built enough to show them. |
| **Artifact in hand** | A severity-ranked usability audit: skill-graded synthetic experts drove the actual prototype (or read the PRD), and every finding is graded against Nielsen's 10 + cognitive walkthrough with a 0–4 severity — an evidence trail defensible in a design review. |
| **Decision changed** | Which design gets built; what gets fixed before a line of production code; which specific risks go into the (scarce, expensive) human sessions for confirmation. |
| **Alternative & cost** | Recruit 5 specialists: $10–20K, 4–6 weeks, frequently impossible pre-build. Or ship on intuition and discover the flaw in production at 10–100× the fix cost. |
| **Why believe us** | Findings are assessed by the orthodox instruments researchers already trust, and we are the only ones in the category who measure and publish how often we're right. Pre-calibration honesty: "we're building that proof now, and you can watch." |
| **Weakest point** | Until the founding calibration report exists, "the findings are trustworthy" is asserted, not shown. Mitigation is the alpha framing: the first engagements are free *because* we're buying the proof, not selling the findings. Also exposed to the zero-incremental-signal risk — value collapses if findings merely mirror the team's intuition. |

---

## Candidate A — "The triage router" *(the maturation of B; needs a calibration matrix to quote)*

**One sentence for the VP:**
> "We can only afford two real user studies this quarter — this tells us, with published confidence numbers, which two of our twelve open design questions actually need them."

| Question | Answer |
|---|---|
| **Buyer** | Head of UX research / design ops at a B2B product org with real research capacity that is chronically oversubscribed. |
| **Pain day** | Quarterly planning: twelve design decisions in flight, budget and recruiting pipeline for two human studies. Ten decisions will be made on gut feel. |
| **Artifact in hand** | The same audit as B, but every finding ships with its own per-class historical agreement rate: "navigation findings — 0.8 agreement, act on them; trust-perception findings — 0.4, verify with humans." |
| **Decision changed** | Where the human-research budget goes. The tool doesn't replace research; it routes it. |
| **Alternative & cost** | Prioritizing by intuition or by whoever argues loudest; a mis-allocated study means the flaw that mattered ships unexamined. |
| **Why believe us** | The confidence numbers *are* the product — accumulated, published, falsifiable. |
| **Weakest point** | Chicken-and-egg: quoting per-class confidence requires a calibration matrix that only exists after several engagements. This is B's destination, not the launch offer. Also presumes a buyer mature enough to have a research budget to route. |

---

## Candidate C — "Usability regression coverage" *(the recurring business; not sellable yet)*

**One sentence for the VP:**
> "Every build, the expert cohort re-runs the flows overnight — we find out a fix regressed before customers do, which no human panel can do weekly."

| Question | Answer |
|---|---|
| **Buyer** | Design-eng lead on a fast-iterating expert product post-launch (or late-stage pre-launch). |
| **Pain day** | Every release: design changes ship untested against power users; issues fixed last quarter silently regress; nobody notices until a customer complains. |
| **Artifact in hand** | A recurring per-build report: did fixed findings stay fixed, what new friction appeared, trend over time. A CI gate for UX. |
| **Decision changed** | Whether a build ships; what gets hotfixed this sprint. |
| **Alternative & cost** | Nothing comparable exists — humans cannot be re-run on every build. The alternative is *no coverage at all*. |
| **Why believe us** | Calibration plus longitudinal consistency: the same instrument run the same way every build. |
| **Weakest point** | Requires a productized, unattended engine and a proven calibration first. This is the abundant-income destination that B funds and A legitimizes — designing for it now is the exact scope creep the freeze forbids, beyond keeping the finding schema stable. |

---

## Candidate D — "The validated design, delivered" *(the lead hypothesis — test against B)*

**One sentence for the VP (or co-founder):**
> "We run simulated versions of your real power users against your prototype, redesign what fails, re-test until it passes, and hand you the validated design with the before/after evidence — so your engineers build the version that already works."

| Question | Answer |
|---|---|
| **Buyer** | An early-stage founder building a tool for specialists (SREs, clinicians, ad-ops, analysts, lawyers) — no research staff, no design team, a prototype in hand, engineering about to commit. |
| **Pain day** | The month they must turn the prototype into a build plan. Every screen they get wrong costs weeks of rework they can't afford; the specialists who could tell them are unreachable; they can't judge their own design because they aren't the user. |
| **Artifact in hand** | Not a report — a **tested, working prototype + the before/after evidence trail + an implementation-ready spec.** The synthetic expert cohort runs the baseline, the failures get redesigned, the same cohort re-runs the revision, and the measured delta ships with the design: "the skeptic persona failed this task twice in v1, zero times in v3 — here are the traces." |
| **Decision changed** | What their engineers build. Not "which risks to investigate" — the design itself, upgraded and evidenced, before production code exists. |
| **Alternative & cost** | A design agency (opinion-driven, no measurement, $50K+), a freelance designer (same, cheaper, slower), or building their own guess and discovering the friction from churned early customers — the most expensive possible reviewer. |
| **Why believe us** | The same calibrated instrument scores baseline and revision — judge, criteria, and scenarios locked and pre-registered *before* redesign starts, so we can't grade our own homework quietly. And the founding calibration report (arm's-length, unpaid, separate) shows how often the instrument itself tracks real humans. |
| **Weakest point** | Three, honestly: (1) **Grading-our-own-homework optics** — structurally mitigated by pre-registration and locked criteria, fully resolved only when the client's real users confirm the top deltas. (2) **Delivery cost** — each engagement now includes design iteration, not just evaluation; viable solo only because the fix layer is Shalom's actual craft plus AI leverage, but it caps concurrent engagements. (3) **Inherits every validity risk of B** — if the synthetic findings are noise, iterating on them is iterating on noise. Phase 0 gates D exactly as hard as it gates B. |

### D as a testable hypothesis

**H1:** *Early-stage founders building expert tools will pay meaningfully more (≥3×) for a validated, iterated design with before/after evidence (D) than for an evaluation report (B) — and will say yes faster.*

- **Prediction, stated before testing:** D lands harder with founders; B reads as "interesting, send me the deck"; D reads as "when can you start / what does it cost." Expected price gap ≥3×.
- **Test protocol:** 3–5 conversations with real founders in the target profile (network, Creative Powerup). Present B and D as two plain sentences, same order each time. Ask: *"Which of these would you pay for? What would you expect each to cost?"* Record verbatim answers; note where their faces change.
- **Pass:** ≥3 of 5 prefer D, at a stated price that clears the delivery cost of a solo engagement. → D becomes the offer; B survives as its diagnostic first week.
- **Fail:** founders prefer B (or price D below its delivery cost). → The report is the product; the fix loop becomes an upsell, not the headline.
- **Either way:** the answers are calibration data about the market — the same discipline the product applies to designs, applied to the business itself.

---

## Recommendation

**Test D against B; build nothing new for either.** D is the lead hypothesis — the felt value ("hand me back the design that works, with proof") is of a different magnitude than a report, it uses Shalom's actual craft, and the 2026 cost structure (cheap prototype generation, scarce knowledge of *which variant is better*) is exactly the asymmetry the engine exploits. But it's a hypothesis until H1 is run. The engine underneath B and D is identical — actor, judge, calibration — so the choice changes the *offer language and price*, not the build. Phase 0 gates both equally.

A and C are not alternatives — they are future tenses (A = the confidence-routing maturation, C = the recurring panel), and the sequence holds regardless of the B/D outcome. The reduction this doc performs: **the site, the README, and the first offer speak with one voice — whichever of B/D survives H1.**

**Right Livelihood check (all three pass, differently):** B saves teams from expensive harm without displacing researchers; A explicitly *directs* money toward human research rather than away from it; C creates coverage where no human alternative exists, so it extracts nothing from anyone. The category's ethical risk — synthetic users framed as replacing human ones — is avoided by B's closing disclosure (already in the Customer 1 pitch): *hypothesis generation with measured accuracy; real users still tell us the truth.*

## Next actions

1. Shalom: mark up B and D until both sentences are ones you can say naturally out loud.
2. Shalom: run the H1 protocol — 3–5 founder conversations, both statements, the price question. This is the aim-check before any trigger gets pulled.
3. In parallel (not blocked by H1): Phase 0 backtest — it gates B and D identically.
4. After H1: rewrite README + site hero in the winning language; draft the engagement offer one-pager from it.
