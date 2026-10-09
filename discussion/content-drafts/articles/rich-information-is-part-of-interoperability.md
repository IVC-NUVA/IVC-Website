---
title: Rich information is part of interoperability
summary: Moving a vaccine code between systems is useful only when its meaning can travel with it.
author: Nathan Bunker
status: approved for implementation
topics:
  - vaccine vocabularies
  - interoperability
  - reference data
---

# Rich information is part of interoperability

Interoperability is often described as the ability to move information from
one system to another. That is essential, but successful delivery does not
guarantee shared understanding.

Imagine that a system receives a vaccine code. It may be able to store the
code correctly and send it on again. But can it determine which vaccine the
code represents, what diseases it targets, how it relates to codes in another
system, or whether it describes a product that is no longer routinely used?
Without that information, the code can travel farther than its meaning.

This is particularly important for immunization histories. A code set designed
only around vaccines currently authorized in one place may seem complete for
today's workflow. It may still be unable to represent a vaccination given last
year, decades ago, or in another country. The missing information becomes a
practical problem when records are exchanged, consolidated, or interpreted
later.

Rich reference information is therefore not decoration around a code system.
It is part of the infrastructure that makes the codes useful. Concepts need
clear definitions, relationships, stewardship, and histories that can be
referenced consistently. Exchange standards can carry information, but they
cannot create shared meaning when that meaning has not been organized and
maintained.

This principle shapes the work of the Immunization Vocabularies Collaboration.
We support the people who build and maintain vaccine code sets by helping make
vaccine concepts easier to understand, compare, and align. The goal is not to
replace every local vocabulary with a single code system. It is to make the
meaning represented by those systems richer and easier to use across contexts.

Tito Castillo explores the wider architectural version of this problem in
[FHIR Is Not the Problem. But We May Be Asking It to Solve the Wrong
One](https://www.linkedin.com/pulse/fhir-problem-we-may-asking-solve-wrong-one-tito-castillo-fbcs-citp--ueyfe/).
His article asks whether healthcare keeps placing meaning inside exchange
specifications when authoritative definitions and reference data should be
managed as infrastructure in their own right. It is a useful frame for why
vaccine vocabulary work matters.
