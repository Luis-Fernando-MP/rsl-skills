---
name: rsl-topic-panel
description: >-
  Stress-tests any RSL research topic with 4 agents and writes
  docs/[short-title]/topic.md with GO / GO_with_changes / NO_GO. Use when the
  user says rsl-topic-panel or pastes title/problem/object for stress-testing.
---

# rsl-topic-panel

## Goal

Receive **any** research topic, launch 4 agents in parallel, synthesize a hard verdict, and **save** it under `docs/`.

## Output path (required)

```text
docs/[titulo-breve]/topic.md
```

Example: `docs/ia-pipelines-amenazas/topic.md`

Slug rules: 3–6 words from the topic, lowercase, hyphenated, no `/`. Same folder is reused later by `rsl-make-report` / `rsl-polish-report` for the same theme.

## Invoke

```text
Usa rsl-topic-panel con este tema:

Título: ...
Problemática: ...
Objeto de estudio: ...
Carrera: Ingeniería de Software
```

If no topic → ask for title, problem, object. Do not invent a topic.

## Normalize

```markdown
## BLOQUE_TEMA
- Título:
- Problemática:
- Objeto de estudio:
- Tópicos (3): (infer only if missing; mark as inferred)
- Carrera/contexto: (default Ingeniería de Software)
- Notas: (optional)
```

## Procedure (required)

1. Build `BLOQUE_TEMA` and choose `docs/[titulo-breve]/`.
2. Launch in parallel:
   - `subagent_type: critico-rsl`
   - `subagent_type: defensor-rsl`
   - `subagent_type: impacto-social-rsl`
   - `subagent_type: viabilidad-negocio-rsl`
3. Each Task gets the same `BLOQUE_TEMA` + “Evalúa solo este tema. Responde en español con el formato de tu rol.”
4. Synthesize in Spanish with the output template.
5. Write `docs/[titulo-breve]/topic.md` (create folder if needed).
6. In chat: path to `topic.md` + brief verdict.

**Forbidden:** MD-only candidates by default; skipping the file write; writing `informe.md` here (`rsl-make-report`).

## Output template (`topic.md`)

```markdown
# Veredicto del panel — [título corto]

## BLOQUE_TEMA
- Título:
- Problemática:
- Objeto de estudio:
- Tópicos (3):
- Carrera/contexto:

## Veredicto global
GO | GO_con_cambios | NO_GO
Riesgo de rechazo: alto | medio | bajo

## Ataques del crítico
- ...

## Defensa
- ...

## Impacto social
- ...

## Viabilidad empresarial
- ...

## Versión afilada recomendada
- Título:
- Problemática:
- Objeto:

## 5 mejoras mínimas antes de presentar
1. ...
```
