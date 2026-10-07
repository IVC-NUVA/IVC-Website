# François Technical Fact-Checking Package — Superseded Draft

> This long-form packet has been superseded by the launch-focused
> [François Technical Fact Check](francois-launch-fact-check.md). Retained only
> as planning history; do not send this version for review.

Status: Ready for technical review  
Prepared: 2026-10-07  
Related working brief: [Foundation Messaging Brief](foundation-messaging-brief.md)

## Purpose

We are preparing the content foundation for the Immunization Vocabularies
Collaboration (IVC) website. Nathan has decided the website's communications
position, scope, participation model, and public boundaries. This review asks
François to verify the technical facts about NUVA, its current stewardship and
publication path, and the terminology the website may safely use.

This is not a request to write website copy or design a future governance model.
It is a request to distinguish:

- What is technically accurate today
- What is a transition currently in progress
- What is a proposed future state
- What should be omitted from evergreen website copy because it changes often
  or is not yet settled

## How to respond

For each proposed statement or question, please use one of these responses:

- **Approve** — accurate enough for public introductory use
- **Correct** — supply replacement wording or the specific correction
- **Defer** — not settled or not appropriate for the website yet
- **Use a dated update** — accurate now, but too changeable for evergreen copy

Please provide an authoritative source link when one exists. If a fact is
correct but the cited NUVA documentation is outdated, please identify both the
correct fact and the documentation that needs repair.

## Decisions already made by Nathan

These are context, not questions for reconsideration. Please flag a technical
error, but the communications and scope decisions are settled.

- IVC is a focused, peer-support collaboration for informaticians who create
  and maintain vaccine code sets.
- Participants bring individual experience; they do not formally represent
  their employers, programs, countries, or jurisdictions.
- IVC can provide technical feedback and community perspectives about accurate
  representation of immunization concepts. It does not make binding decisions
  for code-system owners or take positions on immunization-program policy,
  procedures, or operations.
- IVC does not manage PHI or operate/support production systems that do.
- Current IVC commitments are monthly meetings, code-system documentation
  processes, NUVA alignment tools/processes and related metrics, website
  information, and informal technical questions through meetings or the
  website.
- Country and organization interviews are aspirational, not a current program.
- NUVA is gradually transitioning toward community support, but IVC currently
  has no authorization to approve or reject NUVA changes.
- The website will describe only established present facts and will not present
  proposed governance as operational.

## Part 1: Proposed public statements

Please approve, correct, defer, or route each statement to a dated update.

### S1. Concise NUVA definition

> NUVA is an open, shared ontology for representing administered vaccines and
> their valences consistently across existing vaccine code systems and over
> time.

Review points:

- Is **ontology** the right primary term for an introductory website?
- Is **administered vaccines** an important scope qualifier?
- Is **open, shared** accurate, or should one or both words change?
- Is this description broad enough without overstating NUVA's purpose?

Response:

### S2. The need NUVA addresses

> Vaccine and medicinal-product codes are created for different purposes and
> jurisdictions and may change over time, while a person's vaccination history
> must remain interpretable throughout life. NUVA helps bridge existing
> codifications across jurisdictions and over long periods.

Review points:

- Does this accurately distinguish vaccine-history needs from ordinary product
  coding?
- Does "bridge" describe NUVA without implying a lossless transformation?

Response:

### S3. Core concepts and layers

> NUVA represents vaccine concepts and valences. Language layers provide
> translated wording, and alignment layers associate codes from existing code
> systems with NUVA concepts.

Review points:

- Is **valence** being used correctly here?
- Are language and alignment correctly called **layers**?
- Does an alignment associate a source code with a NUVA vaccine concept, or is
  a more precise relationship required?

Response:

### S4. Code-system ownership

> NUVA does not replace national, product, regulatory, billing, or clinical
> code systems. Code-system owners remain responsible for their own content and
> maintenance processes. NUVA provides a shared model to which those systems can
> be aligned.

Review points:

- Is this boundary technically accurate?
- Are any categories misleading or outside NUVA's actual relationship model?
- Does "aligned" require a qualification about purpose or equivalence?

Response:

