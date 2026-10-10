# Contextual Conditions: Canonical Namespace and Publication Planning

## Source and purpose

This note extracts and contextualizes the canonical-namespace proposal from section 7, **Code System and Namespace**, of *Proposal: Contextual Conditions*, version 1.0, dated February 3, 2026. It is intended to support planning for real, resolvable canonical URLs and publication of the initial French and United States Contextual Condition code systems on the IVC website.

This is a planning summary, not a replacement for the source proposal or a finalized terminology specification.

## Relevant proposal context

A **Contextual Condition (CC)** is a standardized coded assertion that an immunization-relevant condition applies to a patient for clinical decision-support purposes. Examples include pregnancy, prior disease, immunocompromised status, travel risk, and whether a birth mother received RSV vaccine during pregnancy.

The proposal treats Contextual Conditions as operational CDS inputs rather than diagnoses, problem-list entries, general clinical observations, or inference rules. The sender determines whether a condition applies; the receiving IIS or CDS engine consumes the assertion. This separation allows the evidence, mappings, and local determination logic to evolve without changing the exchanged code or interface structure.

Contextual Conditions form a proposed third interoperability pillar alongside:

1. Patient Identification: who the patient is.
2. Immunization History: which immunizations the patient received.
3. Contextual Conditions: which contextual assertions influence immunization guidance and forecasting.

The intended HL7 v2 transport is an OBX segment in VXU and QBP workflows. The transport structure is observational, but the semantic purpose is to provide operational input to immunization CDS. The design goal is for new conditions to be introduced as vocabulary changes rather than interface changes.

## Governance context from section 6

The proposal assigns IVC responsibility for coordinating the namespace, publication, and interoperability governance of Contextual Conditions and related vocabulary artifacts. IVC provides the interoperability and publication structure but does not independently define clinical policy, national schedules, or CDS behavior.

The proposal distinguishes four roles that may be held by different organizations:

| Role | Responsibility |
| --- | --- |
| Code System Authority | Defines the operational meaning of a concept. |
| Publishing Authority | Publishes or distributes the vocabulary artifacts. |
| Namespace Authority | Maintains globally unique identifiers and canonical references. |
| CDS Authority | Determines how concepts affect recommendation logic. |

Under this model, a national immunization authority could define a set, IVC could provide its canonical namespace and publication location, and CDS engines could independently determine how its concepts affect forecasting.

## Section 7 proposal: canonical namespace

The proposed root canonical namespace is:

```text
https://ivci.org/contextual-conditions
```

Authority-specific code systems use this pattern:

```text
https://ivci.org/contextual-conditions/{country}/{authority}
```

Examples in the proposal are:

```text
https://ivci.org/contextual-conditions/usa/cdc-cdsi
https://ivci.org/contextual-conditions/eu/ema
```

The purpose of this hierarchy is to make authorship or stewardship explicit while allowing multiple national or organizational sets to coexist. The URL identifies the code system used in an exchanged coded value; it is not merely a link to a general explanatory webpage.

The proposal illustrates the U.S. canonical in an HL7 v2 OBX-3 coded element:

```text
OBX|1|ID|278^Birth mother received RSV vaccine during pregnancy^https://ivci.org/contextual-conditions/usa/cdc-cdsi|1|Y^Yes^HL70136||||||F
```

In that example:

- `278` is the condition code.
- `Birth mother received RSV vaccine during pregnancy` is its display text.
- `https://ivci.org/contextual-conditions/usa/cdc-cdsi` identifies the code system.
- The observation value asserts `Yes` using HL7 table 0136.

## What making the canonicals real requires

At minimum, each canonical URL should resolve over HTTPS to a durable human-readable page that:

- identifies the code system and its canonical URL;
- names the code-system authority, publishing authority, and namespace authority;
- describes the scope and intended use of the set;
- identifies its status, version, and publication or effective date;
- lists every code, display name, definition, and any useful usage notes;
- states licensing, copyright, attribution, and change-control information;
- links to machine-readable releases and prior versions when available;
- explains that the concepts are operational immunization CDS assertions, not diagnoses or clinical findings;
- provides a contact and a process for corrections or proposed additions.

The canonical URL should remain stable even as versions change. Version-specific artifacts can live beneath or alongside the canonical and should be linked from it. The canonical page can present the current release while maintaining a visible release history.

## Initial publication candidates

The immediate need is to publish two distinct sets:

- a Syadem Contextual Conditions set, originating with a France-based organization but not representing an official French national terminology;
- a United States Contextual Conditions set.

