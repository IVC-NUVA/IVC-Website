# IVC Website Content Plan

## Purpose

This document defines the process for researching, organizing, writing, and publishing content for the Immunization Vocabularies Collaboration (IVC) website.

The website should be a clear, practical support resource for people who create, maintain, map, and use immunization vocabularies. It should accurately represent IVC as a small, focused collaboration of subject-matter experts. The site should be useful and credible without sounding like a commercial product or a large advocacy organization.

The materials in the `docs` directory are working research and planning documents. They support development of the public website but are not themselves intended to appear as public website pages.

## Guiding principles

The website and its content should be:

- Clear, direct, and technically precise
- Supportive of code-system authors, custodians, and implementers
- Useful to an international audience
- Honest about the size, role, and capabilities of IVC
- Focused on practical knowledge rather than promotional language
- Accessible to readers with different levels of vocabulary expertise
- Explicit about the status and currency of technical information
- Consistent with the name **Immunization Vocabularies Collaboration**
- Clear about what IVC does and does not do

## Overall workflow

The content work will follow this sequence:

> Collect -> evaluate -> identify users and tasks -> organize -> approve structure -> write -> implement -> maintain

Each phase should result in a reviewable deliverable. Major copywriting and implementation should wait until the preceding research and structural decisions have been reviewed.

## Phase 1: Content inventory and discovery

### Goal

Gather the information that might need to appear on the website and establish what material is trustworthy, current, appropriate for publication, and still useful.

### Sources to review

- The current IVC DokuWiki website
- The local IVC working directory and its subdirectories
- Name-change materials
- Current NUVA resources and authoritative links
- Existing presentations, one-page summaries, FAQs, and explanatory documents
- Meeting and participation information
- Contributions from François and other IVC participants
- Institutional knowledge that has not yet been written down

### Information to capture for each source or content item

- Working title
- Source file or URL
- Short description
- Relevant subject area
- Likely audience
- Potential website use
- Content owner or person who can verify it
- Currentness or last known review date
- Publication status or confidentiality concerns
- Overlap with other material
- Open factual questions
- Recommended action:
  - Keep
  - Revise
  - Combine
  - Archive
  - Omit
  - Verify before deciding

### Deliverable

A content inventory containing source references, summaries, status, ownership, and recommended actions. This is a research artifact, not finished website copy.

### Review gate

Nathan and François review the inventory for:

- Important omissions
- Material that should not be public
- Outdated or inaccurate information
- Appropriate owners and reviewers
- Material requiring further research

## Phase 2: Audiences, needs, and use cases

### Goal

Define who the website serves and what those visitors need to accomplish. Rank the audiences and use cases so the site does not treat every possible need as equally important.

### Initial audience hypotheses

- Immunization vocabulary and code-system authors
- Code-system custodians and terminology specialists
- Immunization information-system implementers
- Standards organizations and public-health partners
- People trying to interpret an unfamiliar or international vaccine code
- Current and prospective IVC participants

### Initial use-case hypotheses

- Understand what IVC is and what it does
- Locate technical guidance
- Learn about a national or universal code system
- Understand NUVA and its role
- Compare or map immunization vocabularies
- Find answers to common coding questions
- Ask the IVC community a technical question
- Find meetings, presentations, and participation details

### Questions to resolve

- Who is the primary audience?
- What are the three most important tasks the site must support?
- What vocabulary knowledge can be assumed?
- What should a first-time visitor understand within one minute?
- Which use cases require detailed technical resources rather than introductory pages?
- Which information must be available in languages other than English?

### Deliverable

An agreed audience and use-case document that ranks primary, secondary, and occasional users and identifies their most important tasks.

### Review gate

Nathan and François approve the audience priorities and the primary tasks that will shape the homepage and navigation.

## Phase 3: Information architecture

### Goal

Organize approved content around user needs and create a structure that makes technical information easy to find.

### Initial site-map hypothesis

- Home
- Technical Resources
  - Immunization coding foundations
  - Code systems
  - Mapping guidance
  - Metrics and assessment
  - Frequently asked questions and glossary
- NUVA
- About IVC
  - Purpose
  - Scope
  - Current work
  - Contributors
- Participate
  - Meetings
  - Ask a question
  - Contact

This is a starting hypothesis, not the final structure. The site map should be derived from the content inventory and prioritized use cases.

### Page-outline requirements

Before writing polished copy, each proposed page should have a short outline identifying:

- Page purpose
- Primary audience
- Visitor questions answered
- Desired next action
- Required content
- Supporting sources
- Content owner or reviewer
- Related pages

### Deliverables

- Approved site map
- Navigation model
- Page inventory
- Outline for each planned page
- Mapping from source material to destination pages

### Review gate

Nathan and François approve the site structure and page outlines before substantial copywriting begins.

## Phase 4: Copy development and review

### Goal

Create accurate, readable, and consistent public-facing language using the approved sources and page outlines.

