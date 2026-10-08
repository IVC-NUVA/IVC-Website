# Backload Historical IVC Meetings into InteropHub

Status: Done and verified locally; waiting for production deployment
Prepared: 2026-10-08

Completion record:
[interop-hub-historical-meeting-backload-response.md](interop-hub-historical-meeting-backload-response.md)

## Objective

Build and test a production-ready historical backload of IVC meetings in a
local InteropHub environment. Reconstruct supported meeting instances and
agenda items, preserve the selected presentation files, connect agenda items
to existing Building Bridges topics only when the source evidence supports the
connection, and prepare the SQL and stored files that Nathan can later package
and move to production.

Do not deploy to production as part of this task.

## System context

InteropHub is deployed locally with:

- a database refreshed from a nightly production copy;
- a running local Tomcat instance;
- an `unapplied_updates.sql` script used for pending database changes;
- a documented refresh process that can retrieve the latest nightly backup,
  replace the local test database, and apply `unapplied_updates.sql`; and
- a configured local folder, adjacent to the InteropHub project, from which
  files can be served.

The new `hub_stored_file` table is defined through the unapplied updates. It
allows database records to refer to files placed in the configured served-file
folder. Presentation files migrated by this task must be copied into the
correct local file-store structure, represented in `hub_stored_file`, and
associated with the applicable meeting agenda item using the existing
InteropHub model.

The InteropHub repository and its documentation are authoritative for the
refresh commands, database configuration, file-store location, schema,
relationships, ID conventions, and attachment process. Confirm all of these
before writing migration SQL. Do not infer schema details from this task.

## Source material on the IVC side

The primary local source collection is outside this website repository:

`C:\Users\NathanBunker\AIRA Dropbox\Nathan Bunker\Emerging Standards\IVC`

Important subdirectories include:

- `Agenda`
- `Presentation`
- `Notes`
- `Recordings`
- `Bordeaux 2025`
- `IVC en espanol`

Use the collection under `Emerging Standards\IVC` as the canonical source.
Do not import duplicates from the separate
`C:\Users\NathanBunker\AIRA Dropbox\Nathan Bunker\IVC en espanol` folder.

This repository provides the source inventory and prior reconciliation work:

- `docs/content-inventory/events/meeting-archive-boundary.md` — system-of-record
  decision, date boundary, publication defaults, and reconciliation scope.
- `docs/content-inventory/local-source-review.md` — local collection root,
  content areas, privacy defaults, and remaining review work.
- `docs/content-inventory/inventory.md` — public DokuWiki meeting and
  presentation indexes and their disposition.
- `docs/content-inventory/events/ivc-en-espanol-2025.md` — three reconciled
  Spanish-language meetings, preferred decks, agenda guidance, duplicates,
  exclusions, and a known date discrepancy.
- `docs/content-inventory/events/bordeaux-2025-event.md` — reconciled Bordeaux
  identity, agenda, delivered-session evidence, presentation selection, and
  cautions.
- `docs/content-inventory/events/bordeaux-2025-artifacts.md` — detailed Bordeaux
  artifact register, canonical files, duplicates, and exclusions.
- `docs/content-inventory/collection-backlog.md` — original outstanding
  historical-meeting task.

Also compare the legacy public indexes linked from the inventory documents:

- DokuWiki meeting agendas
- DokuWiki presentations
- DokuWiki Bordeaux 2025 record

## InteropHub records to inspect first

Before creating anything, inspect and document:

1. The existing IVC topic in the **Emerging Standards** topic space. It is
   configured as a topic that has meetings and is the parent/context for the
   historical meeting instances.
2. The existing IVC meeting instances created from summer 2026 onward. Use
   these as the structural examples for meeting rows, agenda items, ordering,
   titles, dates, visibility, and file associations.
3. The **Building Bridges** topic space, which is a peer of Emerging Standards,
   and its current topics. Historical agenda items may link to those topics
   when supported by the source material.
