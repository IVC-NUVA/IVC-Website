# Audiences, Needs, and Use Cases

Status: Approved Phase 2 deliverable
Approved by: Nathan
Date: 2026-10-08

## Purpose

This document defines who the initial IVC website serves, what those visitors
most need to accomplish, and which priorities should shape the homepage and
navigation.

The website should be useful to a wider health-informatics community without
losing focus. It is principally for the people who create and maintain vaccine
code sets and for the specialists and implementers who depend on that work.

## Audience priorities

### Primary audience

#### Immunization vocabulary and code-set authors

These are informaticians responsible for creating, maintaining, interpreting,
or improving vaccine vocabularies. They need access to specialized knowledge,
peer experience, NUVA, meetings, and practical resources that help them make
code sets accurate, complete, and useful.

The site should speak directly to this audience without implying that IVC
governs their code systems or represents their organizations.

### Secondary audiences

1. **Code-system custodians and terminology specialists** who need to
   understand IVC's scope, NUVA, alignment work, and opportunities for
   technical exchange.
2. **Immunization-system implementers** who need enough context to understand
   vocabulary problems, locate relevant resources, and bring difficult coding
   questions to knowledgeable peers.
3. **Current and prospective IVC participants** who need meeting information,
   historical presentations, and a clear route into the collaboration.
4. **Standards organizations and public-health partners** seeking context about
   IVC, its technical work, and how it relates to existing owners and standards
   efforts.

### Occasional audience

People trying to interpret an unfamiliar or international vaccine code may
arrive at the site. The website can orient them and direct them to useful
resources or the IVC community, but it will not initially operate a
comprehensive code lookup or individual-record interpretation service.

## Three primary visitor tasks

### 1. Understand IVC and its relationship to NUVA

A visitor should quickly understand:

- why vaccine-vocabulary work matters;
- who IVC serves;
- what IVC does and does not do;
- how peer collaboration supports code-set authors; and
- why NUVA is central to IVC's technical work without implying authority or
  governance arrangements that do not yet exist.

### 2. Find technical resources and shared knowledge

Visitors should be able to find:

- the NUVA introduction and links to appropriate NUVA resources;
- selected explanatory material and articles;
- historical presentations and meeting agendas through InteropHub; and
- future technical resources as IVC develops them.

Use **technical resources and shared knowledge**, not a broad promise of
comprehensive technical guidance. The launch collection is intentionally
focused and will grow over time.

### 3. Find meetings and participate

The primary desired action for a qualified visitor is to **attend an IVC
meeting**. The website should make the meeting path visible and easy to follow,
using InteropHub as the canonical source for upcoming and historical meetings.

Secondary participation routes may include bringing a technical question,
sharing experience, or helping with a defined task. These should support—not
compete with—the meeting invitation.

## Knowledge assumptions

Assume visitors may understand health information systems or public-health
informatics but do not necessarily know vaccine terminology, NUVA, ontology
concepts, or IVC.

Accordingly, the website should:

- use plain language before specialized terminology;
- define terms such as **ontology**, **valence**, **vaccine concept**, and
  **alignment** when first introduced;
- explain acronyms rather than assuming familiarity;
- offer enough context for implementers and partners without diluting the
  material for code-set specialists; and
- layer introductory explanations before links to detailed technical sources.

The site does not need to explain health information exchange from first
principles or serve as a general introduction to immunization programs.

## First-minute understanding

Within one minute, a first-time visitor should understand that:

1. Vaccine vocabularies are essential infrastructure for preserving and
   exchanging the meaning of vaccination histories.
2. The specialized knowledge needed to create and interpret those vocabularies
   is distributed and difficult to find.
3. IVC is a peer collaboration where vaccine code-set experts share that
   knowledge and develop useful technical resources.
4. NUVA is the collaboration's central technical work product: an open, shared
   ontology for representing administered vaccines and their valences across
   existing codifications and over time.
5. The clearest way to engage is to attend an IVC meeting.

## NUVA's place in the experience

NUVA should be prominent but contextualized. It is not merely one link among
many, nor should the website open as though IVC exists only to promote a
standalone product.

The website should first establish the vaccine-vocabulary problem and IVC's
peer-collaboration role. It should then present NUVA as the center of IVC's
technical work and a way to organize and connect specific knowledge resources.
This sequence explains why NUVA matters and how it serves the community.

Without NUVA, IVC would largely provide discussion. NUVA gives the
collaboration a concrete technical output around which information, alignment
work, tools, and future knowledge resources can be organized. The long-term
goal is to offer both community and practical, specific resources that help
the communities IVC serves.

Launch content must still respect the Phase 1 boundary: describe NUVA using
the reviewed introductory facts, distinguish the NUVA core from extension
layers where relevant, and defer unsettled governance or detailed technical
documentation to the NUVA project.

## Use-case treatment

| Use case | Priority | Initial website treatment |
| --- | --- | --- |
| Understand what IVC is and does | Primary | Homepage and About content |
| Understand NUVA and its role | Primary | Prominent contextual introduction and dedicated overview |
| Find meetings and participation details | Primary | Clear meeting call to action linked to InteropHub |
| Locate technical resources and shared knowledge | Primary | Curated resource paths, articles, NUVA links, and presentations |
| Ask the IVC community a technical question | Secondary | Best-effort contact path and meeting invitation |
| Learn about a vaccine code system | Secondary/future | Curated links or future governed resources; no static catalog at launch |
| Compare or align immunization vocabularies | Secondary/future | Explain the work and link to reviewed tools when ready; do not publish stale metrics |
| Interpret an unfamiliar vaccine code | Occasional | Orientation and referral, not comprehensive lookup or record-specific advice |

## Implications for information architecture

The next phase should ensure that:

- the homepage establishes the problem, IVC's role, NUVA's importance, and the
  meeting invitation without forcing visitors through organizational history;
- NUVA has a visible top-level or near-top-level path;
- Meetings is prominent and leads to the stable InteropHub series page;
- technical resources and shared knowledge are grouped coherently rather than
  overstated as a complete guidance library;
- About material explains scope and authority without dominating the primary
  task paths; and
- unfamiliar-code visitors receive a useful next step without implying that
  the website can resolve every code or individual vaccination record.

## Phase 2 decision

Nathan approved these audience and task priorities on 2026-10-08. François's
Phase 1 contribution is complete; no additional Phase 2 review is required.
Proceed to Phase 3 information architecture, followed by finished website
content and implementation.
