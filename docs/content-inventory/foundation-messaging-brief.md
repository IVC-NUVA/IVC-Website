# Foundation Messaging Brief

Status: Working synthesis; identity and authority decisions recorded, remaining
scope and NUVA questions open; not approved website copy
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

The sources and Nathan's decisions support a restrained, practical account of
IVC:

> Immunization systems use many vaccine code systems, created for different
> jurisdictions and purposes. Those differences become difficult when records
> move between systems, countries, or long periods of time. The problem is not
> simply that multiple codes exist; it is that the specialized knowledge needed
> to interpret, compare, map, and improve them is distributed across separate
> organizations and expert communities.

> IVC is a focused, peer-support collaboration for the informaticians who
> create and maintain vaccine code sets. It brings participants together to
> share what works, what causes problems, what they have learned, and what they
> still need to understand. It develops supporting information, conceptual
> models, alignment feedback, and community perspectives that participants can
> use in their own work. It is a bridge among existing owners and standards
> efforts—not their governing or representative body.

> NUVA is an open, shared vaccine ontology designed to represent administered
> vaccines and their valences consistently across existing codifications and
> over time. It can support alignment among code systems, but it does not erase
> the need for local code-system ownership, expert judgment, or governance.

This is a synthesis for decision-making, not final copy. The identity and
authority boundaries above were confirmed by Nathan on 2026-10-07. The current
organizational relationship between IVC and NUVA is not settled enough to
describe beyond the narrower supported statements in this brief.

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

### Primary beneficiary and support chain

Nathan confirmed that IVC primarily supports **vaccine code-set authors**:
informaticians responsible for making vaccine vocabularies accurate, complete,
and useful. These authors, in turn, support clinicians and public-health
professionals. IVC is therefore not primarily a general clinical education
group or a forum for immunization-program administration.

The collaboration gives these experts a place to test their thinking against
NUVA, other code systems, and the experience of peers. Its materials should
help an expert explain a representational gap to leadership or colleagues
without implying that IVC can require a particular organizational response.

### Activities that appear real but need current status wording

| Activity | Evidence | Safe treatment now |
| --- | --- | --- |
| Monthly meetings | Repeatedly documented and confirmed by Nathan | **Current commitment:** Nathan facilitates monthly peer meetings |
| Code-system documentation processes | Current work by Nathan and François | **Current work:** develop processes for documenting vaccine code systems; do not imply comprehensive coverage yet |
| Alignment tooling | Historical alignments plus active NUVA work | **Current work:** develop tools and processes for aligning code systems with NUVA; use "alignment" rather than the looser term "mapping" where technically appropriate |
| Metrics and assessment | Active alignment work and implemented calculations | **Current work tied to alignment:** develop useful metrics alongside the alignment tooling; avoid publishing unapproved definitions or scores |
| Technical questions and training | Website, presentations, and monthly meetings | **Current peer support:** people may bring questions through the website or meetings, without a guaranteed answer or service level |
| Country/organization interviews | Earlier research and plans | **Aspirational and deprioritized:** Nathan does not currently have capacity; student-supported interviews may be reconsidered in 2027 |
| NUVA contribution review | Community support is a future direction; IVC currently has no authorization over changes | State plainly that governance and authorization are not yet established |

### Current activity statement

As of October 2026, IVC's active commitments are:

- Facilitate monthly peer meetings.
- Develop vaccine code-system documentation processes with François.
- Develop tools and working processes for alignment to NUVA.
- Develop metrics that support and explain alignment work.
- Publish explanatory material through the website.
- Provide informal opportunities to raise technical questions through the
  website and meetings.

Country and organization interviews remain a useful future idea, potentially
with student participation in 2027, but they are not a current IVC activity or
commitment.

### Confirmed organizational description

Nathan confirmed **collaboration** as the primary noun. In practical terms, IVC
functions like a peer-support or self-help group for vaccine code-set experts.
"Peer-support collaboration" is likely clearer in public copy than "self-help
group," while retaining the essential meaning: the collaboration exists
primarily to help participants do their own work more effectively.

"Network" and "community of practice" may be useful explanatory terms, but
each can imply more structure than has been documented. "Organization,"
"authority," "standards body," and "international help desk" should not be
used as current descriptions.

A safe working proposition is:

> IVC is a focused, peer-support collaboration for the informaticians who create
> and maintain vaccine code sets and help clinicians and public-health
> professionals use immunization information accurately.

### Confirmed participation and authority model

Participants join to contribute experience from their work and to learn from
others; they do **not** formally represent their employers, countries, programs,
or jurisdictions. They should not be expected to report or account for all work
performed by those bodies. Their useful contribution is practical perspective:
what works, what has failed, what they have learned, and what support they need.

IVC is not empowered to make decisions binding on participants or their
organizations. It can make the internal working decisions needed to organize
meetings, develop tools, explore shared conceptual models, and work together
coherently, but it currently has no authorization to accept or reject changes
to NUVA. Participants may use IVC evidence and community learning to support
change inside their own organizations, but they remain responsible for that
local work and its formal decision process.

Public contributor language must distinguish individual participation from
institutional endorsement. Avoid national flags, employer lists, or phrases
such as "representing" unless a specific person has an explicit mandate for a
specific activity.

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

### Confirmed boundary: software and tools

Older material excludes "software and systems," while current work plainly uses
and contributes to technical tools, including NUVA publishing and alignment
software. A more accurate boundary may be:

