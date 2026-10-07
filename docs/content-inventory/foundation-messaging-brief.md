# Foundation Messaging Brief

Status: Working synthesis for Nathan's decisions; not approved website copy  
Prepared: 2026-10-07

## Purpose

This brief reconciles the strongest available source material for the website's
foundational explanation:

1. Why IVC exists and what problem it addresses
2. What IVC does and does not do
3. What NUVA is and how it relates to IVC

It separates supported propositions from aspirations, old branding, technical
claims, and decisions that still need an owner. Its purpose is to make the
remaining questions visible before polished copy or François's technical
review.

## Evidence basis

### Primary local sources

| ID | Source | Role in this brief | Caution |
| --- | --- | --- | --- |
| F-01 | `IVC Proposal 2024-02.docx` | Original concise purpose, scope, activities, and exclusions | Historical proposal under the former name; planned outputs are not proof of current delivery |
| F-02 | `Question and Answers about IVC initiative.docx` | Detailed account of the practical need, intended value, partnerships, and long-term NUVA vision | Candid internal funding and strategy discussion; many statements are aspirations |
| F-03 | `IVC Benefits and Risks - AIRA Internal 2024-02.docx` | Explains why terminology is foundational and why IVC should coordinate rather than displace existing bodies | Internal AIRA strategy; promotional claims should not become public facts |
| F-04 | `Proposal for AIRA Engagement 2024 v2.docx` | Early clearinghouse, mapping, metrics, expert-support, and advocacy concepts | Proposal, not adopted charter; overstates leadership and centrality |
| F-05 | `AIRA Annual Report - Brief Summary.docx` | Later communications framing and community themes | Draft marketing language, unverified counts, and synthesized—not direct—quotations |
| F-06 | `Research\Issue Brief - Timing Gaps in Vaccine Coding.docx` | Concrete example of why coding infrastructure and historical validity matter | Regulatory and operational claims require citations and expert fact-checking before publication |
| F-07 | `Bordeaux 2025\Meeting Report for Bordeaux and Madrid 2025.docx` | Evidence for the "bridge, not replacement" direction and post-summit thinking | Internal report with promotional assessments and time-sensitive partnership claims |
| F-08 | `Website\IVC Website Refresh Plan 2025-12.docx` | Prior website goals and relationship-to-NUVA questions | Working strategy with growth/funding ambitions, superseded schedule, and old brand framing |
| F-09 | Current NUVA repository `README.md` and `docs/documentation/**` | Current technical description, license, source files, alignment model, and publication transition | Documentation says it is a work in progress; several pages are Submitted or Void rather than released |
| F-10 | `NUVA\Alignment Requirements\francois-requirements.md` and related October 2026 notes | Most recent record of François's demonstrated workflow and current direction | Private analysis and meeting notes, not approved public statements |

### Existing reconciliations

This brief also relies on:

- `local-source-review.md`
- `events/bordeaux-2025-event.md`
- `inventory.md`
- `collection-backlog.md`

## Executive synthesis

The sources support a restrained, practical account of IVC:

> Immunization systems use many vaccine code systems, created for different
> jurisdictions and purposes. Those differences become difficult when records
> move between systems, countries, or long periods of time. The problem is not
> simply that multiple codes exist; it is that the specialized knowledge needed
> to interpret, compare, map, and improve them is distributed across separate
> organizations and expert communities.

> IVC brings people working on immunization vocabularies together to share that
> knowledge, document how code systems are used, explore mappings and assessment
> methods, and coordinate practical improvements. It is a collaboration and a
> bridge among existing owners and standards efforts—not a replacement for
> them.

> NUVA is an open, shared vaccine ontology designed to represent administered
> vaccines and their valences consistently across existing codifications and
> over time. It can support alignment among code systems, but it does not erase
> the need for local code-system ownership, expert judgment, or governance.

This is a synthesis for decision-making, not final copy. In particular, the
current organizational relationship between IVC and NUVA is not settled enough
to describe beyond the narrower supported statements in this brief.

## 1. Why IVC exists

### Supported problem statement

The sources consistently support all of the following:

- Vaccine identity is foundational to recording, exchanging, interpreting, and
  using immunization histories.
- Multiple vaccine code systems exist because jurisdictions and organizations
  have different responsibilities and needs. Multiple systems are not, by
  themselves, a failure.
