# Response: Backload Historical IVC Meetings into InteropHub

Responds to: [interop-hub-historical-meeting-backload.md](interop-hub-historical-meeting-backload.md)
Prepared: 2026-10-08, by the InteropHub agent
Status: **Done and verified locally; waiting for production deployment**

## Link to this

Use this as the website's link to the IVC meeting archive:

**https://informatics.immregistries.org/hub/es/meeting-series?seriesId=1**

This is the IVC meeting series page in InteropHub. It already exists and won't
change. Today it lists the 2026 meetings. Once the release below is deployed,
its **Past Meetings** section will also list every historical meeting back to
14 June 2023. Each row has a **View Agenda** link to that meeting's agenda and
presentation downloads.

### Preview

On Nathan's machine, the same page with the backload applied is
http://localhost:8080/hub/es/meeting-series?seriesId=1.
It only works there. Example local agenda pages:

| Meeting | Local preview |
| --- | --- |
| Bordeaux summit, 9 May 2025 | http://localhost:8080/hub/es/agenda?meetingId=110 |
| Bordeaux training, 8 May 2025 | http://localhost:8080/hub/es/agenda?meetingId=109 |
| IVC en español, 12 March 2025 | http://localhost:8080/hub/es/agenda?meetingId=105 |
| First meeting, 14 June 2023 | http://localhost:8080/hub/es/agenda?meetingId=92 |

**Don't put any `meetingId` link on the website yet.** Production will assign
different meeting IDs when the release runs. The series URL above is the only
link that is final now.

The local meeting-series page shows meeting times incorrectly. This happens
only on the local machine. Agenda pages, and production, show the correct
times.

## What was done

The work was done in the InteropHub repository (`immregistries/InteropHub`,
commit `4a61572` on `main`). It added 30 historical meetings to the existing
IVC meeting series under Emerging Standards:

| | Count |
| --- | ---: |
| Monthly meetings, 14 June 2023 – 13 May 2026 | 25 |
| IVC en español meetings (12 Mar, 9 Apr, 23 Jul 2025) | 3 |
| Bordeaux meetings: training (8 May 2025) and summit (9 May 2025) | 2 |
| Agenda items, rebuilt from agendas, decks, and DokuWiki | 143 |
| Presentations attached, one canonical copy each (PPTX preferred) | 57 |
| Links from agenda items to Building Bridges and Emerging Standards topics | 31 |

- **Matches the legacy archive:** the 25 monthly dates match the DokuWiki
  meeting index exactly.
- **No gap or duplicates:** the archive runs straight into the 2026 meetings
  InteropHub already had (first one: 10 June 2026), and none were duplicated.
- **Bordeaux:** only sessions with evidence they were delivered were included.
  The planned WHO and PAHO slots are left out. The EU strategy session has an
  agenda item but no slides.
- **Spanish meetings:** these are in the same series, with Spanish titles.
- **Nothing private:** agendas were rebuilt in InteropHub's own agenda pages,
  not attached as files. No notes, recordings, attendance, chat, contacts,
  invitations, photos, or internal material were published.
- **Verified locally:** the result was checked on two fresh rebuilds of the
  local database. All 57 files download without signing in, and each file
  matches its original byte for byte.

### Where this differs from the original task

| Original task | What was done | Why |
| --- | --- | --- |
| Title ordinary meetings `IVC Monthly Meeting` | `Immunization Vocabularies Collaboration (IVC) Monthly Meeting` | Nathan chose to match the existing InteropHub series and current meetings |
| Add a public summary to the meeting notes when supported | No summaries | Nathan's decision. InteropHub stores notes per topic and locks them once a meeting closes. Candidates are listed in the report for a possible later pass |
| (dates only) | Every meeting is set at a nominal 10:00 ET, including Bordeaux. The two Spanish meetings that share a date with an English one are at 9:00 ET | Historical times aren't preserved. The 9:00 time keeps same-day meetings in the right order |
| Possible Spanish meeting on 24 Sept 2025 | Omitted | The only evidence is an unfilled agenda template: no deck, no recording, and not in the Spanish review |
| Two decks over the 25 MiB upload limit (June and July 2025 summit reviews) | Attached unchanged | Nathan approved them as exceptions |

Bordeaux has two meetings: *IVC Vaccine Code Training — Bordeaux* (8 May 2025)
and *International Summit on Vaccine Coding & Standards — Bordeaux* (9 May 2025).

The July 2025 Spanish deck is filed under 23 July, even though its title slide
says "11 June 2025". The file was left unchanged, and the mismatch is recorded.

## What this means for the website

- **One archive link:** use the series URL for "past meetings" and
  "meeting archive". Don't recreate agendas, a presentation index, or a
  Spanish meetings section on the website. The series page already lists
  English, Spanish, and Bordeaux meetings together in date order.
- **Direct links to individual meetings:** for example, from a Bordeaux event
  page. Take the production URL from the series page **after** deployment.
  Nathan will give you the two Bordeaux URLs once production has assigned the
  IDs.
- **Old content:** the presentations are historical. Several use the former
  IVCI name and include claims from that time. Present them as historical
  records, not current guidance.
- **Topic pages aren't a full archive:** they show only the next meeting and
  the 3 most recent past ones. Don't send visitors to a topic page for meeting
  history; use the series URL.

## Production status

- **Release:** this is part of InteropHub release v0.9. The deployment is
  tracked in AART issue #3937 (internal).
- **Before deployment:** the series URL works but shows only the 2026 meetings.
- **After deployment:** the full archive appears at the same URL, with no
  change needed on the website.

## Records (InteropHub repository)

- `docs/tasks/backload-ivc-meetings.md`: the InteropHub version of this task.
- `docs/tasks/ivc-historical-meetings-manifest.md`: meeting-by-meeting plan,
  sources, exclusions, and Nathan's decisions (Q1–Q9).
- `docs/tasks/ivc-historical-meetings-migration-report.md`:
  - local IDs, agenda and topic map, and file manifest with SHA-256 hashes;
  - verification results and the production checklist.
- `docs/tasks/ivc-historical-meetings-files.tsv`: source path, stored file
  identifiers, size, and hash for each presentation.
- `db/unapplied_updates.sql`: the SQL that creates the archive. It's the block
  at the end of the file.

No source files in the Dropbox IVC collection were modified.
