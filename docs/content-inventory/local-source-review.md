# Local IVC Source Collection Review

Review started: 2026-10-07

Source root (not stored in this repository):
`C:\Users\NathanBunker\AIRA Dropbox\Nathan Bunker\Emerging Standards\IVC`

## Scope and method

The source root contains 612 files in the reviewed scope. The separate
`IZ Gateway and Onboarding Shared Services Team` subtree was excluded because
it appears unrelated to IVC and contains a broken synced path. It can be
reviewed later if an IVC relationship is identified.

The source root itself is a Dropbox reparse point. File dates indicate local
working-copy activity, not necessarily creation or publication dates.

### Included files by type

| Type | Count |
| --- | ---: |
| Word (`.docx`) | 119 |
| PDF | 104 |
| PowerPoint (`.pptx`) | 95 |
| JPEG | 87 |
| Text | 40 |
| Video (`.mp4`) | 35 |
| PNG | 33 |
| CSV | 29 |
| WebVTT transcript | 21 |
| Excel (`.xlsx`) | 20 |
| Markdown | 17 |
| Other | 12 |

### Largest content areas

| Area | Files | Initial interpretation |
| --- | ---: | --- |
| Bordeaux 2025 | 155 | Event planning, invitations, reports, photos, agenda, surveys, training, and presentation archive |
| Presentation | 97 | Recurring-meeting and outreach decks; likely overlaps DokuWiki presentation archive |
| Recordings | 74 | Meeting video, transcripts, and related artifacts; high privacy/accessibility review need |
| Repository root | 58 | Strategy, proposals, Q&A, one-off research, spreadsheets, and outreach materials |
| Agenda | 51 | Recurring meeting agendas; likely overlaps DokuWiki meeting archive |
| IVC en español | 49 | Spanish-language meetings and supporting material; requires fluent review |
| NUVA | 39 | Metrics, requirements, tools, presentations, mappings, and current development notes |
| Attendance | 22 | Rosters and attendance data; presumptively private unless approved |
| Research | 15 | Issue briefs, country-orientation plans, external research, and broader strategy |

Other areas include IVC videos, CHOICE, notes, funding, PHACT, IKE-Hub,
Madrid 2025, HL7 Europe WGM 2025, one-pagers, SNOMED, website planning, the
name-change asset, and pilot material.

## Foundational sources reviewed

