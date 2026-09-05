---
name: rsl-polish-paper
description: >-
  Polishes docs/[short-title]/paper.md with 4 agents (critic, defender, social
  impact, business) and writes docs/[short-title]/paper-polish.md. Uses
  Graphify theme lookup to save tokens. Use when the user says rsl-polish-paper.
  Does not create paper.md from scratch (that is rsl-make-paper).
---

# rsl-polish-paper

## Goal

Polish an existing **`paper.md`** (Introducción RSL) via a 4-agent debate and save **`paper-polish.md`** in the same theme folder. Do not create the introduction from scratch.

## Paths (required)

```text
docs/[titulo-breve]/
  topic.md              (optional context)
  informe.md / informe-polish.md / ficha.md   (ficha UTP)
  paper.md              (input — from rsl-make-paper)
  paper-polish.md       (output — this skill)
  RSL/PDF/  RSL/MD/
  graphify-out/         (lookup only)
```

Preserve the **Introducción** structure from `rsl-make-paper` (sections 1–5 with subsections). Do not flatten into unrelated headings.

## Invoke

```text
Usa rsl-polish-paper sobre docs/ia-inclusion-cognitiva-software/paper.md
```

Or the folder `docs/ia-inclusion-cognitiva-software/`. If omitted → ask for path under `docs/`.

## Critic role

Real contribution, no false claims, no nonsense, correct citations, coherence with topic/ficha frontiers. Does **not** mean discard the paper.

## Writing style (required)

Spanish académico-profesional with connectors; cohesive paragraphs; APA citations consistent with ficha.

## Procedure (required)

1. Read `paper.md` + ficha (`informe-polish.md` | `informe.md` | `ficha.md`) + `topic.md` if present.
2. **Graphify lookup** (do not refresh):
   ```bash
   graphify query "<claim or frontier>" --graph docs/[titulo-breve]/graphify-out/graph.json
   ```
   Prefer `RSL/MD/` via locators; avoid loading full PDFs.
3. Launch in parallel: `critico-rsl`, `defensor-rsl`, `impacto-social-rsl`, `viabilidad-negocio-rsl`.
4. Shared prompt: paper package (paper.md summary + frontiers from ficha + graphify hits) +  
   “Evalúa/mejora esta INTRODUCCIÓN (paper.md) de la RSL. Responde en español con el formato de tu rol. Exige citas reales, coherencia con topic/ficha, y que problema/justificación/objetivo estén unidos.”
5. Brief debate synthesis in chat.
6. Write **`paper-polish.md`** (do not overwrite `paper.md` unless the user explicitly asks). Keep the same section tree (1 Contexto … 5 Organización).
7. List main changes; note missing PDFs / Graphify gaps.

## Forbidden

- Creating `paper.md` from scratch (`rsl-make-paper`).
- Overwriting `informe*.md` / `topic.md`.
- Dropping the Introducción structure.
- Refreshing Graphify unless the user asks.
- Dumping full PDFs when Graphify/`RSL/MD` exists.
- Saving outside `docs/[titulo-breve]/`.