### Suggested writing order

1. Homepage
2. About, purpose, and scope
3. Technical Resources landing page
4. NUVA overview
5. Contact and participation information
6. Individual technical-resource pages
7. FAQ, glossary, and supporting reference pages

### Copy standards

Content should:

- Use plain language where it does not reduce technical precision
- Define specialized terms when first introduced
- Use short, descriptive headings
- Put the most useful information first
- Avoid inflated marketing language
- Avoid presenting IVC as larger or more formal than it is
- Avoid claims that cannot be supported by an identified source
- Distinguish established guidance from drafts, proposals, and opinions
- Use the new IVC name consistently
- Work well for readers who use English as an additional language
- Provide meaningful link text rather than phrases such as “click here”

### Technical-resource metadata

Where useful, technical pages should identify:

- Publication or last-review date
- Resource status, such as draft, reviewed, or maintained
- Responsible author or group
- Source references
- Related resources
- How to report an error or ask a question

### Deliverables

- Draft copy for each approved page
- Source and fact-check notes
- Review comments and resolved decisions
- Final approved copy ready for implementation

### Review gate

The appropriate content owners approve factual accuracy, publication status, and tone before copy is treated as final.

## Phase 5: Website implementation and validation

### Goal

Place approved content into the website and confirm that visitors can find, understand, and use it.

### Implementation work

- Build the approved pages and navigation
- Add metadata, review dates, and resource status where appropriate
- Replace placeholder links and prototype content
- Ensure consistent terminology and page patterns
- Make technical resources readable on desktop and mobile devices

### Validation checklist

- Navigation and findability
- Keyboard accessibility and visible focus states
- Heading structure and semantic HTML
- Color contrast and readable text sizes
- Mobile and narrow-screen behavior
- Descriptive page titles and metadata
- Link integrity
- Consistent IVC naming and terminology
- Accuracy of contact and participation information
- End-to-end delivery and forwarding test for `info@ivci.org`
- Presence of content status, ownership, and review dates where needed
- Ease of completing the highest-priority visitor tasks

### Deliverable

A reviewable website version containing approved content and ready for final content, accessibility, and technical review.

## Phase 6: Publication and ongoing maintenance

### Goal

Keep the website dependable after launch by assigning ownership and establishing a lightweight review process that is realistic for a small collaboration.

### Decisions required before launch

- Who can approve changes to public content?
- Who owns each major content area?
- How frequently should technical resources be reviewed?
- How will review dates and resource status be displayed?
- Where will authoritative source material be maintained?
- How will temporary announcements and meetings expire or move to an archive?
- How can visitors report an error or request clarification?
- How will broken links and outdated references be identified?

### Suggested maintenance practices

- Assign an owner to every maintained technical page
- Display a last-reviewed date when currency matters
- Review high-value technical content on an agreed schedule
- Keep time-sensitive announcements separate from evergreen guidance
- Archive rather than silently discard historically useful material
- Record substantial content decisions in the repository
- Use issues or a lightweight backlog for requested changes and unresolved questions

### Deliverable

A practical content-governance and maintenance process with named responsibilities and review intervals.

## Immediate next step

Begin Phase 1 by creating the content inventory. Review the current DokuWiki site and the local IVC working directory, summarize potentially useful material, identify duplication and outdated information, and flag anything that requires verification or a publication decision.

The initial inventory should be reviewed before the final audience priorities, site map, or public copy are approved.

## Decisions log

Use this section for high-level decisions that affect later work.

