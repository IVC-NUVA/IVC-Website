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

InteropHub is the canonical system for current and future recurring IVC meeting
agendas. The website should link to the stable series page rather than copy
agendas or link only to one changing `meetingId` page. Presentations are
expected to be stored in InteropHub in the future as that capability is adopted.

The website repository remains responsible for a legacy archive for meetings
that predate the transition. It should not duplicate content already managed in
InteropHub.

## Reconciled handoff

| Archive | Coverage established during review | Treatment |
| --- | --- | --- |
| Legacy DokuWiki/local files | June 2023 through 13 May 2026 | Reconcile and retain for now; provide a usable historical index and approved files |
| InteropHub | Begins with a closed meeting on 10 June 2026; also lists closed meetings on 8 July and 9 September 2026, plus upcoming meetings | Link to the stable meeting-series page; do not mirror meeting content |

This establishes a continuous handoff: the newest meeting listed in the legacy
archive is 13 May 2026, and the first meeting shown in InteropHub is 10 June
2026. No recurring monthly meeting gap is evident at the system boundary.

## Website model

The future Meetings area should have two clear paths:

1. **Current and upcoming meetings** — a prominent external link to the
   InteropHub meeting-series page, where visitors can see the next meeting,
   navigate previous meetings, and request to join.
2. **Legacy meeting archive** — locally maintained records through 13 May 2026,
   organized by date with available agendas, presentations, and selected public
   notes.

The page should explain that meeting management moved to InteropHub in June
2026. It should not expose implementation details such as numeric meeting IDs
unless linking directly to a particular historical agenda.

## Legacy reconciliation scope

The next inventory batch will cover recurring meetings from June 2023 through
13 May 2026 by matching:

- `Agenda` files
- `Presentation` files
- `Notes` and minutes
- `Recordings` and transcripts
- DokuWiki agenda and presentation entries

For each meeting, record the date, available artifacts, duplicate/version
relationships, privacy, publication status, and gaps. The source files will not
be deleted or reorganized during Phase 1.

## Publication defaults

- Continue hosting cleared legacy agendas and presentations until an approved
  replacement location exists.
- Keep raw attendance, contacts, invitations, chat, and internal notes private.
- Treat recordings and transcripts as private until specifically approved.
- Prefer a short public meeting summary over raw minutes when private or candid
  discussion is mixed with useful outcomes.
- Do not copy current InteropHub agenda content into the website; link to it.