- Meaning becomes harder to preserve when information crosses jurisdictions,
  systems, standards, languages, or long periods of time.
- Product codes and authorization states change, while a person's vaccination
  history must remain interpretable throughout life.
- Code creation, maintenance, deactivation, mapping, and implementation can
  occur on different timelines, producing gaps or ambiguity.
- The relevant expertise is distributed among code-system owners, terminology
  specialists, public-health programs, implementers, standards groups, and
  other domain experts.
- These groups need practical ways to compare approaches, explain unfamiliar
  codes, identify gaps, and coordinate without surrendering their own authority.

### Important framing choice

The clearest formulation is not "the world needs one vaccine code." It is:

> People need to preserve and interpret the meaning of vaccination records even
> when the codes, systems, and jurisdictions involved are different.

This avoids promising that harmonization means replacing all existing systems.
It also creates room to explain mappings, valences, metadata, governance, and
historical validity as different parts of the problem.

### Concrete examples available for later pages

- A vaccination recorded in one country must be understood in another.
- A vaccine administered before a local code becomes available may be difficult
  to record consistently.
- A retired or deactivated code can still describe a valid historical dose.
- A broad code may preserve less clinical meaning than a more specific product
  or vaccine concept.
- Implementers may need to connect national, product, clinical, and exchange
  vocabularies without treating them as interchangeable.

The timing-gap examples are promising, but their regulatory sequence and named
examples need authoritative citations before becoming public factual claims.

### Claims to avoid

- IVC is the only group addressing vaccine terminology.
- All code systems should become one system.
- "Harmonized" codes automatically solve interoperability, FHIR adoption,
  clinical decision support, surveillance, or pandemic response.
- Code-system differences prevent all cross-border use.
- A single mapping can preserve every distinction made by both systems.
- The community has reached consensus merely because a proposal appeared in a
  meeting or internal report.

## 2. What IVC does

### Activities supported by multiple sources

The most defensible present-tense activity set is:

- Convene people who create, maintain, map, implement, or rely on immunization
  vocabularies.
- Share knowledge about vaccine code systems, their purposes, their use, and
  their limitations.
- Make meetings and technical presentations available to the community.
- Compare approaches and surface questions that require specialized expertise.
- Support practical work on mappings, code-system assessment, and documentation.
- Connect existing organizations and standards efforts so work and knowledge
  can travel between them.
- Promote the long-term interpretability of immunization histories.

### Activities that appear real but need current status wording

| Activity | Evidence | Safe treatment now |
| --- | --- | --- |
| Monthly meetings | Repeatedly documented and now managed in InteropHub | State as a current activity |
| Collecting information on code systems | Proposal, country research, presentations, and alignment work | State as ongoing work, without implying comprehensive coverage |
| Mappings and alignment | Historical mappings plus active NUVA alignment work | State that IVC participants support or coordinate this work; do not imply IVC owns every mapping |
| Metrics and assessment | Repeated proposals and implemented NUVA mapping calculations | Describe as work being explored/developed unless a maintained publication and owner are confirmed |
| Technical questions and expert routing | Strong intended-use evidence | Describe as collaboration among experts, not yet as a staffed help desk or guaranteed service |
| Country/organization interviews | Source collection and earlier plans | Describe only if the program is currently active and publishable examples exist |
| NUVA contribution review | October 2026 notes indicate a future IVC approval gate, currently François personally | Treat as emerging governance, not established organizational machinery |

### Recommended organizational description

The evidence best supports **collaboration** as the primary noun. "Network" and
"community of practice" may be useful explanatory terms, but each carries more
structure than has been formally documented. "Organization," "authority,"
"standards body," and "international help desk" should not be used as current
descriptions.

A safe working proposition is:

> IVC is a focused collaboration of people working with immunization
> vocabularies, code systems, mappings, and their practical use.

### Participation and authority

The current record shows participation by individuals connected with multiple
organizations, projects, and jurisdictions. It does not yet support a formal
membership model, representative mandate, voting structure, or claim that
participants speak for their employers. Public contributor language should
therefore distinguish personal participation from institutional endorsement.

## 3. What IVC does not do

### Strongly supported exclusions

IVC does not:

- Set vaccination schedules, clinical recommendations, or public-health policy.
- Choose a code system on behalf of a jurisdiction or organization.
- Replace the owners, custodians, or governance processes of existing code
  systems and standards.
