# Contextual Conditions publication (proof of concept)

This folder builds the Contextual Conditions pages and files published under `docs/contextual-conditions/`, which is served at `https://ivci.org/contextual-conditions/`. The planning background is in `discussion/contextual-conditions-canonical-publication-plan.md`.

**Status: proof of concept.** The pages are public but not linked from the main site, and they carry `noindex`. Every page shows a proof-of-concept banner.

## What is published

```text
docs/contextual-conditions/
  index.html                      overview, namespace, governance roles, property definitions, open decisions
  cc.css                          styles for these pages (extends site.css)
  usa/index.html                  country namespace page
  usa/cdc-cdsi/index.html         canonical page: https://ivci.org/contextual-conditions/usa/cdc-cdsi
  usa/cdc-cdsi/4.65/              versioned release files (never changed once published)
  usa/cdc-cdsi/current/           copy of the current release files
  fra/index.html
  fra/syadem/index.html           canonical page: https://ivci.org/contextual-conditions/fra/syadem
  fra/syadem/2026-10-10/
  fra/syadem/current/
```

Each release folder contains:

- `CodeSystem-<country>-<authority>.json`: a FHIR R4 CodeSystem
- `concepts.csv`: every meaningful source column exactly as supplied, plus clearly labelled IVC columns
- `provenance.json`: source identity, checksums and generator version
- `validation-report.html`: the automated QA results

## Inputs

| Input | Used for |
| --- | --- |
| StepIntoCDSI (`C:/dev/cdsi/StepIntoCDSI` by default) | The U.S. code system. The generator reads the release named in `cdsi-reference/supporting-data/current-version.yaml`, verifies the ZIP and file checksums against `manifest.yaml`, and reads `normalized/schedules/schedule.json` along with the official Coded Observations workbook (its Conditions, Overview and Change History tabs). It never downloads anything. |
| `sources/ivc-supplied/Proposed Values.xlsx` | The Syadem code system (FR tab) and the U.S. expected value types (US tab). See `sources/ivc-supplied/README.md` for provenance and authorization. |
| `config/code-systems.json` | All IVC-added metadata: canonical paths, versions, roles, descriptions, copyright text, known issues and open decisions. |

## Rebuilding

```powershell
py contextual-conditions/generator/build.py
py contextual-conditions/generator/build.py --stepintocdsi D:/path/to/StepIntoCDSI
```

This requires `openpyxl` and `PyYAML`. The build regenerates the configured version folder, `current/` and the HTML pages. Earlier version folders are left untouched. When StepIntoCDSI moves to a new CDSi release, update `version` in the config to match; the build stops if they disagree. The release-history table on each canonical page only lists the current version so far.

## Not yet done

- FHIR validator run (plan QA step 7). No standalone validator CLI is installed on this machine.
- Named release approver (QA step 11).
- FHIR XML, NPM package, ValueSets, ConceptMaps and a crosswalk.
