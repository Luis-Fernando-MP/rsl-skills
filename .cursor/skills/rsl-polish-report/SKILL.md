---
name: rsl-polish-report
description: >-
  Polishes an existing RSL informe under docs/[datetime - title]/informe.md by
  running 4 agents in parallel (critic, defender, social impact, business). Use
  when the user says rsl-polish-report or asks to polish/refine the informe.
  Does not create the report from scratch.
---

# rsl-polish-report

## Goal

Polish an informe already created by `rsl-make-report` via a 4-agent debate. Do not invent the topic or create the informe from scratch. Do not mix with `rsl-topic-panel`.

## Invoke

```text
Usa rsl-polish-report sobre docs/2026-09-04 2115 - ia-pipelines-amenazas/informe.md
```

Or point to the folder: `docs/.../`. If omitted → ask for path under `docs/`.

## Paths

Work only inside:

```text
docs/[YYYY-MM-DD HHMM - titulo-breve]/
  informe.md
  *.pdf   (SLRs del caso)
```

Backup before rewrite: `informe.bak.md` in the **same** folder.

## Critic role here

Watch for: real contribution, nothing false, no nonsense, correct citations, coherence.  
Does **not** mean discard the report — improve it.

## Writing style (required)

Spanish académico-profesional with connectors; cohesive paragraphs; keep tables where the template requires them.

## Procedure (required)

1. Read `informe.md` (and PDFs in the same folder if present).
2. Pack context: full informe + SLR/DOI list + PDF notes.
3. Launch in parallel:
   - `subagent_type: critico-rsl`
   - `subagent_type: defensor-rsl`
   - `subagent_type: impacto-social-rsl`
   - `subagent_type: viabilidad-negocio-rsl`
4. Shared prompt: informe package + “Evalúa/mejora este INFORME. Responde en español con el formato de tu rol. Crítico: citas, coherencia, aporte falso/vacío.”
5. Brief debate synthesis in chat.
6. Write `informe.bak.md`, then rewrite `informe.md` (same sections; ≤300 words in section 4; polished prose).
7. List main changes and still-missing PDFs in that folder.

## Forbidden

- Creating an informe from scratch (`rsl-make-report`).
- Topic-only stress test (`rsl-topic-panel`).
- Dropping UTP section structure.
- Saving outside `docs/[fecha hora - titulo]/`.
