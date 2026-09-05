---
name: rsl-make-report
description: >-
  Builds a UTP RSL report at docs/[short-title]/informe.md from a free topic
  (reuse the same folder as topic.md if the theme matches). Keywords, up to 3
  SLRs or Scopus queries, sections 4–7, UTP lines and competencies. Use when
  the user says rsl-make-report. Does not run the 4-agent polish debate.
---

# rsl-make-report

## Goal

Receive a research topic and write a polished UTP `informe.md` in the theme folder. Single proposer flow. Do **not** call `rsl-polish-report` agents here. Do **not** mix with `rsl-topic-panel` logic beyond reusing the folder.

## Output path (required)

```text
docs/[titulo-breve]/informe.md
```

Same theme as an existing panel → **reuse** that folder (where `topic.md` already lives):

```text
docs/ia-pipelines-amenazas/
  topic.md          (from rsl-topic-panel)
  informe.md        (this skill)
  *.pdf             (SLRs)
```

Slug: 3–6 words, lowercase, hyphenated. If the user points to an existing `docs/.../topic.md`, use that folder. Put SLR PDFs in the **same** folder.

## Invoke

```text
Usa rsl-make-report

Título: ...
Problemática: ...
Objeto de estudio: ...
Carrera: Ingeniería de Software
```

Or: `Usa rsl-make-report sobre docs/ia-pipelines-amenazas/` (reuse folder + read `topic.md` if present).

No topic and no folder → ask. Do not invent a topic.

## Writing style (required)

Spanish **académico-profesional** with connectors; cohesive paragraphs; no colloquial tone. Tables only where the template requires them.

## Project sources

- `global/lineas-utp.md`
- `global/competencias.md`
- Optional prior verdict: `docs/[titulo-breve]/topic.md`

## Procedure (required)

1. Resolve folder `docs/[titulo-breve]/` (same theme as `topic.md` if it exists).
2. Normalize title / problemática / objeto (may use afilado from `topic.md` if user agrees or verdict was GO_con_cambios).
3. **Keywords** ES|EN + Scopus query (**always**).
4. **Up to 3 SLRs**; if fewer, add Scopus queries / placeholders. Never invent DOI/PDF.
5. Sections 4–7 (section 4 ≤ 300 words).
6. Write `informe.md` in that folder.
7. Chat: path, SLRs found, queries pending, PDFs present/missing.

## File template (`informe.md`)

```markdown
# Informe RSL — [Título]

## 1. Título / tema de la RSL
...

## 2. Problemática
...

## 3. Objeto de estudio
...

## Keywords

| Español | Inglés |
|---------|--------|
| ... | ... |

**Query Scopus (sugerida):**
\`\`\`
...
\`\`\`

## Artículos de revisión de literatura relacionados (meta: 3)

| Referencia bibliográfica (APA) | DOI / URL | Razón |
|--------------------------------|-----------|-------|
| ... o Pendiente | query / DOI | ... |

**Queries Scopus para completar RSL faltantes:**
\`\`\`
...
\`\`\`

## 4. Estado del conocimiento y necesidad de una nueva RSL
(≤ 300 palabras; prosa profesional)

## 5. Línea(s) de investigación UTP
...

## 6. Competencias de la carrera
...

## 7. Título tentativo de la RSL
...
```

## Forbidden

- Datetime folders; root `ficha_NNN.md`.
- Launching polish agents.
- Omitting keywords/query when SLRs are missing.
- Colloquial prose in narrative sections.