| ID | Relative source path | What it contributes | Publication treatment | Action |
| --- | --- | --- | --- | --- |
| L-01 | `IVC Proposal 2024-02.docx` | Concise vision, explicit scope, current activities, proposed outputs, and anticipated benefits. Defines the focus as codes needed to record lifetime vaccination history for determining protection. Excludes policy, distribution logistics, financial aspects of vaccination programs, and pharmacovigilance. | Historical proposal using the former name. Useful evidence, but goals and claims require current confirmation. | **Revise and combine** into purpose/scope content |
| L-02 | `Question and Answers about IVC initiative.docx` | Detailed first-person explanation of the practical problem, stakeholder needs, intended value, regional relationships, resource constraints, and long-term vision for NUVA and expert support. | Contains candid funding strategy, organizational details, and preliminary ideas. Use as internal background, not public copy. | **Keep internally**; extract verified themes |
| L-03 | `IVC Benefits and Risks - AIRA Internal 2024-02.docx` | Describes terminology as foundational infrastructure and identifies risks: domain overlap, resource intensity, funding a public good, misallocated effort, and difficulty explaining vaccine-code value. | Explicitly internal and AIRA-specific. Do not publish or migrate as a page. | **Keep internally** as strategy evidence |
| L-04 | `AIRA Annual Report - Brief Summary.docx` | Multiple communication drafts and community themes: shared vaccine language, cross-border understanding, practical usability, pandemic readiness, and code development alongside vaccines. | Draft claims, counts, and synthesized quotations require verification. Do not present synthesized language as direct participant quotations. | **Revise**; potential source for problem statement and messaging |
| L-05 | `Terminology Needs a Big Box.docx` | Frames terminology decisions as architecture rather than cleanup and connects fragmented expertise and late terminology involvement to fragile mappings. | Commentary based on an external article. Attribute and verify before using; better suited to a blog post than foundational fact. | **Keep** as a blog lead; **revise** substantially |
| L-06 | `Research\Issue Brief - Timing Gaps in Vaccine Coding.docx` | Concrete account of code-creation lag, pre-approval/trial vaccines, deactivation versus historical validity, and consequences for interoperability and record completeness. | Strong technical-page or article candidate. FDA, CDC, EMA, authorization, and timing claims require named sources and expert fact-checking. | **Revise and verify** |
| L-07 | `Research\Orientation Sheet.docx` | Complete model for country primers: system overview, delivery, data capture, code practices, interoperability, governance, takeaways, sources, diagrams, and expert review. | Excellent repeatable content template. References a Confluence destination that may no longer be current. | **Keep and adapt** into a future website page pattern |
| L-08 | `Research\Building_Bridges_Digital_Health_Strategy.docx` | Positions the work as lean bridge-building among existing organizations rather than another platform; emphasizes convening, connecting, and practical implementation. | Primarily funder/strategy language and broader than IVC. Avoid importing claims about global role or expansion without a current decision. | **Keep internally**; selectively adapt the “bridge” concept |
| L-09 | `IVC Introduction for HIMSS.docx` | Audience-specific introduction connecting vaccine coding to digital exchange, IPS, SMART Health Cards, pandemic preparedness, NUVA, and partner outreach. | Pre-Bordeaux promotional document with time-sensitive and political statements. Several claims require current verification. | **Archive** as campaign material; reuse only verified explanations |
| L-10 | `Proposal for AIRA Engagement 2024 v2.docx` | Early clearinghouse, metrics, mappings, expert-support, convening, and charter concepts. | AIRA-specific proposal with superseded dates and prospective claims. | **Archive**; combine durable themes with L-01 |
| L-11 | `Recruiting Vaccine Experts.docx` | Proposed engagement pipeline and outreach practices for recruiting country and organizational experts. | Uses sales framing and includes internal tactics; not appropriate as public-facing content. | **Keep internally** for participation planning |
| L-12 | `Website\IVC Website Refresh Plan 2025-12.docx` | Defines the new site as a credible public front door while the DokuWiki remains a technical workspace; proposes Home, About, Updates, Community, and Resources. Connects the website to participation and a future NUVA transition. | Useful predecessor plan, but it includes growth targets, funder positioning, AIRA/Syadem assumptions, and schedules that need current review. | **Combine** durable ideas with the current content plan; **archive** superseded schedule |
| L-13 | `Bordeaux 2025\Meeting Report 2025-05-15.docx` | First-person detailed report of EUVABECO, the IVC training and summit, participant polling, session content, reactions, and subsequent standards meetings. | Rich primary source, but contains candid assessments, personal observations, participant responses, and changing project information. | **Keep internally**; use to verify and improve the public event summary |
| L-14 | `Bordeaux 2025\Meeting Report for Bordeaux and Madrid 2025.docx` | Concise organizational report of purpose, accomplishments, relationships, lessons, recommendations, and the “bridge, not replacement” framing. | AIRA-facing and promotional; partnership and outcome claims need verification. | **Keep internally**; adapt verified event outcomes |
| L-15 | `NUVA\Meeting 2026-10-06.txt` | Current coordination notes: new static site, InteropHub tracking, NUVA alignment publication questions, valence-tree labeling, scientific committee planning, and October presentation. | Working notes in French with encoding corruption in the local text rendering. Not public without participant review. | **Keep internally**; route current NUVA requirements to the separate project |
| L-16 | `Name Change\IVCi.pptx` | Visual brand asset associated with the name-change folder. | The file is SVG data mislabeled with a `.pptx` extension and contains outlined paths rather than accessible text. It does not document the rationale for the rebrand. | **Repair/rename** in the source collection if retained; do not treat as a presentation |

