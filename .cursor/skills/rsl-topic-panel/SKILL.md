---
name: rsl-topic-panel
description: >-
  Stress-tests any RSL research topic with 4 agents (critic, defender, social
  impact, business) and returns GO / GO_with_changes / NO_GO. Use when the user
  says rsl-topic-panel, runs the topic panel, or pastes title/problem/object
  for stress-testing. Does not write the UTP ficha.
---

# rsl-topic-panel

## Goal

Receive **any** research topic, launch 4 agents in parallel, synthesize a hard verdict. Optional MD candidate files are only an shortcut if the user points to them.

## Invoke

```text
Usa rsl-topic-panel con este tema:

Título: ...
Problemática: ...
Objeto de estudio: ...
Carrera: Ingeniería de Software
```

If only `rsl-topic-panel` with no topic → ask for title, problem, object. Do not invent a topic.

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

1. Build `BLOQUE_TEMA`.
2. In the same response, launch 4 Task calls in parallel:
   - `subagent_type: critico-rsl`
   - `subagent_type: defensor-rsl`
   - `subagent_type: impacto-social-rsl`
   - `subagent_type: viabilidad-negocio-rsl`
3. Each Task gets the same `BLOQUE_TEMA` + “Evalúa solo este tema. Responde en español con el formato de tu rol.”
4. Synthesize in Spanish with the output template.
5. If not GO, rewrite title + problemática + objeto.

**Forbidden:** limiting to MD candidates; evaluating all 4 roles without launching agents; mixing several topics in one run; writing `ficha_NNN.md` (that is `rsl-make-report`).

## Hard criteria

- Near-identical SLR/SMS 2023–2026?
- Real 3 topics or buzzword pair?
- SLR object vs empirical prototype disguised?
- Corpus neither empty nor infinite?
- Career alignment?
- One-sentence contribution?

## Output template

```markdown
# Veredicto del panel — [título corto]

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