| Date | Decision | Reason | Approved by |
| --- | --- | --- | --- |
| 2026-10-06 | Use the Technical Reference homepage concept as the website starting point. | It best supports a clear, direct, utilitarian technical-resource experience. | Nathan and François |
| 2026-10-06 | Store website research and planning under `docs/`. | This keeps internal working material centralized and separate from public website content. | Nathan |
| 2026-10-07 | Use InteropHub as the single public system for recurring IVC meetings, including backloaded legacy meetings. The website will include a Meetings section that links to InteropHub rather than maintaining a separate meeting archive. | A single chronological system avoids forcing visitors to navigate differently based on meeting date. The local collection remains the preservation and migration source. | Nathan |
| 2026-10-07 | Describe IVC as a focused, peer-support collaboration for vaccine code-set authors. Participants contribute individual experience rather than formally representing their employers, programs, countries, or jurisdictions. | IVC exists to help informaticians make vaccine vocabularies accurate and complete and to give experts evidence and community support they can use in their own work. It is not a representative or binding decision-making body. | Nathan |
| 2026-10-07 | IVC may provide alignment feedback, liaise with standards projects, and advocate lightly for accurate representation of immunization concepts. It does not issue binding recommendations or take positions on immunization-program policy, procedures, or operations. | This preserves a useful technical voice grounded in community experience while keeping authority with code-system owners, standards bodies, programs, and jurisdictions. | Nathan |
| 2026-10-07 | Current IVC commitments are monthly meetings; development of vaccine code-system documentation processes; NUVA alignment tooling/processes and related metrics; website information; and informal technical questions through meetings or the website. Country and organization interviews are aspirational and currently deprioritized. | Public copy must distinguish current work from hoped-for work that lacks capacity. | Nathan |
| 2026-10-07 | IVC may support focused vocabulary tools, but it is not a general software organization, does not manage PHI, and does not operate or support production systems that do. Its question channel is best-effort peer support without guaranteed answers or response times. | IVC supports the informaticians who support clinicians and public-health professionals; it does not enter operational or individual-record workflows. | Nathan |
| 2026-10-07 | NUVA is gradually transitioning toward a community-supported resource, but IVC currently has no authorization over NUVA changes. IVC is facilitating monthly coordination and helping build tools and processes before broader community engagement. | The work is unfunded and therefore slow, but it advances steadily. The website must distinguish current authority from the intended future model. | Nathan |
| 2026-10-07 | The initial website will acknowledge the NUVA community transition using narrow present-tense facts and defer governance details that have not been established. | Candid status builds credibility without turning plans into claims or promising a timeline. | Nathan |
| 2026-10-07 | Briefly explain the former International Vaccine Codes Initiative name on the About page. “International” was mistaken for a cross-border-only scope, while the work supports domestic and cross-border vaccine-vocabulary needs; plural “Vocabularies” emphasizes support for many code sets. Preserve the former name in historical titles and artifacts. | The current Immunization Vocabularies Collaboration name more accurately communicates scope and the peer-support model without rewriting history. | Nathan |
| 2026-10-07 | The first-minute website message will lead with vocabulary as essential but difficult-to-find immunization infrastructure and with IVC as a source of specialized shared knowledge. | The vocabulary problem explains why IVC, NUVA, meetings, tools, and participation matter; those elements can follow from it. | Nathan |
| 2026-10-07 | Do not include static code-system listings, comparative quality claims, or legacy metrics in this website version. Revisit them only when the new alignment/metrics system and its publication process are ready. | The values were generated by François's code and now require redesigned tooling, governance, versioning, and maintenance; copying them would create stale or misleading claims. | Nathan |
| 2026-10-07 | Launch the website in English only. Do not migrate the Spanish website section; preserve Spanish historical meeting presentations with their meetings in InteropHub. | A future language strategy should be designed and supported deliberately rather than recreating an incomplete parallel section. | Nathan |
| 2026-10-07 | Include the 12 March, 9 April, and 23 July 2025 `IVC en español` meetings in the same chronological InteropHub IVC archive. Keep their Spanish titles and selected presentations, but do not create a separate website section or InteropHub series. | The Spanish source folder duplicates material already present in the main archive. One unified meeting system preserves useful historical material without creating a second navigation or maintenance path. | Nathan, pending confirmation of this review |
| 2026-10-07 | Do not maintain country or organization research on the website. Track future work in InteropHub and link only to reviewed records when useful. | Existing research is poor or incomplete, and a second manually maintained collection would create conflicting records. | Nathan |
| 2026-10-07 | Do not migrate the legacy formal volunteer roles, contributor structure, acronym catalog, campaign pages, or supporting documents unchanged. Preserve useful ideas through rewritten foundation, participation, and optional FAQ/glossary content. | The old material conflicts with the confirmed peer-support and non-representation model and contains obsolete activities and claims. | Nathan |
| 2026-10-07 | Retain `info@ivci.org` as the intended public contact route, subject to an end-to-end pre-launch test. François currently monitors it and Nathan likely receives copies, but routing has not been verified recently. | A public contact address should not be published as dependable until delivery, forwarding, monitoring, and configuration ownership are confirmed. | Nathan |
| 2026-10-07 | Label the dated publication section **Articles**. Use it for concise context and background on principles that guide IVC, not as an informal blog or high-frequency news feed. Nathan will initially author, approve, and publish the pieces; a formal contributor and review process is deferred until the collaboration matures. | This gives IVC a place for thoughtful interpretation while keeping authored perspectives distinct from maintained technical guidance and binding organizational positions. | Nathan |
| 2026-10-07 | Begin Articles with a short piece on rich information as part of interoperability, using a vaccine-code example and linking to Tito Castillo's article about FHIR, governed definitions, and reference data. | The topic explains a core IVC principle: successful transport of a code does not ensure that its meaning is sufficiently described, maintained, or understood. | Nathan |
| 2026-10-07 | Keep François's first technical review limited to NUVA facts required for launch. Omit metrics, canonical identifiers, complete resource links, detailed source audits, and internal Syadem/François authority and publication workflows. | The website needs a trustworthy introduction, not comprehensive NUVA documentation. Deeper technical presentation belongs in the developing NUVA package and can be added later. | Nathan |
