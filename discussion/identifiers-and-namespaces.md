# IVC Identifiers and Namespaces

**Status: proposal for discussion by the IVC group.** Nothing here is final.
Points still open are listed at the end.

## Purpose

IVC documents and organizes the coding concepts and resources that already
exist in immunization, across countries. That work goes beyond vaccine codes:
it includes other kinds of coded concepts, such as the Contextual Conditions
used by immunization decision support.

To refer to these resources consistently, especially in messages, each one
needs an identifier that is unique, stable, and easy to read. This proposal
sets one general rule for those identifiers, so that each new kind of concept
does not need its own naming scheme.

## The rule

```text
https://ivci.org/{concept-name}/{jurisdiction}/{local-id}
```

For example:

```text
https://ivci.org/contextual-conditions/usa/cdc-cdsi
https://ivci.org/contextual-conditions/fra/syadem
```

| Segment | What it identifies | Rules |
|---|---|---|
| `concept-name` | The kind of concept, such as `contextual-conditions` | Approved by IVC. Lowercase, hyphenated, a plural noun, neither cryptic nor too long. |
| `jurisdiction` | The jurisdiction whose resources are being named | The ISO 3166-1 alpha-3 country code in lowercase, such as `usa` or `fra`. |
| `local-id` | One resource within that jurisdiction, such as one code system | Assigned by IVC. Lowercase and hyphenated; usually recognizable from the organization or effort it identifies. |

The full URL identifies the resource itself, such as the code system named in
an exchanged coded value. It is not only a link to an explanatory page, though
it resolves to one.

## The jurisdiction scopes names; it does not imply endorsement

The jurisdiction segment is a naming boundary only. `fra/syadem` does not mean
the French government wrote, endorsed, or published that resource, and
`usa/cdc-cdsi` does not mean CDC asked IVC to publish its codes. Each
jurisdiction's landing page says so.

Names within a jurisdiction are not chosen by that jurisdiction's government.
They are chosen by IVC participants familiar with the situation there, who can
name efforts clearly and tell similar efforts apart. A readable jurisdiction
segment also helps a reader see the likely policy context, even when the
`local-id` is unfamiliar.

## Assignment and stability

- IVC assigns `concept-name` and `local-id` values, so that every identifier is
  unique and readable in messages.
- An identifier, once published, is permanent. It is never reassigned to a
  different resource, and a code within a resource is never reused for a
  different meaning.
- A resource may go out of use. Its identifier still resolves, and its page
  says that it is retired.
- The identifier stays the same across versions. Versions are published
  beneath or alongside it and are linked from it.

## What this proposal does not do

- It does not define the meaning of any concept. Meaning belongs to the
  authority that defines the resource; IVC documents and organizes it.
- It does not propose mappings between resources. Mappings, such as between
  similar Contextual Conditions from different authorities, or in the way NUVA
  relates vaccine codes, are a likely future need, and IVC may be a good home
  for them and for the expertise to make them systematic. They are not a first
  step.

## Open questions

1. **Jurisdictions other than countries.** How to name a regional (such as
   European), international, or subnational jurisdiction is to be decided when
   the first such resource needs it.
2. **NUVA.** NUVA is published today at `https://ivci.org/nuva/`. Whether, and
   how, NUVA should be given an identifier under this rule is open.
3. **What a stable identifier requires in practice:** the content a resolving
   page and its versioned releases must carry, and how the identifier is
   represented in FHIR and HL7 v2. The
   [Contextual Conditions publication plan](contextual-conditions-canonical-publication-plan.md)
   has a first draft of these requirements for one kind of concept.