- Manage vaccine procurement, supply, distribution, inventory, or program
  finance.
- Lead pharmacovigilance or adverse-event monitoring.
- Promise that a mapping or shared vocabulary preserves every distinction or is
  suitable for every clinical or operational use.

### Boundary requiring a present-day decision: software and tools

Older material excludes "software and systems," while current work plainly uses
and contributes to technical tools, including NUVA publishing and alignment
software. A more accurate boundary may be:

> IVC may coordinate, prototype, document, or support focused tools that help
> people understand and align immunization vocabularies. It is not a general
> software-development organization and does not replace operational systems
> maintained by code-system owners or implementers.

Nathan should confirm whether this reflects the intended boundary.

### Boundary requiring a present-day decision: advocacy

Early proposals include advocacy for code-system changes. That could mean either:

1. IVC identifies evidence-based improvements and communicates them to the
   responsible owner; or
2. IVC campaigns for particular standards, policies, or institutional choices.

The first is consistent with the bridge role. The second would materially
change tone, authority, and review requirements. Public copy should not use
"advocacy" until Nathan defines which meaning is intended.

### Boundary requiring a present-day decision: recommendations

IVC can likely publish technical findings, mappings, comparison methods, and
questions without claiming authority to prescribe adoption. The unresolved
line is whether it may issue a reviewed technical recommendation to a
code-system owner. This should be decided explicitly rather than hidden behind
words such as "support" or "improve."

## 4. What NUVA is

### Supported technical description

The current NUVA repository supports this account:

- NUVA is a common ontology of administered vaccines.
- It represents vaccine concepts and valences—the immunizing components or
  functions used to characterize what protection a vaccine is intended to
  induce.
- It is intended to bridge existing codifications across jurisdictions and over
  long periods of time.
- Language layers translate concept wording.
- Alignment layers connect codes in existing systems to NUVA concepts.
- NUVA can serve as a semantic pivot for comparing or transcribing between code
  systems, subject to information loss and the quality of each alignment.
- The repository is licensed under Creative Commons Attribution 4.0.
- The repository is moving toward concept-level YAML Unit files as the
  authoritative source from which other representations are generated.
- Code-system owners retain responsibility for their own systems and, in the
  documented model, elaborate their alignments to NUVA.

### Name uncertainty

Current sources are inconsistent:

- Repository README: "Unified Nomenclature of Vaccines"
- Documentation overview: "Unified Nomenclature of Vaccine"
- Older communications: often "Unified Nomenclature for Vaccines"

The public website should use **NUVA** without expanding it until François
confirms the official English expansion and the repository is made consistent.

### What NUVA is not

NUVA should not be described as:

- A replacement for every national, product, billing, regulatory, or clinical
  code system.
- The owner of local code systems or their internal maintenance processes.
- A lossless universal crosswalk.
- A clinical recommendation engine.
- A finished governance model.
- Fully independent of Syadem today, while the publication transition remains
  in progress.

### Technical claims requiring François's review

- The precise definition of vaccine, abstract vaccine, real vaccine, valence,
  valence type, layer, alignment, reverse map, and transcription map.
- The official English expansion of NUVA.
- What is authoritative today: Syadem data, repository Unit files, or a merged
  transitional state.
- Which URI, identifier, and distribution URLs are canonical.
- The current relationship to the French terminology publication and the NUVA
  extension to SNOMED CT.
- The status and owner of each alignment.
- Normative meanings of exact, broader, best, blur, equivalence, completeness,
  precision, redundancy, missing, and out of scope.
- License scope across core data, alignments, documentation, and software.
- Any claims about coverage, completeness, precision, stability, production
  use, language support, or update frequency.

## 5. Relationship between IVC and NUVA

### What can be said now

- NUVA is highly relevant to IVC's purpose because it provides a shared model
  for describing administered vaccines and relating existing codifications.
- IVC meetings have provided a forum for explaining, testing, discussing, and
  coordinating work around NUVA.
- IVC can connect code-system experts and owners whose knowledge is necessary
  to create and maintain reliable alignments.
- Current work is moving NUVA toward an open, repository-based publishing and
  contribution model.
- Syadem and François have central historical and current technical roles.

### What should not yet be said

The evidence does not yet justify saying that:

