# Information Architecture and Page Outlines

Status: Approved Phase 3 deliverable
Approved by: Nathan
Date: 2026-10-08

## Purpose

This document defines the launch website structure, navigation, page inventory,
page responsibilities, and source-to-page mapping. It applies the Phase 1
content decisions and the Phase 2 audience priorities without expanding the
launch into a comprehensive vaccine-code portal.

## Approved site map

- **Home**
- **NUVA**
- **Resources**
  - Articles
  - Article: Rich information is part of interoperability
  - Curated technical resources
- **Meetings**
  - Bordeaux 2025
- **About**
- **Contact**

The child items describe pages or content destinations; they do not all need
dropdown navigation at launch. Keep the primary navigation compact.

## Primary navigation

`Home | NUVA | Resources | Meetings | About | Contact`

### Navigation behavior

- Keep NUVA visible at the top level because it is IVC's central technical work
  product.
- Keep Meetings visible at the top level because attending a meeting is the
  primary participation action.
- Link Meetings to a brief page on this website, not directly to InteropHub.
  The page should explain the meeting series and offer the stable InteropHub
  series link.
- Keep Articles within Resources rather than adding another top-level item.
- Combine questions, contact, and other participation routes on Contact.
- Use a persistent **Attend a meeting** call to action where the design permits,
  especially on Home and Contact.

## External destinations

### IVC meeting archive

Use the stable series URL rather than individual meeting IDs:

`https://informatics.immregistries.org/hub/es/meeting-series?seriesId=1`

The production backload is pending. The URL is stable, but the historical
archive will not be complete until the InteropHub release is deployed.

### Building Bridges topics

Use:

`https://informatics.immregistries.org/hub/es/topics?space=building-bridges`

The Meetings and Contact pages should explain that visitors can explore and
follow Building Bridges topics. Following topics lets participants receive
notifications when those topics are scheduled for future IVC meetings and
gives IVC a useful signal about community interest. Visitors should also be
invited to suggest important missing topics so IVC can consider them when
prioritizing future meetings.

Avoid implying that following a topic guarantees it will appear on an agenda.

### NUVA resources

The NUVA page must provide access to useful current NUVA information at launch,
even though the broader NUVA resource set will grow. Phase 4 should select
concise, clearly labeled links from the reviewed sources, and implementation
must verify each destination before publication.

Candidate destinations already identified in the Phase 1 inventory include:

- [current NUVA overview](https://ivci.org/doku/doku.php?id=ivci:nuva);
- [NUVA resource directory](https://ivci.org/nuva/);
- [standalone RDF/XML distribution](https://ivci.org/nuva/nuva_ivci.rdf);
- [core RDF/Turtle file](https://ivci.org/nuva/nuva_core.ttl);
- external-code companion files, such as the
  [CVX file](https://ivci.org/nuva/nuva_refcode_CVX.ttl); and
- language companion files, such as the
  [French file](https://ivci.org/nuva/nuva_lang_fr.ttl).

Other tools can be added later when they are ready or when review of the final
website identifies a need.

Do not reproduce changing releases, counts, mappings, metrics, or governance
details on the website when a maintained source can be linked instead.

## Page inventory and outlines

### Home

**Purpose:** Establish the vocabulary problem, explain IVC's role, introduce
NUVA as the central technical work product, and direct qualified visitors to a
meeting or useful resources.

**Primary audience:** Vaccine code-set authors, followed by terminology
specialists and immunization-system implementers.

**Visitor questions answered:**

- Why do vaccine vocabularies require specialized collaboration?
- What is IVC?
- What does IVC produce or support?
- Why does NUVA matter?
- How can I participate?

**Desired next action:** Attend an IVC meeting.

**Required content:**

- concise problem statement;
- concise IVC description and scope;
- contextual NUVA introduction;
- technical resources and shared-knowledge preview;
- meeting invitation and next-meeting/archive path;
- restrained contact path.

**Supporting sources:**

- `docs/content-inventory/foundation-messaging-brief.md`
- `docs/content-inventory/francois-launch-fact-check.md`
- `docs/audiences-and-use-cases.md`

**Owner/reviewer:** Nathan.

**Related pages:** NUVA, Resources, Meetings, About, Contact.

### NUVA

**Purpose:** Explain what NUVA is, why it is useful, how it relates to IVC, and
where visitors can find maintained NUVA resources.

**Primary audience:** Code-set authors and terminology specialists; secondary
audience includes implementers and standards partners.

**Visitor questions answered:**

- What is NUVA?
- What problem does it address?
- What are vaccine concepts and valences?
- How does NUVA relate existing codifications without replacing them?
- What is IVC's current role?
- Where can I access current NUVA information and tools?

**Desired next action:** Open the most relevant maintained NUVA resource;
secondarily, attend an IVC meeting where NUVA work is discussed.

**Required content:**

- the reviewed launch-level NUVA description;
- short plain-language definitions of essential concepts;
- boundary between NUVA core concepts and external alignment/extension layers;
- cautious IVC/NUVA relationship statement;
- curated links to current NUVA documentation, browser, distributions/history,
  repository, and suitable implementation examples;
- historical/current-status labels where needed.

**Supporting sources:**

- `docs/content-inventory/francois-launch-fact-check.md`
- `docs/content-inventory/foundation-messaging-brief.md`
- NUVA rows in `docs/content-inventory/inventory.md`

**Owner/reviewer:** Nathan for website presentation; maintained external NUVA
sources remain authoritative for technical detail.

**Related pages:** Home, Resources, Meetings, About.

### Resources

**Purpose:** Provide a coherent entry point to IVC's technical resources and
shared knowledge without promising a comprehensive guidance library.

**Primary audience:** Code-set authors, terminology specialists, and
implementers.

**Visitor questions answered:**

- What can I learn or use here now?
- Where are IVC articles and historical presentations?
- Where can I find NUVA resources?
- Where should I look for meeting-based technical discussions?

**Desired next action:** Choose a relevant resource path.

**Required content:**

- link and description for NUVA resources;
- Articles section and first article;
- meeting presentations/archive path;
- a small curated set of clearly labeled external technical resources;
- explanation that the collection will grow as maintained resources become
  available.

**Supporting sources:**

- `docs/content-inventory/articles-strategy.md`
- `docs/content-drafts/articles/rich-information-is-part-of-interoperability.md`
- `docs/content-inventory/inventory.md`
- InteropHub meeting backload response

**Owner/reviewer:** Nathan.

**Related pages:** NUVA, Meetings, individual articles.

### Article: Rich information is part of interoperability

**Purpose:** Publish the approved first article explaining why successful code
transport is not sufficient without governed meaning and reference data.

**Primary audience:** Implementers, code-set authors, and standards partners.

**Visitor questions answered:**

- Why can syntactically successful exchange still lose meaning?
- Why are maintained vocabularies and reference data important?
- How does this principle relate to vaccine codes?

**Desired next action:** Read the related external article and explore IVC's
technical resources.

**Required content:** Approved article copy, author and publication metadata,
sources, related reading, and revision status.

**Supporting sources:**

- `docs/content-inventory/articles-strategy.md`
- `docs/content-drafts/articles/rich-information-is-part-of-interoperability.md`

**Owner/reviewer:** Nathan.

**Related pages:** Resources, NUVA, Meetings.

### Meetings

**Purpose:** Explain the IVC meeting series, invite visitors to attend, and
direct them to the canonical InteropHub series, Building Bridges topics, and
the Bordeaux record.

**Primary audience:** Current and prospective participants, especially
code-set authors and terminology specialists.

**Visitor questions answered:**

- What happens in IVC meetings?
- Who should attend?
- Where can I find upcoming and past meetings and presentations?
- How can I signal which technical topics interest me?
- How can I suggest a missing topic?

**Desired next action:** View the IVC meeting series in InteropHub and attend a
meeting.

**Required content:**

- short description of the peer meeting and intended participants;
- prominent link to the stable InteropHub meeting-series page;
- explanation of upcoming and historical agendas/presentations;
- invitation and link to explore and follow Building Bridges topics;
- explanation that following topics informs notifications and provides an
  interest signal;
- invitation to suggest missing topics by emailing `info@ivci.org`;
- link to the dedicated Bordeaux 2025 page;
- historical-artifact caution where appropriate.

**Supporting sources:**

- `docs/content-inventory/events/meeting-archive-boundary.md`
- `docs/tasks/interop-hub-historical-meeting-backload-response.md`
- `docs/audiences-and-use-cases.md`

**Owner/reviewer:** Nathan.

**Related pages:** Bordeaux 2025, Contact, Resources.

### Bordeaux 2025

**Purpose:** Preserve and explain the critical Bordeaux training and summit as
a dated milestone in IVC's development.

**Primary audience:** IVC participants, technical partners, and visitors
seeking the collaboration's history and substantive meeting materials.

**Visitor questions answered:**

- What occurred in Bordeaux and why was it important?
- What sessions were actually delivered?
- Where can I find the agendas and presentations?
- Which outcomes were discussion rather than formal decisions?

**Desired next action:** Open the production InteropHub agendas and selected
presentations; secondarily, attend a current IVC meeting.

**Required content:**

- event identity, dates, location, and historical IVCI naming context;
- distinction between 8 May training and 9 May summit;
- concise, verified significance and event summary;
- delivered-session overview without unsupported planned sessions;
- links to both production InteropHub meeting records after deployment;
- selected external recap if still appropriate;
- dated-history notice.

Do not include photographs at launch. Do not publish private reports, rosters,
polling details, or unsupported consensus claims.

**Supporting sources:**

- `docs/content-inventory/events/bordeaux-2025-event.md`
- `docs/content-inventory/events/bordeaux-2025-artifacts.md`
- InteropHub migration manifest and response

**Owner/reviewer:** Nathan. Verify page-level factual wording and production
meeting URLs before publication.

**Related pages:** Meetings, Resources, About.

### About

**Purpose:** Explain IVC's purpose, scope, current work, authority boundaries,
participation model, and name history in one concise page.

**Primary audience:** All visitors needing organizational context, especially
partners and prospective participants.

**Visitor questions answered:**

- Why does IVC exist?
- Who participates and in what capacity?
- What does IVC do and not do?
- What is IVC working on now?
- Why did the name change from IVCI?

**Desired next action:** Attend a meeting; secondarily, explore NUVA or contact
IVC.

**Required content:**

- purpose and primary beneficiary;
- peer-collaboration and non-representation model;
- current activities;
- concise do/do-not boundaries;
- former-name explanation and historical treatment;
- no formal Contributors directory at launch.

**Supporting sources:**

- `docs/content-inventory/foundation-messaging-brief.md`
- `docs/content-inventory/supporting-legacy-content-review.md`
- Phase 1 decisions in `docs/website-content-plan.md`

**Owner/reviewer:** Nathan.

**Related pages:** Home, NUVA, Meetings, Contact.

### Contact

**Purpose:** Give visitors a clear participation hierarchy: attend meetings,
follow topics, suggest missing topics, or send a best-effort technical question.

**Primary audience:** Prospective participants and people with relevant
technical questions or topic suggestions.

**Visitor questions answered:**

- What is the best way to participate?
- How can I learn when a topic will be discussed?
- How can I suggest a missing topic?
- Where can I ask a question?
- What response should I expect?

**Desired next action:** Attend a meeting or follow a Building Bridges topic.

**Required content:**

- meeting-first participation invitation;
- Building Bridges topic-space link and following explanation;
- invitation to suggest missing topics;
- `info@ivci.org` contact route, subject to the pre-launch delivery test;
- best-effort response expectation;
- reminder not to submit protected health information or request operational
  support for individual records.

**Supporting sources:**

- `docs/audiences-and-use-cases.md`
- `docs/content-inventory/foundation-messaging-brief.md`
- `docs/content-inventory/supporting-legacy-content-review.md`

**Owner/reviewer:** Nathan; mailbox configuration owner must be confirmed before
publication.

**Related pages:** Meetings, About, NUVA.

## Source-to-destination map

| Source | Primary destination | Secondary destination |
| --- | --- | --- |
| Foundation messaging brief | Home, About | NUVA, Contact |
| François launch fact-check | NUVA | Home |
| Audience and use-case document | Home, Meetings | All page calls to action |
| Articles strategy and first draft | Resources, first article | Home |
| Meeting archive boundary | Meetings | Resources |
| InteropHub backload response | Meetings | Bordeaux, Resources |
| Bordeaux event reconciliation | Bordeaux 2025 | Meetings, About |
| Bordeaux artifact register | Bordeaux 2025 | Resources |
| Spanish meeting reconciliation | InteropHub only | Meetings may mention multilingual historical records without creating a separate section |
| Supporting legacy review | About, Contact | Resources |
| NUVA inventory links | NUVA | Resources |

## Content excluded from the launch structure

- static code-system catalog;
- comparative code-system metrics;
- detailed alignment or mapping guidance not yet maintained;
- country and organization profiles;
- standalone FAQ or large glossary;
- Contributors directory or formal representative roles;
- Spanish-language website section;
- comments or discussion system;
- recordings, transcripts, photographs, attendance, contacts, and internal
  meeting material; and
- detailed NUVA governance or internal publication workflow.

Essential questions and definitions should be handled within the relevant
pages. Add standalone reference pages later only when maintained content and
demonstrated user needs justify them.

## Phase 3 decision

Nathan approved the navigation, page scope, meeting and participation model,
Bordeaux page, and NUVA resource requirement on 2026-10-08. François's Phase 1
contribution is complete; no additional Phase 3 review is required.

Proceed to Phase 4 copy development and review.