> IVC may coordinate, prototype, document, or support focused tools that help
> people understand and align immunization vocabularies. It is not a general
> software-development organization and does not replace operational systems
> maintained by code-system owners or implementers.

Nathan confirmed this boundary on 2026-10-07.

### Confirmed boundary: information, not operational or PHI systems

IVC organizes information about vaccine code sets and supports the
informaticians who maintain them. It does not collect, manage, process, or host
protected health information (PHI), and it does not operate or support the
clinical, public-health, or other production systems that handle PHI.

IVC is "supporting the supporters": it gives vocabulary experts information,
comparisons, tools, and peer perspectives that can help them make sound
representational decisions. It does not provide operational support to the
people or systems delivering care, administering immunization programs, or
handling individual records.

### Confirmed boundary: technical feedback, liaison, and light advocacy

IVC provides feedback while codes are aligned to NUVA and may give code-system
authors or standards projects information about representational improvements.
For example, it might support adding a code-system identifier to FHIR so the
codes can be carried in messages, or explain why a vaccine code set needs to
represent historical and foreign vaccinations as well as products currently
authorized in one jurisdiction.

This may sometimes be called advocacy, but only in a light, technical sense:
IVC advocates for accurate and complete representation of immunization
concepts. It does not campaign for an organization to adopt a particular
policy, procedure, operational model, or vaccination program decision.

IVC may liaise with standards projects and communicate technical positions
consistent with what its community is learning. These are community
perspectives and feedback, not formal recommendations or binding positions.
Final decisions remain with the responsible code-system owner, standards body,
program, or organization.

The distinction to preserve in public language is:

- **IVC may say:** "Our alignment work indicates that this concept is missing,"
  "this identifier is needed for exchange," or "this set does not represent
  historical vaccinations needed by implementers."
- **IVC does not say:** "Your program must adopt this policy," "your system must
  operate this way," or "your jurisdiction should make this vaccination
  recommendation."

### Example: supporting the expert without overruling the program

A jurisdiction might call a code set complete even though it includes only
vaccines currently authorized there. Its vaccine-code expert may recognize that
the set cannot represent vaccines administered in prior years or other
countries. IVC can help the expert compare the set with NUVA, document the gap,
and provide supporting material explaining what a durable vaccine vocabulary
needs to represent.

The program still decides what to do. IVC's contribution is that the expert no
longer has to raise the technical concern alone or without evidence.

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

### Working relationship model

A cautious model confirmed by Nathan is:

> NUVA is a shared technical resource closely connected with IVC's work. Syadem
> and François developed and currently steward core technical content and
> publishing processes. Work is underway to transition NUVA into a
> community-supported resource. IVC currently provides a monthly collaboration
> space and is helping develop tools and processes intended to make future
> community support straightforward. IVC does not currently authorize changes
> to NUVA. The long-term division of ownership, publication, review, and
> approval is still being established.

François should verify the technical and stewardship details before any version
is public.

### Transition status and pace

The transition toward community support is active but early. The work has no
dedicated funding, so progress is slow; it is also steady, with work advancing
each month. The project remains primarily in a tool- and process-building phase.
The intent is to make contribution and support simple and understandable before
inviting the entire community to participate.

Public wording should be honest about both facts: meaningful progress is being
made, and a substantial amount of work remains. Avoid launch-style language,
completion dates, or descriptions of governance bodies and approval processes
that do not yet exist.

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

### Priority A: identity and authority — resolved 2026-10-07

1. **Organizational term:** IVC is a focused, peer-support collaboration for
   vaccine code-set authors and related informaticians.
2. **Feedback and recommendations:** IVC provides alignment feedback, evidence,
   and community perspectives. It does not make final recommendations binding
   on code-system owners.
3. **Advocacy:** IVC may advocate lightly for accurate representation of
   immunization concepts and liaise with standards projects. It does not take
   positions on immunization-program policy, procedures, or operations.
4. **Participation:** people participate as individual experts drawing on their
   work, not as formal representatives of employers, programs, or countries.
   IVC decisions bind neither participants nor their organizations.

### Priority B: actual current work — resolved 2026-10-07

5. **Current commitments:** monthly meetings; development of code-system
   documentation processes; NUVA alignment tools/processes and related metrics;
   website information; and questions raised through meetings or the website.
   Country/organization interviews are aspirational and currently deprioritized,
   with possible student-supported work in 2027.
6. **Software and data boundary:** IVC may coordinate and support focused
   vocabulary tools, but it is not a general software organization. It does not
   manage PHI or operate/support production systems that do.
7. **Technical questions and training:** website resources and meetings provide
   informal peer support. IVC is not an authority, does not claim to know every
   answer, and guarantees neither an answer nor a response time.

### Priority C: IVC and NUVA — resolved 2026-10-07

8. **Direction:** NUVA is being transitioned toward a community-supported
   resource. The transition is active, gradual, and incomplete.
9. **Present authority:** IVC currently provides no authorization for changes
   to NUVA. Its current role is monthly coordination and the development of
   tools and processes that could support simpler future community involvement.
10. **Initial website treatment:** explain the transition candidly using narrow
    present-tense facts, while deferring unestablished governance details and
    technical authority to the NUVA project. State that progress is slow because
    the work is unfunded, but steady; do not imply completion or promise dates.

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
5. The fact that IVC currently has no authorization over NUVA changes, plus any
   future review role once a concrete model is proposed.
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