These should remain distinct if they have different governing authorities, definitions, identifiers, policy origins, or release lifecycles. IVC can publish both beneath a common namespace without implying that the sets are equivalent or internationally harmonized.

The exact canonical paths should not be finalized until the authority-based namespace recommendation below is accepted or a geographic convention is deliberately chosen.

## Confirmed direction

The following decisions have now been made:

- The U.S. and Syadem collections will be published as two independent formal FHIR `CodeSystem` resources.
- They describe the same general kind of concept but are not currently coordinated and must not be represented as one unified code system.
- Existing identifiers are permanent. New identifiers may be added, but published identifiers must not be reassigned.
- A future crosswalk is desirable but not a first-release dependency. Initial mapping work should be explicitly exploratory until its governance and equivalence criteria are agreed.
- The U.S. source is the CDC Clinical Decision Support for Immunization (CDSi) project's Supporting Data. The maintained `StepIntoCDSI` repository is the preferred operational input because it preserves and validates versioned official releases.
- The second source is Syadem, the organization behind MesVaccins. It is not an official French-government terminology.
- The U.S. material is intended for broad distribution. The precise license and attribution language for the Syadem material still requires confirmation from Syadem.

## Source inventory: Proposed Values.xlsx

The supplied workbook is a useful first-pass snapshot and contains two tabs.

### U.S. tab

The U.S. tab contains 277 concepts with unique permanent identifiers. Its supplied fields are:

| Source column | Proposed publication treatment |
| --- | --- |
| Observation Code | `CodeSystem.concept.code`; preserve leading zeroes. |
| Observation Title | English `display`. |
| Indication Text Description | Preserve as a structured concept property or designation extension/supplemental field; do not discard. |
| Contraindication Text Description | Preserve as a structured concept property or supplemental field; do not discard. |
| Clarifying Text | Preserve as a structured concept property or supplemental field. |
| SNOMED (Code) | Parse into zero or more mappings, retaining both supplied labels and codes. |
| CVX (Code) | Parse into zero or more mappings, retaining both supplied labels and codes. |
| PHIN VS (Code) | Parse into zero or more mappings, retaining both supplied labels and codes. |
| Value | Preserve the expected value type (`Yes/No` or `Date`). |

The tab includes 275 Yes/No concepts and two date-valued concepts. The identifiers span `001` through `279`, with `067` and `255` absent. Those gaps must be preserved rather than filled or renumbered. All identifiers are unique. One display title, `IGIV - Immune thrombocytopenic purpura treatment`, occurs twice and should be reviewed without assuming it is an error; distinct permanent codes may legitimately share a display.

An empty spacer column is present and has no semantic content.

The current authoritative U.S. input should be the CDC CDSi Supporting Data release, not this workbook snapshot. As of October 10, 2026, CDC's CDSi page identifies Supporting Data version 4.65, updated August 2026.

The maintained `C:\dev\cdsi\StepIntoCDSI` project already provides a strong operational source chain:

- `cdsi-reference/supporting-data/current-version.yaml` selects release 4.65.
- `versions/4.65/source/` preserves the immutable original ZIP and its categorized XML, XSD, spreadsheets, and release notes.
- `manifest.yaml` records SHA-256 checksums and a retrieval timestamp.
- The original ZIP's SHA-256 is `741b8fd21c77887c4d2dc9ce1119a58d2659152007bda6791ffc57fdc098ce3d`, matching both the repository copy and the separately downloaded copy in `C:\dev\cdsi`.
- The XML is validated against the supplied XSDs and mechanically normalized into deterministic JSON.
- `normalized/schedules/schedule.json` exposes the observations in an easy-to-read structure.
- The repository retains the official coded-observations workbook, including its Overview and Change History tabs.
- It also produces structured and human-readable diffs between releases.

Release 4.65 contains 278 coded observations. Compared with the older `Proposed Values.xlsx` U.S. tab, code `280`, `Chronic lung disease of prematurity`, is the only added concept. No concepts were removed and no observation titles changed. The official change history says code 280 was added to support RSV risk schedules for infants.

The XML/normalized JSON should be the main machine input for the concept list and narrative fields. The official spreadsheet must also be consulted because it contains useful publication context not represented in the observation XML, including the Overview and Change History. The older `Proposed Values.xlsx` also adds an expected value type that is not present as a column in the current official CDSi coded-observations workbook; that field therefore requires explicit IVC provenance and validation rather than being attributed directly to CDSi.

The website publication generator should consume the version selected by `StepIntoCDSI`, verify the registered manifest, read the normalized observation JSON plus retained release metadata, and produce the IVC proof-of-concept artifacts. It should not independently download CDC data during an ordinary website build.