- IVC owns NUVA.
- IVC operates or maintains all of NUVA.
- NUVA is formally an IVC program with adopted governance.
- Syadem has completed transfer of publication authority.
- A scientific committee, core team, approval process, or contributor model is
  fully established.
- IVC approves every mapping today.
- SNOMED International co-owns or governs NUVA.

### Working relationship model for discussion

A cautious model that fits the evidence is:

> NUVA is a shared technical resource closely connected with IVC's work. Syadem
> and François developed and currently steward core technical content and
> publishing processes. IVC provides a broader collaboration space in which
> vocabulary owners and other experts can discuss NUVA, contribute knowledge,
> and help shape alignments and future governance. The exact long-term division
> of ownership, publication, review, and approval is still being established.

Nathan and François should revise this together before any version is public.

## 6. Messaging architecture suggested by the evidence

The foundation can eventually become four related public components:

1. **Short homepage explanation:** the lifetime-record/cross-system problem and
   IVC's bridge role.
2. **Why immunization vocabularies matter:** concrete examples and a plain
   explanation of codes, meaning, and timing.
3. **What IVC does—and does not do:** current activities, scope, participation,
   and authority boundaries.
4. **NUVA overview:** concepts, uses, limitations, current stewardship, and
   links to the separate authoritative NUVA project.

The blog/update stream should carry reactions, evolving proposals, project
status, and dated technical developments. Those should not be folded into
evergreen foundation pages as though they were settled facts.

## 7. Decisions requested from Nathan

These are communications and scope decisions that should be answered before
François is asked to fact-check technical language.

### Priority A: identity and authority

1. Is **"a focused collaboration of people working with immunization
   vocabularies"** an accurate description, or do you want a different
   organizational term?
2. May IVC publish reviewed technical recommendations to code-system owners, or
   should it only document findings and route questions to the responsible
   owner?
3. Does IVC advocate for specific code changes and standards decisions? If yes,
   what limits distinguish technical advocacy from policy advocacy?
4. Do participants generally contribute as individuals, as organizational
   representatives, or either depending on the activity?

### Priority B: actual current work

5. Which of these are active IVC commitments today: recurring meetings,
   code-system documentation, country/organization interviews, mappings,
   metrics, question routing, training, or tool development?
6. Is the proposed software boundary accurate: focused vocabulary tools are in
   scope, but IVC is not a general software organization or operator of local
   systems?
7. Does IVC offer a public way to ask technical questions now? If so, is it a
   best-effort community channel or a service with an expected response?

### Priority C: IVC and NUVA

8. In your intended model, is NUVA already an IVC program, becoming one, or a
   closely related independent resource that IVC supports?
9. What role do you believe IVC has today in accepting changes to NUVA core
   concepts and alignments, separate from the future model discussed with
   François?
10. When the website launches, should it explain the governance transition
    candidly, describe only today's narrow facts, or defer organizational detail
    to the NUVA project until decisions are complete?

### Priority D: public framing

11. Should the former name be explained briefly on the About page, or mentioned
    only in historical meeting records and old artifacts?
12. Which one-minute visitor outcome matters most: understanding the problem,
    trusting IVC as a credible collaboration, finding NUVA, or knowing how to
    participate?

## 8. Questions reserved for François

After Nathan resolves the scope questions above, François should review:

1. The official expansion and concise definition of NUVA.
2. The technical definitions and limitations listed in section 4.
3. The current and target NUVA publication paths.
4. Syadem's continuing roles and what is actually transferring to the open
   repository.
5. The present versus proposed IVC review role.
6. The SNOMED CT relationship and wording that is accurate now.
7. Canonical identifiers, links, licenses, and supported distributions.
8. Which claims are stable enough for evergreen website copy and which belong
   in dated updates or technical documentation.

## 9. Provisional conclusions

Unless Nathan's answers change the direction, the website should:

- Lead with preserving meaning across systems and time, not with "one global
  code."
- Present IVC as a small, practical collaboration and bridge.
- State firm exclusions plainly.
- Use examples to explain the problem without promising that terminology alone
  solves interoperability.
- Treat NUVA as the leading technical example and resource, while clearly
  distinguishing it from IVC itself.
- Link to authoritative NUVA resources rather than copying changing counts,
  releases, mappings, or status claims.
- Keep emerging governance and strategy in dated updates until adopted.
- Avoid polished public copy until Nathan's decisions and François's technical
  review are complete.
