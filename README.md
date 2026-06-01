# PreflightUX — Strategic Manifesto & Operating Model
### Crystalizing the Value Proposition, IP Strategy, and Phased Expansion Plan for Calibrated Synthetic UX Testing

**Domain:** [preflightux.com](https://preflightux.com) · **Repository:** [github.com/preflightux](https://github.com/preflightux)  
**Author:** Shalom Ormsby  
**Status:** Canonical Strategy & Value Manifesto

---

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