### Syadem tab

The Syadem tab contains 652 concepts with unique permanent identifiers, all using a `C-` prefix. Its supplied fields are:

| Source column | Proposed publication treatment |
| --- | --- |
| Key | `CodeSystem.concept.code`; retain the `C-` prefix and numeric portion exactly. |
| English | English-language designation/display. |
| French | French-language designation and likely the authoritative display, subject to Syadem confirmation. |
| Type | Preserve the expected value type (`Yes/No`, `Date`, or `Number`). |

The tab includes 624 Yes/No concepts, 18 date-valued concepts, and 10 number-valued concepts. The final five spreadsheet rows are summary/formula rows rather than concepts and must not be published as terminology entries. Two empty spacer columns have no semantic content.

Four English display strings occur twice: `Other autoimmune disease`, `Dead animal`, `Missing animal`, and `Refusal of Meningococcal C Vaccination`. The codes remain unique, so these cases require semantic review rather than automatic deduplication.

At least one row deserves source validation before publication: `C-1029` has the English text `Intermediate living conditions` but French text meaning the date of the most recent dengue history, and its declared type is `Date`. This appears inconsistent. Some later entries also have untranslated or bilingual content in the English column. Faithful preservation should include the original supplied values, but the public release should distinguish an unmodified source snapshot from any reviewed/corrected presentation.

## Faithful republication principle

For both sources, the first release should preserve every semantically meaningful supplied field, not merely codes and displays. Fidelity does not require forcing every field into `CodeSystem.concept.definition`. A better approach is to publish:

1. A normalized FHIR `CodeSystem` with declared concept properties and language-aware designations.
2. A human-readable HTML table exposing the same information.
3. A lossless source-derived CSV or JSON artifact containing every meaningful original column.
4. Provenance metadata identifying the source release, retrieval date, transformation version, and any corrections.
5. A validation report listing anomalies, transformations, and fields omitted as non-semantic spreadsheet structure.

Where source content appears inconsistent, the pipeline should retain the source value and flag it for review. Silent correction would make the republication less faithful and harder to audit.

## Recommended publication shape for discussion

One workable static-site structure would be:

```text
/contextual-conditions/
  index.html                              international overview and governance
  {country}/index.html                    country namespace and coordination
  {country}/{authority}/index.html        authority canonical landing page
  {country}/{authority}/current/...       current machine-readable artifacts
  {country}/{authority}/{version}/...     immutable versioned artifacts
```

This is illustrative only. The authority slugs, version syntax, and artifact formats remain open.

### Namespace governance

Retain the proposal's geographic delegation level:

```text
https://ivci.org/contextual-conditions/{country}/{authority}
```

The country segment is not intended to assert national-government authorship. It establishes a delegated naming boundary: international coordination assigns and maintains country namespaces, while participants within each country coordinate authority identifiers locally. This avoids requiring one international body to resolve every organizational name and reflects the greater policy and terminology coherence commonly found within national immunization programs.

For example, the U.S. namespace could independently accommodate CDSi/ACIP concepts, American Academy of Pediatrics concepts, and vendor-maintained sets such as HLN's ICE concepts:

```text
https://ivci.org/contextual-conditions/usa/cdc-cdsi
https://ivci.org/contextual-conditions/usa/aap
https://ivci.org/contextual-conditions/usa/hln-ice
```

The recognizable geographic segment also helps a reader interpret the likely policy context even when the terminal authority acronym is unfamiliar.

The use of three-letter country identifiers has already been circulated and well received. The cleanest formalization is ISO 3166-1 alpha-3, making `usa` and `fra` predictable standards-based identifiers. Each country landing page should explain that the namespace is a coordination boundary and does not imply that every child code system is government-authored or government-endorsed.

Syadem should provisionally sit beneath `fra`, because it is a France-based authority and its current set comes from the French/MesVaccins context. Using `eu` would imply a broader European coordination boundary and should be reserved for a code system actually governed at that level. A proof-of-concept page can explicitly state Syadem's organizational status and that the path is not an official French-government endorsement.

Provisional first canonicals are therefore:

```text
https://ivci.org/contextual-conditions/usa/cdc-cdsi
https://ivci.org/contextual-conditions/fra/syadem
```

Static HTML is sufficient to make the canonical URLs resolvable and understandable. If these are also intended to function as FHIR canonicals, publication should additionally provide valid FHIR terminology resources, likely `CodeSystem` resources and possibly separate `ValueSet` resources, with deliberate decisions about canonical identity, versioning, content negotiation, and package distribution.

