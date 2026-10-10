# IVC-supplied source: Proposed Values.xlsx

This folder keeps the source material that IVC itself supplies to the Contextual Conditions publication, as opposed to material read from an authority's official release. The workbook is committed here so the published output can be rebuilt and audited without depending on anyone's personal storage.

## File

| Field | Value |
| --- | --- |
| File | `Proposed Values.xlsx` |
| SHA-256 | `01eff8c0b58a8fc5a5ed01fd023e1bf41498b3d3256b6765d8d6658ded805b41` |
| Copied into this repository | 2026-10-10 |
| Copied from | Nathan Bunker's working folder for the ImmDS + HALO contextual-conditions work (`Emerging Standards/ImmDS + HALO/ImmDS-CC in HL7 v2/` in AIRA Dropbox). That is a temporary location; this copy is now the reference. |

If the workbook is ever revised, replace the file, update the checksum above, and add a row to the history table below. Do not edit it in place without recording the change.

## Tabs and how they are used

### `US` tab (277 concepts)

A first-pass snapshot of the CDC CDSi coded observations, plus one IVC-supplied column.

- **Not** used as the source of U.S. codes, titles or text. Those come from the CDC CDSi Supporting Data release selected by StepIntoCDSI (see `../../README.md`).
- **Used** for the `Value` column only (`Yes/No` or `Date`). This becomes the IVC-added `expectedValueType` property. CDSi does not publish an answer type, so the publication labels this column as IVC-supplied and never attributes it to CDSi.
- Also used as a baseline for comparison. The validation report lists codes added since this snapshot (currently `280`).
- Some codes (189–191, 263–267, 270–274) are stored as numbers rather than text. The generator re-pads them to three digits for matching.

### `FR` tab (652 concepts)

The Syadem contextual conditions list, with columns `Key`, `English`, `French` and `Type`.

- This is the only source for the Syadem code system.
- **Supplied by:** Syadem (the organization behind MesVaccins), to Nathan Bunker.
- **Authorization:** Syadem authorized publication of the complete list in both languages on the IVC website and asked that it be shared widely so it gains acceptance (confirmed by Nathan Bunker, 2026-10-10). The final licence and attribution wording is still to be confirmed with Syadem.
- **Version:** Syadem has not assigned a formal release version. The publication uses the provisional snapshot identifier `2026-10-10`.
- **Excluded from publication:** two blank rows, three summary count rows at the bottom, and the empty spacer columns D and F.
- **Preserved as supplied:** every value. Anomalies (for example C-1029, duplicate labels, and untranslated English) are flagged in the validation report rather than corrected.

## History

| Date | Change |
| --- | --- |
| 2026-10-10 | Initial copy into the repository for the proof-of-concept publication. |
