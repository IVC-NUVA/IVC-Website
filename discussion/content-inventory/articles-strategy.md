# Articles: Initial Editorial Approach

Decision date: 2026-10-07  
Status: Phase 1 editorial decision and first-article brief

## Purpose and public label

Use **Articles**, not Blog, News, or Updates.

Articles will provide concise context and background for the principles that
guide IVC's work. They are a place to explain why vocabulary practices matter,
respond thoughtfully to relevant ideas, and connect outside writing to vaccine
code-set work. They are not intended to create an informal diary, a frequent
news feed, or a substitute for maintained technical documentation.

An article may reflect an author's interpretation. It must not imply that IVC
has issued a binding position or that participants or their organizations have
endorsed it. Maintained factual guidance belongs in the appropriate reference
page rather than being left only in a dated article.

## Initial publishing model

For the initial website:

- Nathan Bunker authors the articles.
- Nathan reviews, approves, and publishes his own articles.
- No standing publication schedule is required.
- Sources are linked where an article responds to or depends on outside work.
- Material factual changes receive an updated date and a short correction or
  revision note. Minor typographical fixes do not require one.
- Superseded articles remain available as dated records when practical, with a
  visible status or link to newer guidance instead of silent deletion.
- A more formal contributor, technical-review, and approval process is
  deliberately deferred until the collaboration matures and needs it.

This is an intentionally small process, not a claim that Nathan's articles are
formal consensus statements of IVC.

## Minimum article metadata

Each article should have:

- Title
- Short summary
- Author
- Publication date
- Updated date, only when applicable
- One or more topics
- Status: draft, published, revised, or archived
- Sources and related reading

The article page should identify Nathan as the author. The Articles landing
page should show title, summary, date, and topic; it should not need elaborate
author profiles, categories, comments, or workflow controls for launch.

## First article brief

Working title: **Rich information is part of interoperability**

Purpose: briefly explain that successful information exchange requires more
than transporting a code. The underlying concept must be described richly
enough to be understood, compared, and used outside the narrow context in
which it was created.

The article should:

1. Start with the familiar success case: two systems can exchange a vaccine
   code.
2. Explain the remaining problem: the receiver may still lack enough governed
   information to determine what the code means and how it relates to other
   vaccine concepts.
3. Use a simple immunization example, such as a local code set containing only
   currently authorized products. It may work for today's administration but
   fail to represent historical or foreign vaccinations.
4. State the IVC principle: meaning and reference information are
   infrastructure, not optional documentation added after exchange design.
5. Link readers to Tito Castillo's article for the broader FHIR and reference-
   data argument.

Avoid turning the piece into a critique of FHIR. The source article itself
does not argue that FHIR is the problem; it asks whether excessive meaning is
being recreated in exchange specifications because authoritative definitions
and reference data are not governed independently.

Primary related reading:

- Tito Castillo, [FHIR Is Not the Problem. But We May Be Asking It to Solve
  the Wrong One](https://www.linkedin.com/pulse/fhir-problem-we-may-asking-solve-wrong-one-tito-castillo-fbcs-citp--ueyfe/),
  published 4 October 2026.

## Questions deferred beyond launch

- Whether guest authors will be accepted
- When technical review is required and who performs it
- Whether any article can be described as an IVC consensus statement
- A formal corrections, withdrawal, and archival policy
- Taxonomy beyond a small set of useful topics
- Syndication, subscriptions, comments, and social-media workflow

