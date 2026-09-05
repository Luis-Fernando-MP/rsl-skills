---
name: rsl-make-paper
description: >-
  Builds docs/[short-title]/paper.md — full academic Introduction for the RSL
  (context, definitions, evidence state of the art, problem, justification,
  objective, organization). Uses topic.md, ficha/informe, Graphify theme memory
  and RSL/MD. Use when the user says rsl-make-paper. Does NOT launch the 4-agent
  debate (that is rsl-polish-paper).
---

# rsl-make-paper

## Goal

Write a complete **Introducción** of the RSL paper as `paper.md` in the theme folder. Single proposer flow (draft listo para pulir). Do **not** launch `critico-rsl` / `defensor-rsl` / `impacto-social-rsl` / `viabilidad-negocio-rsl` here — that is **`rsl-polish-paper`**.

## Output path (required)

```text
docs/[titulo-breve]/
  topic.md                 (from rsl-topic-panel — debate + consenso)
  ficha.md                 (optional alias; see Inputs)
  informe.md               (from rsl-make-report)
  informe-polish.md        (from rsl-polish-report — preferred ficha)
  paper.md                 (THIS skill)
  RSL/PDF/  RSL/MD/        (SLR corpus)
  graphify-out/            (theme memory — lookup only)
```

Same theme → **reuse** the existing folder. Slug: 3–6 words, lowercase, hyphenated.

## Inputs (required package)

Resolve in this order; **ask** if the theme folder is missing:

| Input | Role |
|-------|------|
| `topic.md` | Debate 4 agentes, veredicto, tema final, exclusiones |
| **Ficha** | Prefer `informe-polish.md` → else `informe.md` → else `ficha.md` (user may attach `ficha.md`) |
| Graphify | `graphify query … --graph docs/[tema]/graphify-out/graph.json` |
| `RSL/MD/*.md` | Locators + texto indexable (prefer over raw PDF) |
| User attachments | Extra PDF/MD of SLRs the user found — if PDF, place under `RSL/PDF/` (do not leave in theme root); suggest `graphify-theme` if new files need indexing |

Never invent DOI/findings. Cite only what topic/ficha/Graphify/MD support.

## Invoke

```text
Usa rsl-make-paper sobre docs/ia-inclusion-cognitiva-software/
```

```text
Usa rsl-make-paper
(adjunto topic + ficha/informe + PDFs/MD de las RSL)
```

## Writing style (required)

Spanish **académico-profesional**; connectors; cohesive paragraphs; APA in-text where DOI exists. No colloquial tone. Tables only if they clarify frontiers (optional, short).

## Procedure (required)

1. Resolve `docs/[titulo-breve]/`. Prefer folder of existing `topic.md` / `informe.md`.
2. Read **ficha** (`informe-polish.md` | `informe.md` | `ficha.md`) + `topic.md` (tema final, GO_*, exclusiones).
3. **Graphify first** (if `graphify-out/graph.json` exists):
   ```bash
   graphify query "<pregunta>" --graph docs/[titulo-breve]/graphify-out/graph.json
   ```
   Prefer `RSL/MD/` chunks via locators `[PDF p.N]`; do **not** dump full PDFs into context. Do **not** run `graphify:theme` / refresh unless the user asks.
4. If Graphify missing or stale and user attached new RSL files → say they should run `Usa graphify-theme sobre docs/[tema]/` before or after; still write `paper.md` from available ficha/topic/MD.
5. Write **`paper.md`** with the **exact section structure** below (Introducción completa).
6. Chat: path, sources used (topic/ficha/graphify/MD), citations, next step:

```text
Usa rsl-polish-paper sobre docs/[titulo-breve]/paper.md
```

## File template (`paper.md`)

```markdown
# Introducción — [Título de la RSL]

## 1. Contexto
### 1.1 Definiciones generales
…

### 1.2 Lo que se sabe del tema hasta la fecha
(Basado en evidencias / citas de las RSL ancla y frontera)

### 1.3 Situación actual y disputas
(Qué se discute / tensiones en la literatura)

## 2. El problema
(Puede articularse desde tendencias, discrepancias y/o vacíos — siempre con evidencia)

### 2.1 Tendencias o nuevas perspectivas
…

### 2.2 Discrepancias existentes
…

### 2.3 Vacíos de conocimiento
…

### 2.4 Contraste: situación actual vs situación deseada
(Qué se propone estudiar; énfasis en el contraste)

## 3. Justificación
### 3.1 Justificación de la elección del tema
…

### 3.2 Utilidad de los resultados de la revisión
(Cómo podrían utilizarse; para qué se escribe)

### 3.3 Necesidad de una RSL
(Por qué revisión sistemática y no otro diseño)

## 4. Objetivo de la RSL
(Unión explícita entre el problema y lo ya hecho para abordarlo — citando fronteras Chemnad/Perry/Aljedaani/… según ficha)

## 5. Organización del contenido de la revisión
(Cómo se organiza el resto del documento / protocolo: secciones previstas de la RSL)
```

Fill every section with real content from the package. Section 1–2 must cite the SLR frontiers from the ficha. Align title/problem/object with `topic.md` final theme when GO_con_cambios / GO.

## Forbidden

- Launching the 4 polish agents.
- Overwriting `informe.md` / `informe-polish.md` / `topic.md`.
- Inventing citations or DOI.
- Dumping full PDFs into chat when Graphify / `RSL/MD` exists.
- Refreshing Graphify unless the user explicitly asks.
- Saving outside `docs/[titulo-breve]/`.
- Naming the output `informe.md` (output is **`paper.md`** only).
