# shalom.design — Next Steps

**The tracking doc.** One place for what's next, who owns it, and what gates what. Update in place; strike or check items rather than deleting, so the trail stays readable.

> **On hold since 2026-10-28**, Shalom's call at the first weekly review, with Gate 1 below. Two things have moved since this was written. [Agency of One ADR 0030](https://github.com/agencyofone/agencyofone/blob/main/docs/decisions/0030-agency-of-one-is-the-offer.md) makes Agency of One the offer, with Preflight a method inside it, so the brand architecture below is superseded. [ADR 0013](https://github.com/agencyofone/agencyofone/blob/main/docs/decisions/0013-preflightux-retained-one-engine-two-faces.md) keeps PreflightUX as the engine's B2B face. Gate 2, the Phase 0 backtest, still decides whether the method has signal at all, whichever face sells it.

---

## Brand architecture (decided 2026-07-05)

- **shalom.design** — the practice. The seller and the brand. "I take your prototype, redesign what fails against your real expert users' synthetic counterparts, and hand you a validated design with the before/after evidence." Domain registered 2026-07-05.
- **PreflightUX** — the instrument inside the practice. The synthetic-testing protocol: actor + judge + calibration. Carries the calibration reports and the CHI paper. Named separately from the practice on purpose: *the design is Shalom's; the measurement is PreflightUX's pre-registered protocol* — the structural answer to grading-your-own-homework.
- **Wedge buyer (inception phase):** early-stage founders building expert tools. Research-mature orgs are the later market.

**Strategy freeze holds:** no new strategy docs, no flywheel work, no synth-self. Occam reductions and corrections only, until the two gates below are passed.

---

## The two gates (everything else waits on these)

### Gate 1 — H1: the value test · **Shalom's hands**

*Hypothesis: founders will pay ≥3× more for the validated-design offer (D) than the report offer (B), and say yes faster.* Full protocol: [value-statement-candidates.md](value-statement-candidates.md).

- [ ] Mark up the B and D sentences until both sound natural said aloud
- [ ] List 3–5 founders in the target profile (network, Creative Powerup)
- [ ] Run the conversations: both statements, same order, then "Which would you pay for? What would you expect each to cost?" Record verbatim.
- [ ] Bonus calibration: open with the practice framing ("I run a design practice…") and note whether *practice* or *product* framing earns more trust
- [ ] Verdict: D wins → D is the offer, B is its diagnostic first week. B wins → the report is the product, the fix loop is the upsell.

### Gate 2 — Phase 0: the backtest · **Claude's hands, Shalom's judgment** · *runs in parallel, not blocked by Gate 1*

*Can the synthetic pipeline blindly re-find usability findings humans already published?* If not, both B and D rest on noise — stop and fix the method. Protocol: [early-ideation/STRATEGY.md](early-ideation/STRATEGY.md), Part 2–3.

- [ ] Claude: identify 3–5 interfaces with publicly documented usability findings (NN/g case studies, GOV.UK writeups, academic HCI appendices, open-source UX issue logs)
- [ ] Claude: minimal persona spec (with consent/provenance/fidelity fields — the only permitted on-ramp), Actor prompt (screenshot-sequence mode, no browser automation), Judge prompt in a **different model family**
- [ ] Claude: precision/recall script, bucketed by Nielsen heuristic class
- [ ] Run blind — Actor and Judge never see the human findings
- [ ] Shalom: the finding-match judgments (human calls, not LLM-graded end-to-end) and the go/no-go read
- [ ] Output: internal per-class calibration memo — the first honest number

---

## After the gates

- [ ] **Rebrand build-out** *(after Gate 1 — the winning language writes the site)*: shalom.design becomes the practice site; PreflightUX repositioned as the named instrument within it; README rewritten in the winning offer's voice. Claude drafts; Shalom approves.
- [ ] **Arm's-length calibration partner** *(after Gate 2 proves the method has signal)*: Shalom names 3 candidates — real B2B/expert-tool prototype, reachable users, no financial entanglement. Claude drafts the offer one-pager in the winning language: free pre-flight in exchange for the paired 5-user human study and publication rights, published regardless of outcome.
- [ ] **First practice engagement** *(after both gates)*: shaped by the H1 verdict; the PreflightUX protocol locked and pre-registered before any redesign work begins.

## Frozen (do not touch until gates pass + reactivation trigger)

Panels/regression product (C) · triage-router productization (A) · synth-self, flywheel, marketplace · site expansion beyond the rebrand · any new strategy doc.

## Done

- [x] Strategy freeze declared (2026-07-05)
- [x] README + Credibility card overclaim fixed — status now truthful (2026-07-05)
- [x] Value-statement candidates B/A/C/D drafted, six-question format, H1 formalized (2026-07-05)
- [x] Wedge decided: early-stage founders building expert tools (2026-07-05)
- [x] shalom.design registered; brand architecture decided — practice + instrument (2026-07-05)
