---
name: rsl-make-report
description: >-
  Builds a UTP RSL report under docs/[datetime - short-title]/informe.md from
  a free topic: keywords ES/EN, up to 3 SLRs or Scopus queries, sections 4–7,
  UTP lines and competencies. Use when the user says rsl-make-report or asks to
  create the RSL informe. Does not run the 4-agent polish debate.
---

# rsl-make-report

## Goal

Receive a research topic and write **one** polished UTP informe in a dedicated folder. Single proposer flow. Do **not** call the 4 debate agents (`rsl-polish-report`). Do **not** mix with `rsl-topic-panel`.

## Output path (required)

Everything for this investigation goes inside:

```text
docs/[YYYY-MM-DD HHMM - titulo-breve]/informe.md
```

Examples:

```text
docs/2026-09-04 2115 - ia-pipelines-amenazas/informe.md
docs/2026-09-04 2115 - ia-pipelines-amenazas/autor-2024-slr.pdf
```

Rules for the folder name:

- `YYYY-MM-DD HHMM` = local datetime when creating the report (24h).
- `titulo-breve` = 3–6 words, lowercase, hyphenated, no accents if awkward, no `/`.
- Create the folder if missing.
- Put downloaded/attached SLR PDFs **in the same folder** (not only root `rsls/`).

## Invoke

```text
Usa rsl-make-report

Título: ...
Problemática: ...
Objeto de estudio: ...
Carrera: Ingeniería de Software
```

No topic → ask for title, problem, object. Do not invent a topic.

## Writing style (required)

Spanish **académico-profesional**: conectores (además, en consecuencia, no obstante, en ese sentido, asimismo, por tanto), párrafos cohesionados, sin tono coloquial ni relleno. Secciones 4–6 en prosa fluida; tablas solo donde la plantilla lo pide.

## Project sources

- UTP lines: `global/lineas-utp.md`
- Competencies: `global/competencias.md`

## Procedure (required)

1. Normalize title, problemática, objeto (light sharpening OK; keep user domain).
2. Create `docs/[YYYY-MM-DD HHMM - slug]/` and write `informe.md` there.
3. **Keywords**: table `| Español | Inglés |` (Scopus/IEEE/WoS-grade). **Always** include a Scopus keyword query.
4. **Up to 3 SLRs** (systematic / scoping / mapping review only).
   - Prefer OA, ≤ 5 years.
   - Table: `| Referencia (APA) | DOI / URL | Razón |`
   - If you find 1–2 → add them. User may download PDFs into **this same folder**.
   - If fewer than 3 → do not block: add **Scopus queries** in the informe; placeholders `Pendiente — query N` OK.
   - Never invent DOI/PDF. Always keep keywords + query.
5. **Section 4** (≤ 300 words): estado del conocimiento + necesidad de nueva RSL (cite found SLRs; if missing, note enrichment when PDFs arrive).
6. **Section 5**: 1–2 lines from `global/lineas-utp.md` for Software Engineering + polished justification paragraph.
7. **Section 6**: 2–4 competencies from `global/competencias.md` + polished justification.
8. **Section 7**: sharper tentative title.
9. In chat: full path to `informe.md`, SLRs found, queries for missing ones, PDFs present vs pending in that folder.

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

- Writing `ficha_NNN.md` at repo root.
- Launching the 4 polish agents.
- Creating an informe without a user topic.
- Inventing DOI/SLR/PDF.
- Omitting keywords/query because SLRs are missing.
- Colloquial or telegraphic prose in narrative sections.