4. The current `Welcome and Introductions` (or equivalent) agenda-item pattern.
5. The definition and existing use of `hub_stored_file`, the configured served
   file directory, and every table or relationship required to attach a stored
   file to an agenda item.
6. The documented refresh workflow and the role of `unapplied_updates.sql`.

Record the relevant repository paths, documentation links, table names, keys,
and representative existing row IDs in the migration report. Avoid embedding
environment-specific secrets or credentials.

## Meeting model and content rules

- All historical records belong under the existing IVC meeting-enabled topic
  in Emerging Standards. Do not create another IVC series or a separate
  Spanish-language group.
- Each meeting instance has its own title. Use that title to distinguish
  ordinary monthly meetings, Spanish-language meetings, and Bordeaux event
  records while retaining the shared IVC parent topic.
- Reconstruct agenda items from agendas, presentations, notes, public indexes,
  and other reliable meeting evidence.
- An agenda item may link to an existing Building Bridges topic when the
  connection is clearly supported. Prefer no topic link over a speculative or
  merely plausible connection.
- If no matching current topic exists, create the agenda item without a topic
  association. Do not create new Building Bridges topics merely to complete
  this migration unless Nathan separately approves that expansion.
- Preserve each selected presentation file unchanged. Do not silently edit old
  slides, claims, branding, dates, or terminology.
- Select one useful canonical version of each presentation rather than copying
  every available format or duplicate. Prefer PPTX because it can support
  future slide creation; use PDF when it is the only suitable version.
- InteropHub is the public access layer, not the complete file-preservation
  archive. The existing local source collection will retain other formats,
  duplicates, and working files.
- Every selected presentation must be associated with an agenda item.
- Attach a presentation to its specific agenda item when the relationship is
  reasonably supported.
- For a meeting-wide deck, or when no more specific association is supported,
  attach it to the first `Welcome and Introductions` or equivalent agenda item.
- When a meeting contains multiple distinct presentations, create or use the
  supported agenda items and attach each deck to the best-evidenced item.
- Presentation preservation is the priority. Missing secondary material must
  not cause an otherwise supported presentation to be omitted.

## Historical scope

Reconcile recurring meetings from June 2023 through 13 May 2026. InteropHub
already contains the newer IVC instances beginning in summer 2026; confirm the
exact boundary against the refreshed local database before generating inserts.
Do not duplicate any existing meeting.

Include the three Spanish-language meetings documented in
`ivc-en-espanol-2025.md`:

- 12 March 2025
- 9 April 2025
- 23 July 2025, subject to the documented June/July date check

Treat Bordeaux as special event instances under the same IVC meeting-enabled
topic. Use two meeting instances, one for each day:

- 8 May 2025 — training
- 9 May 2025 — summit

This is the preferred starting arrangement. If the source evidence or
InteropHub model supports a materially better structure, document the proposed
alternative and review it with Nathan before implementing it.

Use `IVC Monthly Meeting` as the title for ordinary recurring meetings. Do not
include the date in the title because the meeting record already carries it.
Use distinct descriptive titles for the Bordeaux and Spanish-language meeting
instances as supported by their reconciled inventories.

## Publication and exclusion rules

Default to migrating reconstructed agenda items, supported agenda
descriptions, and selected presentation files. Read source agenda documents to
recreate the agenda in InteropHub's native model, matching the structure and
UI of current meetings. Do not publish the agenda documents themselves as
downloads. Preserve the local collection as the source archive after
migration.

When a suitable public summary is already available or can be derived directly
from reliable meeting notes, add it to the InteropHub meeting notes. A missing
summary is not a blocker: the required public record is the native agenda plus
the selected presentations, when presentations exist. Do not expose raw or
private notes.

Do not publish or attach raw attendance, contact information, invitations,
chat, private/internal notes, internal reports, planning documents, recordings,
transcripts, photographs, promotional material, draft decks, conflicted
copies, ZIP bundles, or duplicate PPTX/PDF renderings unless a source-specific
inventory explicitly approves the item and Nathan confirms the exception.

