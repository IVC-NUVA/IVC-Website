# Recurring Meeting Archive Boundary

Decision recorded: 2026-10-07

## Canonical destinations

- Current and future meeting series:
  [InteropHub IVC Monthly Meetings](https://informatics.immregistries.org/hub/es/meeting-series?seriesId=1)
- Example individual agenda supplied during review:
  [14 October 2026 agenda](https://informatics.immregistries.org/hub/es/agenda?meetingId=22)
- Legacy public indexes:
  [DokuWiki meeting agendas](https://ivci.org/doku/doku.php?id=ivci:meetings)
  and
  [DokuWiki presentations](https://ivci.org/doku/doku.php?id=ivci:presentations)

## System-of-record decision

InteropHub is the canonical public system for **all** recurring IVC meetings.
This includes current and future meetings and legacy meetings that will be
backloaded after reconciliation. The website should link to the stable series
page and relevant InteropHub meeting records rather than maintain a separate
public meeting archive or link only to one changing `meetingId` page.

The local working collection remains the preservation and source archive. The
repository inventory will document provenance, reconciliation, privacy, and
migration decisions, but it will not become a second public meeting system.

## Reconciled handoff

| Archive | Coverage established during review | Treatment |
| --- | --- | --- |
| Legacy DokuWiki/local files | June 2023 through 13 May 2026 | Reconcile, preserve locally, and use as the source for backloading approved public records into InteropHub |
| InteropHub | Currently begins with a closed meeting on 10 June 2026; also lists closed meetings on 8 July and 9 September 2026, plus upcoming meetings | Backload reconciled legacy meetings so this becomes the single complete public series |

This establishes a continuous handoff: the newest meeting listed in the legacy
archive is 13 May 2026, and the first meeting shown in InteropHub is 10 June
2026. No recurring monthly meeting gap is evident at the system boundary.

## Website model

The website will have a Meetings section that introduces the meeting series and
directs visitors to InteropHub for upcoming and historical meetings. It may link
directly to a particular InteropHub meeting when referring to it from an update
or resource, but should otherwise use the stable series page.

Visitors should not have to choose between systems based on a meeting date. The
technical handoff date remains useful for migration work, but it should not be
part of the normal public navigation model.

## Legacy reconciliation scope

The next inventory batch will cover recurring meetings from June 2023 through
13 May 2026 by matching:

- `Agenda` files
- `Presentation` files
- `Notes` and minutes
- `Recordings` and transcripts
- DokuWiki agenda and presentation entries

For each meeting, record the date, available artifacts, duplicate/version
relationships, privacy, publication status, gaps, and intended InteropHub
fields or attachments. The resulting register will serve as the migration
manifest. Source files will not be deleted or reorganized during Phase 1.

## Publication defaults

- Backload cleared legacy agendas, presentations, and public summaries into
  InteropHub.
- Keep raw attendance, contacts, invitations, chat, and internal notes private.
- Treat recordings and transcripts as private until specifically approved.
- Prefer a short public meeting summary over raw minutes when private or candid
  discussion is mixed with useful outcomes.
- Keep the original local collection as the preservation/source record after
  migration.
- Do not copy InteropHub meeting content into the website; link to it.
