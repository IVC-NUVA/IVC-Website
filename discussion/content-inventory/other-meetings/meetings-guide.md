# IVC Events & Meetings Tracking Guide

This guide establishes the editorial policies, categorization schema, maintenance workflow, and data architecture for tracking global and regional meetings relevant to the **Immunization Vocabularies Collaboration (IVC)**. It serves as context and documentation for the IVC editorial team and automated site-maintenance agents.

---

## 1. Purpose & Scope

The IVC focuses on global vaccine code systems, cross-mapping frameworks (such as the Unified Nomenclature of Vaccines / NUVA), clinical terminology, and health data exchange standards. The events directory tracks assemblies where these topics are actively developed, debated, standardized, or implemented.

### Inclusion Priorities
* **Core Standards & Terminology:** Working groups, committees, and developer conferences creating or maintaining specifications (HL7 International, HL7 Europe, SNOMED International, LOINC, WHO classifications).
* **Interoperability Testing & Plugathons:** Multi-system connectathons and projectathons where immunization messaging and profiles are tested in practice (IHE-Europe, IHE North America, Pan-Canadian Projectathons).
* **Registry & Implementation Forums:** Public health and immunization registry communities (AIRA, DHIS2, OpenHIE).
* **Cross-Border & Regional Projects:** Funded consortia and regional collaborations addressing digital vaccination credentials or cross-border exchange (EUVABECO, Athens Digital Health Week, PAHO, ZIMAM / GCC initiatives).
* **Broader Vaccine Ecosystem:** Major industry and scientific congresses (World Vaccine Congress) to maintain awareness of clinical trials, vaccine product pipelines, and global policy.

---

## 2. Taxonomy & Categorization

Each meeting entry in `meetings.json` is assigned one primary `category` and zero or more `tags`:

1. `standards-terminology`: Formal standards development and clinical terminologies (e.g., HL7 WGMs, SNOMED CT Expo, LOINC).
2. `testing-connectathon`: Practical multi-system implementation testing (e.g., IHE Connectathon, FHIR Connectathons).
3. `implementation-registry`: Immunization Information Systems (IIS), electronic registries, and public health platforms (e.g., AIRA, DHIS2).
4. `developer-technical`: Hands-on tooling, code development, and engineering workshops (e.g., HL7 FHIR DevDays).
5. `policy-ecosystem`: High-level digital health governance, health economics, or broad vaccine development (e.g., World Vaccine Congress, ADHW).

---

## 3. Data Schema Documentation (`meetings.json`)

The companion file `meetings.json` contains a structured JSON array. Each object adheres to the following specification.

The public page reads `docs/data/meetings-we-follow.json`. When this catalog changes, update that live copy as well.

| Field | Type | Description |
| :--- | :--- | :--- |
| `id` | String | Unique slug identifier (e.g., `mie-2027`, `fhir-devdays-2027`). |
| `name` | String | Official public title of the event. |
| `series` | String | Recurring organization or series name. |
| `category` | String | Primary classification tag from Section 2. |
| `tags` | Array[String] | Faceted search keywords (`fhir`, `snomed`, `iis`, `hybrid`, etc.). |
| `dates` | Object | `start` (ISO YYYY-MM-DD), `end` (ISO YYYY-MM-DD), and human `display`. |
| `location` | Object | `city`, `state_province`, `country`, `country_code` (ISO 3166-1 alpha-2), and `coordinates` (`[latitude, longitude]`). |
| `deadlines` | Object | Key operational cutoffs (`abstracts_due`, `workshops_due`, `early_bird`, `system_registration`). |
| `urls` | Object | `event`, `program`, `registration`, or `call_for_papers`. |
| `ivc_relevance` | String | Specific justification for why the IVC community tracks this event. |
| `status` | String | `confirmed`, `save_the_date`, or `unverified`. |

---

## 4. Maintenance & Automated Workflow

The automated website agent runs scheduled checks against `meetings.json`:

1. **Deadlines & Notification Window:**
   * If `deadlines.abstracts_due` or `deadlines.early_bird` falls within 14–30 days of the current date, the web interface surfaces an "Approaching Deadline" badge.
2. **Post-Event Archiving:**
   * When `dates.end` is past, the front-end automatically shifts the item from the active map/slider to the "Past Events / Proceedings" archive.
3. **Periodic Re-Verification:**
   * Entries marked `save_the_date` or `unverified` are automatically scheduled for calendar scrape checks every 30 days.