## Findings that answer current questions

### Why IVC exists

Across the early proposal, Q&A, issue brief, annual-report drafts, and Bordeaux
reports, the recurring problem is not merely that different codes exist. It is
that people responsible for recording and exchanging vaccinations lack a shared
place to obtain specialized knowledge, compare approaches, interpret foreign or
historical records, identify gaps, and coordinate improvements. Terminology is
often treated too late even though it determines whether systems can preserve
meaning over a lifetime and across organizations or borders.

This is a strong evidence-based foundation for future copy, but the final
language should avoid unsupported claims that IVC is the only group addressing
the problem or that one terminology can solve every interoperability issue.

### What IVC does

The durable activities supported by multiple sources are:

- Convene vocabulary custodians, implementers, and other domain experts
- Collect and explain knowledge about vaccine code systems and their use
- Help experts frame and route difficult coding questions
- Compare systems through mappings, metrics, and practical examples
- Share meeting, presentation, country, and technical learning
- Support work that preserves interpretable lifetime immunization histories
- Connect existing organizations and standards efforts rather than replace them

Items such as operating NUVA, formal advocacy, publishing standards, developing
software, or serving as an international help desk appear as proposals or
aspirations and still need a current decision.

### What IVC does not do

The clearest recurring exclusions are:

- Set vaccination policy or recommendations
- Choose a code system on behalf of an organization or jurisdiction
- Manage vaccine supply, distribution, or inventory
- Manage vaccination-program finances
- Lead pharmacovigilance or adverse-event work
- Replace the organizations that own code systems, standards, or public-health
  responsibilities

The older DokuWiki also excludes “software and systems,” while several working
documents discuss tools and mappings. That boundary needs clarification: IVC may
link to, prototype, coordinate, or support tools without becoming a general
software organization.

### High-value future content patterns

- A plain-language problem page grounded in the timing-gap issue brief and
  lifetime-record examples
- A concise “What we do / What we do not do” page
- A NUVA overview that distinguishes IVC, Syadem, and other governance roles
- Country primers using the structured orientation-sheet template
- Event records that combine agenda, summary, presentations, and outcomes
- Dated articles that turn commentary such as “Terminology Needs a Big Box”
  into sourced, clearly attributed updates

## Publication controls

The local collection must not be bulk-published. Apply these defaults:

- **Presumptively private:** contacts, rosters, attendance sheets, funding
  strategy, candid internal assessments, email/message files, travel planning,
  stakeholder pipelines, raw recordings, chat, and unapproved meeting notes.
- **Needs rights/consent review:** photographs, participant names, presentation
  decks, recordings, transcripts, logos, and third-party diagrams.
- **Needs technical fact-checking:** code-system comparisons, regulatory timing,
  NUVA/SNOMED relationships, project status, counts, adoption, and governance.
- **Good candidates after revision:** approved one-pagers, issue briefs, country
  primers, event reports, meeting summaries, FAQs, and explanatory resources.

## Remaining local review

This was a targeted foundational review, not yet a file-by-file disposition of
all 612 files. Remaining work should proceed by collection:

1. Reconcile `Agenda`, `Presentation`, `Notes`, and `Recordings` by meeting date.
2. Review Bordeaux assets against the existing public summary.
3. Review NUVA technical sources with the separate NUVA-project boundary in
   mind.
4. Review the Spanish collection with a fluent reviewer.
5. Review one-pagers, FAQ, acronym, and website exports as migration candidates.
6. Review country/organization research and determine which primers were
   completed or validated.
7. Record duplicates, superseded drafts, privacy status, rights, and owner for
   each publishable candidate.
