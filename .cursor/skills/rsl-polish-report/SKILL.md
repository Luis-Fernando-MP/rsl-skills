---
name: rsl-polish-report
description: >-
  Polishes docs/[short-title]/informe.md with 4 agents and writes
  docs/[short-title]/informe-pulido.md. Use when the user says
  rsl-polish-report. Does not create the report from scratch.
---

# rsl-polish-report

## Goal

Polish an existing `informe.md` via a 4-agent debate and save the result as **`informe-pulido.md`** in the same theme folder. Do not create the informe from scratch.

## Paths (required)

```text
docs/[titulo-breve]/
  topic.md              (optional, from rsl-topic-panel)
  informe.md            (input, from rsl-make-report)
  informe-pulido.md     (output, this skill)
  *.pdf
```

## Invoke

```text
Usa rsl-polish-report sobre docs/ia-pipelines-amenazas/informe.md
```

Or the folder `docs/ia-pipelines-amenazas/`. If omitted → ask for path under `docs/`.

## Critic role

Real contribution, no false claims, no nonsense, correct citations, coherence. Does **not** mean discard the report.

## Writing style (required)

Spanish académico-profesional with connectors; cohesive paragraphs.

## Procedure (required)

1. Read `informe.md` (+ PDFs / `topic.md` in the same folder if useful).
2. Launch in parallel: `critico-rsl`, `defensor-rsl`, `impacto-social-rsl`, `viabilidad-negocio-rsl`.
3. Shared prompt: informe package + “Evalúa/mejora este INFORME. Responde en español con el formato de tu rol.”
4. Brief debate synthesis in chat.
5. Write **`informe-pulido.md`** (do not overwrite `informe.md` unless the user explicitly asks).
6. List main changes and still-missing PDFs.

## Forbidden

- Creating informe from scratch (`rsl-make-report`).
- Topic-only panel without informe (`rsl-topic-panel`).
- Dropping UTP section structure.
- Saving outside `docs/[titulo-breve]/`.