### Expected value type in FHIR

`expectedValueType` is not a universal built-in FHIR `CodeSystem` concept field. FHIR does, however, explicitly support declaring custom `CodeSystem.property` definitions and assigning property values to individual concepts. The proof of concept can define an `expectedValueType` property whose value is a code such as `boolean`, `date`, or `number` (with the final vocabulary aligned to the actual HL7 v2/FHIR representation rules). This makes the constraint computable while clearly identifying it as part of the IVC publication model rather than an intrinsic CDSi field.

The property should remain in the same CodeSystem: Date and Number concepts are still contextual-condition concepts, and their expected answer datatype does not require separate code systems.

## Proof-of-concept status and QA

The initial publication must be prominently labeled as a **proof of concept**, not a final normative release. Its purpose is to make the canonical model concrete, expose the full source content, and invite review before governance and production processes are finalized.

Each proof-of-concept release should include:

- a visible status banner and limitations statement;
- exact source release identity and checksums;
- a list of known issues and unresolved questions;
- a generated validation report;
- the transformation/tool version;
- a feedback contact and issue-reporting process;
- a statement that source identifiers are permanent but the publication structure and metadata remain under review;
- separate labels for source-supplied content, IVC-added metadata, translations, and corrections.

A repeatable QA process should include:

1. Verify source provenance, release version, checksum, and authority.
2. Validate source XML against its schema where one is supplied.
3. Confirm identifier uniqueness, permanence, formatting, and no reassignment.
4. Compare the new release with the prior release by stable code.
5. Validate required displays, definitions/narrative fields, value types, mappings, and language tags.
6. Flag duplicate displays, inconsistent translations, malformed mappings, and unexpected additions/removals.
7. Generate FHIR resources and validate them with an appropriate FHIR validator.
8. Generate HTML and lossless source-derived artifacts from the same normalized model.
9. Produce a human-readable QA report and known-issues list.
10. Route U.S. content questions to CDSi contacts and Syadem content/translation questions through François or the designated Syadem contact.
11. Require a named human release approver before changing the published current version.
12. Preserve every previously published version and never reuse a canonical concept code for a different meaning.

## Terminology model

The two collections are to be formal independent **code systems**, not merely value sets. The distinction remains important:

- A code system defines concepts and assigns their codes and meanings.
- A value set selects or composes concepts for a particular use.

Each authority assigns and defines its own codes, so each receives a separate FHIR `CodeSystem`. Future `ValueSet` resources may select concepts from either system for a particular implementation or use case, but they should have separate canonical URLs and governance. A future crosswalk should also be published separately and must not collapse the identity of either source code system.

## Decisions needed

1. Has CDC/CDSi explicitly assigned a canonical URI to its existing observation-condition codes, or would IVC be creating their first formal `CodeSystem.url`?
2. ~~Has Syadem approved IVC as a publisher/mirror of the complete set, including both languages?~~ **Resolved 2026-10-10:** Syadem authorized publication of the complete list in both languages and wants it shared widely. Still open: the exact copyright/license/attribution statement Syadem requires.
3. Is ISO 3166-1 alpha-3 the intended formal country identifier system, including `usa` and `fra`?
4. What version identifier should the first Syadem proof-of-concept use when the source spreadsheet has no clear formal release version?
5. Should French be the primary Syadem display with English as a translation, or are both supplied labels equally authoritative?
6. Which downloadable artifacts are required for the first release: FHIR JSON, FHIR XML, CSV, source spreadsheet, and/or an NPM implementation-guide package?
7. Which exact answer-type codes and semantics should the custom `expectedValueType` property use?
8. Who will be the named release approver for each proof-of-concept CodeSystem?
9. Should the root and country pages document the delegated naming process now, even if the national coordinators and submission workflow are initially provisional?

## Proof-of-concept build (2026-10-10)

A proof of concept based on this plan is generated by `contextual-conditions/generator/build.py` into `docs/contextual-conditions/`. It is unlinked from the main site and marked `noindex`. The IVC-supplied workbook is kept in the repository at `contextual-conditions/sources/ivc-supplied/` with its provenance documented, and all IVC-added metadata is in `contextual-conditions/config/code-systems.json`. See `contextual-conditions/README.md`.

## Near-term next step

Obtain the current CDC CDSi Supporting Data ZIP and confirm Syadem's publication permission, preferred attribution, license, primary display language, and release/version metadata. Then create draft `CodeSystem` resources and a validation report from both sources without publishing the canonical URLs yet.