### S5. Semantic-pivot use and limitation

> When reliable alignments exist, NUVA can act as a semantic pivot for
> comparing code systems or generating candidate transcriptions between them.
> These results may lose distinctions and must be interpreted in light of each
> source alignment and the intended use.

Review points:

- Are **semantic pivot** and **candidate transcriptions** accurate terms?
- Is the limitation strong and precise enough?
- Should the public introduction mention reverse maps, broader concepts, blur,
  or equivalence, or reserve those for technical documentation?

Response:

### S6. Current publication transition

> NUVA is transitioning from a publication process centered on Syadem's
> proprietary system toward an open repository in which concept-level Unit
> files become authoritative and published representations are generated from
> them. The transition is active but incomplete.

Review points:

- Is this accurate **today**?
- What is authoritative today: Syadem data, Unit files, or a merged transitional
  state?
- Which generated representations are already produced reliably from the
  repository?
- What still depends on Syadem or the existing IVC server?

Response:

### S7. Community-support transition

> Work is underway to make NUVA a community-supported resource. IVC currently
> provides a collaboration space and helps develop tools and processes for
> future participation, but IVC does not currently authorize changes to NUVA.
> The long-term review, approval, publication, and governance model is still
> being established.

Review points:

- Is this an accurate account of the present state?
- Who actually authorizes core changes and alignments today?
- Is **community-supported resource** the intended destination?
- Is there any adopted governance that should be stated now?

Response:

### S8. Syadem and François

> Syadem and François have central historical and current technical roles in
> NUVA's content and publication processes.

Review points:

- Please replace this deliberately general sentence with the most accurate
  concise statement of current roles.
- Which responsibilities belong to François personally, the Syadem medical
  team, the Syadem technical team, or another party?
- Which roles are expected to continue after the repository transition?

Response:

### S9. License

> NUVA is made available under the Creative Commons Attribution 4.0 license.

Review points:

- Which assets does this cover: core concepts, alignments, translations,
  generated exports, documentation, and/or software?
- Do any parts use different licenses or carry third-party restrictions?
- What attribution should the website tell users to provide?

Response:

### S10. Relationship with SNOMED CT

No public statement is proposed yet. Please provide a short statement that is
accurate today and answers:

- What is the NUVA extension to SNOMED CT?
- Who owns, maintains, reviews, and publishes it?
- What is its publication status and cadence?
- Does it contain all of NUVA, a selected representation, or another model?
- What relationship, if any, should be attributed to SNOMED International?
- What should the IVC website avoid claiming?

Response:

## Part 2: Terminology decisions

Please provide the preferred public term, a one-sentence plain-language
definition, and a link to the normative or best available technical definition.

| Term | Preferred public definition | Technical source | Notes or limitation |
| --- | --- | --- | --- |
| NUVA |  |  |  |
| Vaccine concept |  |  |  |
| Abstract vaccine |  |  |  |
| Real vaccine |  |  |  |
| Deprecated vaccine |  |  |  |
| Valence |  |  |  |
| Valence type |  |  |  |
| Language layer |  |  |  |
| Alignment layer/file |  |  |  |
| Direct alignment |  |  |  |
| Reverse map |  |  |  |
| Transcription map |  |  |  |
| Exact |  |  |  |
| Broader |  |  |  |
| Best available code |  |  |  |
| Blur |  |  |  |
| Equivalence |  |  |  |
| Completeness |  |  |  |
| Precision |  |  |  |
| Redundancy |  |  |  |
| Missing / `#MISS` |  |  |  |
| Out of scope / `#NA` |  |  |  |

If some of these terms are implementation details that should not appear on
the IVC website, please mark them **technical documentation only**.

## Part 3: Name and identifier check

### Official English expansion

Current sources conflict:

- `Unified Nomenclature of Vaccines` — repository README
- `Unified Nomenclature of Vaccine` — documentation overview
- `Unified Nomenclature for Vaccines` — older communications

Please provide the official English expansion and identify which source files
should be corrected.

Response:

### Canonical identity

Please identify the current canonical value and status for each item.