Meeting notes and other materials may be used as evidence to reconstruct a
public agenda without being copied into InteropHub.

## Required workflow

1. Read the InteropHub project documentation and locate the local project,
   refresh script, `unapplied_updates.sql`, local database settings, and served
   file directory.
2. Refresh the local environment from the latest nightly production copy and
   confirm that the unapplied updates, including `hub_stored_file`, apply
   successfully.
3. Inspect the live local schema and current IVC records. Document the exact
   record pattern to reproduce; do not guess table relationships or IDs.
4. Inventory meetings and candidate files from the canonical IVC source tree.
   Reconcile them by date against DokuWiki and existing InteropHub records.
5. Produce a migration manifest before implementing all inserts. For each
   meeting include its source evidence, proposed title/date, agenda ordering,
   optional Building Bridges associations, selected presentations, canonical
   source paths, exclusions, and unresolved questions.
6. Review ambiguous dates, identity collisions, unsupported topic links, and
   Bordeaux structure with Nathan before encoding those choices in SQL.
7. Copy approved presentation files to the configured local InteropHub file
   store using its documented naming and directory conventions. Compute and
   record a SHA-256 hash for each copied file.
8. Add deterministic/idempotent migration SQL to `unapplied_updates.sql` for
   meeting instances, agenda items, supported topic associations,
   `hub_stored_file` rows, and agenda-item/file associations. Follow the
   InteropHub project's established migration conventions.
9. Run the normal refresh process again from a clean nightly database so the
   complete migration is exercised exactly as documented.
10. Validate the records through both the database and the local Tomcat UI.
    Verify meeting ordering, titles, agenda ordering, topic links, public file
    downloads, MIME types/filenames, and absence of duplicate meetings or
    files.
11. Produce the final migration report and package-ready list for Nathan. Stop
    after local validation; Nathan will coordinate production deployment.

## Deliverables

- Updated InteropHub `unapplied_updates.sql` containing the historical backload.
- Approved presentation files copied into the local served-file structure.
- A migration manifest covering every historical meeting considered.
- A migration report containing:
  - created and reused database IDs;
  - meeting and agenda-item titles and dates;
  - Building Bridges links and their supporting evidence;
  - original and copied file paths, SHA-256 hashes, stored-file IDs, and public
    test URLs;
  - excluded and duplicate files with reasons;
  - unresolved gaps or ambiguities;
  - refresh/test commands used and validation results.
- No production changes.

## Completion criteria

- The local database can be rebuilt from a fresh nightly copy and the complete
  unapplied update runs successfully without manual database edits.
- Each supported historical meeting exists once under the current IVC
  meeting-enabled topic.
- Ordinary recurring instances use the title `IVC Monthly Meeting`; their dates
  remain in the meeting date fields rather than being repeated in the title.
- Agenda items reflect available evidence and contain no speculative Building
  Bridges associations.
- Historical agendas use InteropHub's native agenda UI; source agenda documents
  are not exposed as downloads.
- Every selected presentation is represented by a served file and attached to
  an agenda item.
- Only one canonical version of a presentation is exposed, preferring PPTX and
  using PDF when it is the only suitable version.
- Bordeaux and the Spanish-language meetings follow their reconciled source
  guidance.
- All copied files download successfully through the local InteropHub instance.
- The SQL and file package are ready for Nathan's separate production process.

## Confirmed implementation decisions

- Start with two Bordeaux meetings: training on 8 May and the summit on 9 May.
  A better structure may be proposed for review if InteropHub or the source
  evidence provides a compelling reason.
- Use `IVC Monthly Meeting` without a date as the ordinary recurring title.
- Expose one canonical presentation version, preferring PPTX and accepting PDF
  when needed. Do not copy duplicate formats merely for preservation.
- Read agenda documents as evidence but do not expose them as downloads.
  Recreate their contents through InteropHub's native agenda model.
- Add a concise public summary to the meeting notes when suitable evidence is
  available. Do not delay an otherwise complete migration when no summary is
  supported.
