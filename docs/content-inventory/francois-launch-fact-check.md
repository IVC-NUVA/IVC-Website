# François Launch Fact Check

Status: Completed launch-level technical review
Prepared: 2026-10-07  

## Purpose

We are preparing a small first version of the Immunization Vocabularies
Collaboration website. This asks François to check only the technical NUVA
statements and terms needed for launch.

Detailed NUVA content, metrics, identifiers, downloads, internal workflows,
and governance documentation are intentionally out of scope. They can be added
later from the separate NUVA package when it is ready.

## How to respond

For each item, please use:

- **Approve** — accurate enough for a public introduction
- **Correct** — provide replacement wording
- **Defer** — leave it off the first website

A source link is welcome when easy to provide, but this is not a request for a
source audit or extensive explanation.

## Context already decided

- IVC supports informaticians who create and maintain vaccine code sets.
- IVC offers peer support and technical perspectives, not binding decisions or
  immunization-program policy.
- NUVA is moving gradually toward community support, but IVC does not currently
  authorize changes to NUVA.
- The first website will introduce NUVA briefly and link to dedicated NUVA
  resources rather than reproduce detailed documentation.

## Part 1: Proposed public statements

### S1. What NUVA is

> NUVA is an open, shared ontology for representing administered vaccines and
> their valences consistently across existing vaccine code systems and over
> time.

Are **open**, **ontology**, and **administered vaccines** accurate here?

Response: **Approve**

### S2. Why it is needed

> Vaccine and medicinal-product codes are created for different purposes and
> jurisdictions and may change over time, while a person's vaccination history
> must remain interpretable throughout life. NUVA helps relate these existing
> codifications across jurisdictions and over long periods.

Does **relate** describe NUVA without implying perfect conversion?

Response: **Suggest**: Could be 'interpret and relate', to include the descriptive nature of valences.

### S3. Core concepts

> NUVA represents vaccine concepts and valences and can associate codes from
> existing code systems with those concepts.

Is this accurate at an introductory level?

Response: **Suggest**: NUVA represent vaccine concepts, described functionally by their valences, and is intended to associate codes from existing code systems with these concepts.

Rationale: valences stay internal to NUVA, they are not supposed to be bound to other concepts, allowing to reorganize them whenever needed (new external codes may require the creation of new intermediate valences, or even restructuration of a branch in the valence tree). Alignments are extra layers not part of NUVA core (this distinction core/layer could perhaps be more apparent in the overview).

### S4. Existing code systems

> NUVA does not replace national, product, regulatory, billing, or clinical
> code systems. Their owners remain responsible for their content. NUVA
> provides a shared model that can help people understand and align them.

Is this boundary accurate?

Response: **Suggest**. Perhaps also mention that NUVA does not serve any other purpose than recording administered vaccines, and notably that any purpose general to medicinal products (such as adverse events, composition, etc.) is to be addressed in other systems.

### S5. Community transition

> Work is underway to make NUVA a community-supported resource. IVC provides a
> place for collaboration and helps develop supporting tools and processes, but
> it does not currently authorize changes to NUVA.

Is this accurate today?

Response: **Suggest**. It does not currently authorizes changes to the NUVA core. IVC members are invited to contribute to NUVA extension layers.

## Part 2: Essential terminology

Please approve, correct, or defer these proposed plain-language definitions.

| Term | Suggested public definition | Response |
| --- | --- | --- |
| NUVA | A shared ontology that organizes administered-vaccine concepts, their valences, and relationships to existing vaccine code systems. | See above |
| Vaccine concept | ~~A NUVA concept representing an administered vaccine, independent of the particular code used for it in another system.~~ A NUVA concept representing the recorded identification of an administered vaccine, whatever its original form (text or code from another system) | Suggest |
| Abstract vaccine | ~~A vaccine concept defined by intended immunization characteristics rather than a specific manufactured product.~~ A vaccine concept identifying a class of products with the same valences rather than a specific manufactured product| Suggest |
| Real vaccine | A vaccine concept corresponding to a specific vaccine product that has been made available for administration. | Approve |
| Valence | ~~The immunizing component or purpose represented in a vaccine concept.~~ The smallest functional unit of a vaccine whose identification is useful for assessing vaccination status and providing didactic information on the vaccine’s mechanism, composition, or technological classification *(from Jean-Louis)*. | Suggest |
| Alignment | A documented relationship between a code in an existing code system and a NUVA concept. | Approve |

More detailed mapping and quality terms will remain in NUVA technical
documentation and are not part of this launch review.

## Part 3: NUVA name

Current sources use three English expansions:

- `Unified Nomenclature of Vaccines`
- `Unified Nomenclature of Vaccine`
- `Unified Nomenclature for Vaccines`

What is the official English expansion we should use?

Response: `Unified Nomenclature of Vaccines`

We are not asking for canonical identifiers, endpoints, download formats, or a
complete link directory in this review.

## Part 4: Authority and workflow

We do not plan to document Syadem's or François's internal NUVA workflow on the
first website. It can be improved and documented later in the NUVA project.

The only proposed launch statement is:

> NUVA's content and publication work continues through its existing
> stewardship process. IVC supports collaboration and tool development but
> does not currently approve or authorize NUVA changes.

Please approve, correct, or defer this statement. We do not need a description
of the internal workflow now.

Response: See S5 above.

## Completion checklist

- [X] Statements S1–S5 reviewed
- [X] Six essential definitions reviewed
- [X] Official English expansion confirmed
- [X] Short authority statement reviewed
- [X] Anything unsuitable for the first website identified

## What happens next

Nathan will incorporate the corrections into a brief NUVA introduction. The
website will omit unresolved details and point to the NUVA package for deeper
information when it is ready. François can review the short final public copy
before publication.
