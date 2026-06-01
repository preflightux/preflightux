# PreflightUX

### Empirical signal before the build.

**PreflightUX runs calibrated synthetic expert users against your early designs, prototypes, and PRDs — surfacing deep workflow friction before you write a line of production code.**

*The signal you need before the decision you can't redo.*

**Site:** [preflightux.com](https://preflightux.com) · **Author:** Shalom Ormsby · **Status:** Pre-launch — first design-partner engagement in progress

---

## What PreflightUX does

Discovering a UX flaw in a shipped product costs orders of magnitude more than catching it in design. But the specialized users who would surface that flaw — growth scientists, SREs, clinicians, associate lawyers — are scarce, expensive, and slow to recruit before there is anything built to test.

PreflightUX closes that gap. A cohort of **synthetic expert personas** drives your actual interface (or reads your PRD), thinking aloud and hitting friction the way your real power users would — and every finding is graded against the **foundational UX evaluation frameworks human researchers already trust**. The result is empirical, defensible signal at the design stage, with a published score telling you exactly how much to trust it.

## What you get

Each engagement delivers a structured usability audit:

- **Synthetic expert-user audit** — a cohort of grounded, skill-graded personas runs your early artifacts and generates interaction traces.
- **Foundational-framework scoring** — every finding evaluated against **Nielsen's 10 usability heuristics** plus **heuristic evaluation** and **cognitive walkthrough**, with **severity ratings** (0–4), not vibes.
- **Auditable Actor / Critic critique** — an independent Judge Agent reviews each session against domain-specific heuristics, producing a traceable critique you can defend in a design review.
- **Published calibration score** — a measurement of how closely the synthetic findings track real users, published openly.

## Grounded in foundational UX science

Synthetic expert users are the bleeding-edge part. The standards they're judged by are not. PreflightUX evaluates every finding against the same battle-tested frameworks expert UX researchers have used for decades — so the signal is novel in how it's produced and orthodox in how it's assessed.

The **Judge Agent** scores every session against:

- **Nielsen's 10 usability heuristics** — visibility of system status, match to the real world, user control & freedom, consistency & standards, error prevention, recognition over recall, flexibility & efficiency, aesthetic & minimalist design, error recovery, and help & documentation.
- **Heuristic evaluation** — structured inspection against the full heuristic set, the way a trained evaluator panel would.
- **Cognitive walkthrough** — step-by-step task attempts that expose where the user's mental model breaks.
- **Severity ratings** — findings scored on frequency, impact, and persistence, so the right things get fixed first.

…alongside the domain-specific heuristics authored for your product.

## How it works

1. **Artifact in** — a prototype, a Figma flow, or a written PRD. No production code required.
2. **Double-grounded personas** — grounded in real, anonymized interview transcripts *and* skill-graded on the axes your product demands.
3. **The User Agent drives the UI** — a browser-driving agent navigates as each persona, thinking aloud and generating an interaction trace.
4. **The Judge Agent scores it** — an independent critic grades each trace against the frameworks above plus your domain rules, separating simulation from critique.
5. **Signal out** — a severity-ranked critique and a calibration score, visualized as an interactive cohort constellation.

## Why it's different

Every commercial synthetic-user platform synthesizes consumer personas. None grade for domain expertise. None publish calibration reports against real users. The expert-user, calibration-disciplined lane is wide open.

| Dimension | **PreflightUX** | **Aaru** | **Synthetic Users** | **Maze AI** |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | Expert-grade workflow usability & structural friction | Macro-market sentiment & demographic polling | Qualitative concept & copy validation for startups | Traditional unmoderated human usability testing |
| **Mechanics** | Browser-driving agents on dynamic interfaces | Statistical representations acting as survey respondents | Chat-based generative interviews | Humans executing click-paths |
| **Moat** | Published Calibration & Academic Peer Review | Proprietary scale and data ingestion | First-mover brand in the AI niche | Access to paid human panels |

## Status

PreflightUX is **pre-launch**. The first design-partner engagement is in progress, the inaugural public calibration report is underway, and the methodology is being formalized for submission to **ACM CHI 2027**. This repository currently hosts the marketing site (built on [OpenCosmos UI](https://studio.opencosmos.ai/)) and the strategic manifesto below.

**Interested in a pre-flight on your next build?** Reach out at [shalom@shalomormsby.com](mailto:shalom@shalomormsby.com).

---

# Strategic Manifesto & Operating Model

*Crystalizing the value proposition, IP strategy, and phased expansion plan for calibrated synthetic UX testing.*

## 1. The Core Thesis: The Economics of "Pre-Flight" Signal

The modern software engineering cycle suffers from a fundamental cost asymmetry: discovering a UX or structural flaw in a deployed product is orders of magnitude more expensive than discovering it during the design phase. Yet, validating complex B2B workflows, expert tools, or high-stakes interfaces against real, specialized users (e.g., Growth Scientists, SREs, Medical Professionals) is slow, expensive, and often impossible to recruit for prior to the build phase.

> **PreflightUX exists to generate empirical signal before the decision you cannot afford to redo.**

By running high-fidelity, interactive simulations of specialized user personas against early product artifacts—ranging from interactive prototypes to static PRDs—PreflightUX allows teams to surface deep usability friction and mental model mismatches **before a single line of production code is written**, radically de-risking engineering capital.

---

## 2. The Operating Model: Methodology-as-a-Product

PreflightUX is deliberately positioned as a **calibration-disciplined research methodology deployed via consulting engagements**, not a venture-scale, self-serve SaaS platform. 

**The Strategic Logic:**
*   **Eliminating SaaS Bloat:** Bypasses the immense operational overhead of multi-tenant SaaS (SOC 2 compliance, procurement cycles, Stripe integration, self-serve onboarding, customer support).
*   **High-Ticket Value Capture:** Value is captured through deep, consultative insights delivered directly to product and engineering leadership, allowing for premium pricing based on capital saved, rather than monthly active users.
*   **Solo-Operator Sustainability:** Allows for a "bursty" allocation model (active contract sprints vs. methodology curation and academic writing periods), preventing builder burnout.

---

## 3. The Architecture of Rigor: Engineering Behavioral Fidelity

The critical vulnerability of LLM-based user simulation is "cooperative hallucination"—the tendency of raw models to compress behavioral variance, act overly capable, and provide unrealistically positive feedback. PreflightUX solves this through a proprietary architectural triad:

### A. Double-Grounded Personas
Personas are not flat demographic prompts. They are constructed using a two-layer grounding methodology:
1.  **First-Order Grounding (The Empiricism):** Anchored directly in 2–4 anonymized, real-world user research interview transcripts to capture exact vocabulary, frustrations, and domain-specific shorthand.
2.  **Second-Order Grounding (The Reasoning):** Personas absorb cognitive styles from curated public-domain texts (e.g., absorbing risk-aversion from high-stakes operational manuals, or market-awareness from classical economics texts).

### B. Skill-Graded Axes
Personas are evaluated on custom, continuous skill axes (e.g., "MMP literacy," "Tolerance for data density," "Trust in automation"). This allows PreflightUX to simulate the *exact* workflow friction an expert experiences, contrasting sharply with generic consumer models.

### C. The Clean Separation of Actor and Critic
Conflating simulation and critique in a single agent yields biased results. 
*   **The User Agent:** Navigates the interface, thinks aloud, experiences frustration, and generates an interaction trace.
*   **The Judge Agent:** Independently evaluates the interaction trace against strict, domain-specific heuristics to generate an auditable, structural critique.

---

## 4. The Defensibility Moat: Calibration as Currency

As the barrier to entry for building "AI wrappers" approaches zero, the only durable moat in synthetic testing is **proven empirical validity**. Anyone can generate an AI persona; very few can prove it behaves like a human.

**The Strategy:**
1.  **Public Calibration Reports:** PreflightUX commits to the discipline of calibration. For every major vertical or pack, a report is published comparing the synthetic findings directly against real-human testing benchmarks. Transparency in false-positive/negative rates builds ultimate trust.
2.  **Academic Legitimacy (CHI 2027):** The core methodology will be formalized and submitted to the ACM CHI 2027 conference. Cementing the platform's foundation in peer-reviewed HCI literature creates an institutional credibility moat that commercial competitors cannot easily replicate.

---

## 5. Competitive Positioning

The synthetic user landscape is expanding, but PreflightUX isolates a highly defensible, high-value quadrant focused exclusively on interaction and workflow usability.

| Dimension | **PreflightUX** | **Aaru** | **Synthetic Users** | **Maze AI** |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | Expert-grade workflow usability & structural friction | Macro-market sentiment & demographic polling | Qualitative concept & copy validation for startups | Traditional unmoderated human usability testing |
| **Mechanics** | Browser-driving agents on dynamic interfaces | Statistical representations acting as survey respondents | Chat-based generative interviews | Humans executing click-paths |
| **Moat** | Published Calibration & Academic Peer Review | Proprietary scale and data ingestion | First-mover brand in the AI niche | Access to paid human panels |

---

## 6. Strategic IP Posture & Expansion Flywheel

To maintain total independence and scale the methodology horizontally, the Intellectual Property is strictly partitioned.

> [!IMPORTANT]  
> **Prior Invention Status:** If full-time employment is engaged (e.g., at an Initial Enterprise Client), PreflightUX must be formally declared as a Prior Invention. This ensures the engine, methodology, and IP remain fully retained by Shalom Ormsby.

### The IP Partition Model
*   **The Substrate (MIT Open-Source):** Upstream UI components (`@opencosmos/ui`) and foundational design tokens.
*   **The Kernel (Proprietary to Author):** The User/Judge agent runtimes, orchestration logic, and calibration frameworks.
*   **The Vertical Packs (Work-for-Hire / Data):** Customer-specific personas, scenarios, and heuristic data.

### The Expansion Flywheel
Because of the strict separation of Platform Engine (Code) and Vertical Packs (Data), expanding to new verticals requires **zero engineering bloat**—only the authoring of new YAML/JSON data packs.

1.  **Phase 1: The Wedge (Initial Enterprise Client):** Validate the engine on high-stakes B2B data workflows. Produce the first canonical Calibration Report.
2.  **Phase 2: The Public Artifact (Creative Portfolios):** Release a free, public-facing demo where designers can run their portfolios through "Recruiter" and "Design VP" personas. This serves as a viral top-of-funnel demonstration of the technology.
3.  **Phase 3: Divergent Expansion:** Systematically author new Data Packs for high-value adjacencies (e.g., Pitch Deck stress-testing for founders, Draft pacing for authors).

---

## 7. Risks & Asymmetric Mitigations

| Strategic Risk | Mitigation Strategy |
| :--- | :--- |
| **Zero-Incremental-Signal** (Synthetic tests mirror basic intuition but miss deep nuance) | **Radical Transparency:** Treat poor calibration scores as diagnostic data, not failures. Publish metrics openly at `/calibration` and continuously retune the first/second-order grounding vectors. |
| **Academic Execution Failure** (Missing the CHI 2027 September deadline) | **Bursty Allocation:** Reserve August entirely for drafting. If rejected, publish immediately as a preprint (arXiv) and pivot to DIS 2027. The methodology survives the venue. |
| **Grounding Data Leakage** (Customer IP crossing the synthetic barrier) | **Air-Gapped Data Packs:** Transcripts remain local to the client's isolated vertical pack. Personas are built on abstracted skill dossiers and metadata IDs, never direct ingestion of raw, un-anonymized transcripts. |