| Item | Canonical value/URL | Status | Safe for evergreen website? |
| --- | --- | --- | --- |
| NUVA code-system URI |  |  |  |
| OID, if any |  |  |  |
| Repository | `https://github.com/IVC-NUVA/NUVA` | Confirm |  |
| Main NUVA site/editor | `https://nuva.ivci.org` | Confirm |  |
| Documentation | `https://nuva.ivci.org/documentation/` | Confirm |  |
| Current release/download page |  |  |  |
| Release history |  |  |  |
| Vaccine browser |  |  |  |
| Alignment resources |  |  |  |
| Reverse-map/metrics resources |  |  |  |
| RDF distribution |  |  |  |
| CSV distribution |  |  |  |
| SPARQL endpoint, if supported |  |  |  |
| Management/editorial policy |  |  |  |
| French terminology publication |  |  |  |
| SNOMED CT extension |  |  |  |
| FHIR CodeSystem representation |  |  |  |

Please mark a URL **transitional**, **historical**, **unsupported**, or
**internal** rather than supplying it as canonical when appropriate.

## Part 4: Authority and workflow today

Please describe the present workflow, not the intended final workflow.

1. What source is authoritative for a NUVA vaccine or valence today?
2. Who may propose a change?
3. Who reviews its scientific or terminological correctness?
4. Who accepts or rejects it?
5. Who performs or triggers publication?
6. Which outputs are generated automatically, and from what source?
7. How is an external code-system alignment proposed, reviewed, accepted, and
   published today?
8. Who owns the content and currency of an alignment?
9. What role does IVC actually perform in any of these steps today?
10. Which documented committees, roles, review periods, or workflows are only
    proposals and must not be described as operating?

Response:

## Part 5: Claims that may be too changeable for evergreen copy

For each category, indicate whether the website may make a stable qualitative
claim, should link to a live source, should use a dated update, or should omit
the claim entirely.

| Claim category | Stable summary allowed? | Authoritative live source | Required qualification |
| --- | --- | --- | --- |
| Number of vaccine concepts |  |  |  |
| Number of valences |  |  |  |
| Number of represented code systems |  |  |  |
| Supported languages |  |  |  |
| Completeness |  |  |  |
| Precision |  |  |  |
| Stability/versioning |  |  |  |
| Update frequency |  |  |  |
| Production or clinical use |  |  |  |
| Countries or programs using NUVA |  |  |  |
| Alignment quality |  |  |  |
| Mapping/transcription accuracy |  |  |  |

The default website approach will be to link to an authoritative live resource
rather than duplicate counts, versions, or status claims.

## Part 6: Source-status check

The review drew from these NUVA repository sources:

- `README.md`
- `docs/documentation/index.md`
- `docs/documentation/internal/publication.md`
- `docs/documentation/tools/github.md`
- `docs/documentation/tools/f_unitfile.md`
- `docs/documentation/tools/f_alignment.md`
- `docs/documentation/organisation/ivc.md`

Please classify each as **current**, **partly current**, **proposed**, or
**obsolete**, and point to a better source where one exists. In particular,
`docs/documentation/organisation/ivc.md` is currently marked `Void` and should
not be treated as an operating model.

Response:

## Review completion checklist

- [ ] Proposed statements S1–S9 approved, corrected, deferred, or dated
- [ ] Current SNOMED CT relationship supplied for S10
- [ ] Official NUVA expansion confirmed
- [ ] Essential public terminology defined
- [ ] Canonical identifiers and URLs confirmed
- [ ] Current authority and publication workflow described
- [ ] Syadem, François, and IVC roles distinguished
- [ ] Current practice separated from proposed governance
- [ ] License scope and attribution confirmed
- [ ] Changeable claims assigned to live links, dated updates, or omission
- [ ] Source documents classified by currentness
- [ ] Any material that should remain internal identified

## What happens after this review

Nathan will resolve any communications choices exposed by the corrections. The
website content work will then:

1. Update the foundation brief with verified facts and sources.
2. Mark unresolved or transitional claims explicitly.
3. Draft the public NUVA overview and related IVC language.
4. Return the actual public copy for a shorter final accuracy review.

This packet is a fact-checking step, not approval of final website copy.
