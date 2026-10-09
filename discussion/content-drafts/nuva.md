---
title: NUVA
summary: A shared ontology for representing administered vaccines and relating existing vaccine codifications.
status: approved for implementation
owner: Nathan Bunker
---

# NUVA: Unified Nomenclature of Vaccines

NUVA is an open, shared ontology for representing administered vaccines and
their valences consistently across existing vaccine code systems and over
time.

Vaccine and medicinal-product codes are created for different purposes and
jurisdictions and may change over time. A person's vaccination history must
remain interpretable long after a particular product or code has changed.
NUVA helps people interpret and relate existing codifications across
jurisdictions and over long periods.

## Core concepts

**Vaccine concept**
A NUVA concept representing the recorded identification of an administered
vaccine, whatever its original form, such as text or a code from another
system.

**Abstract vaccine**
A vaccine concept identifying a class of products with the same valences
rather than a specific manufactured product.

**Real vaccine**
A vaccine concept corresponding to a specific vaccine product that has been
made available for administration.

**Valence**
The smallest functional unit of a vaccine whose identification is useful for
assessing vaccination status and explaining the vaccine's mechanism,
composition, or technological classification.

**Alignment**
A documented relationship between a code in an existing code system and a
NUVA concept.

NUVA vaccine concepts are described functionally by their valences. Alignment
layers can associate codes from existing systems with those vaccine concepts
without making external codes part of the NUVA core.

## What NUVA does—and does not do

NUVA provides a shared model focused on recording administered vaccines. It
does not replace national, product, regulatory, billing, or clinical code
systems, and it does not take over responsibility for their content.

NUVA is not intended to cover every purpose served by broader medicinal-product
systems. Functions such as adverse-event reporting and other general
medicinal-product information remain the responsibility of appropriate
systems.

## NUVA and IVC

NUVA is central to IVC's technical work. IVC provides a place for collaboration
and helps develop supporting tools, processes, and extension layers. IVC
members can contribute to extension layers, but IVC does not currently
authorize changes to the NUVA core.

## Access current NUVA information and files

Read the [current NUVA overview](https://ivci.org/doku/doku.php?id=ivci:nuva)
or browse the [NUVA resource directory](https://ivci.org/nuva/).

- [Standalone RDF/XML file](https://ivci.org/nuva/nuva_ivci.rdf)
- [Core RDF/Turtle file](https://ivci.org/nuva/nuva_core.ttl)
- External-code companion files, such as the
  [CVX reference-code file](https://ivci.org/nuva/nuva_refcode_CVX.ttl)
- Language companion files, such as the
  [French-language file](https://ivci.org/nuva/nuva_lang_fr.ttl)

Additional tools and documentation will be linked as they become ready and
maintained.

## Continue the discussion

NUVA and related alignment work are frequent subjects of IVC meetings.

[Attend an IVC meeting](meetings.md)

## Editorial notes

- Technical wording is based on `francois-launch-fact-check.md`.
- Verify the NUVA overview and all distribution links immediately before
  publication.
- Do not add changing release numbers, counts, or unreviewed governance detail.
