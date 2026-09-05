# FIS — Temas de RSL (Ingeniería de Software)

Material para definir y validar un tema de **Revisión Sistemática de la Literatura**.

## Contenido

| Archivo | Qué es |
|---------|--------|
| [candidatos-tema-rsl.md](candidatos-tema-rsl.md) | Ejemplos opcionales de temas (no son requisito) |
| Este README | Cómo correr el panel con **cualquier** tema |

## Skill: `rsl-tema-panel`

En este proyecto:

```text
.cursor/skills/rsl-tema-panel/SKILL.md
.cursor/agents/critico-rsl.md
.cursor/agents/defensor-rsl.md
.cursor/agents/impacto-social-rsl.md
.cursor/agents/viabilidad-negocio-rsl.md
```

**Importante:** la skill acepta **cualquier tema** que pases en el chat (título + problemática + objeto).  
Los 5 candidatos del MD son solo ideas de ejemplo; **no** son la única entrada.

El panel lanza 4 agentes en paralelo y devuelve **GO / GO_con_cambios / NO_GO**.

---

## Cómo ejecutar (tema libre — forma principal)

En el chat de Cursor (Agent mode), pega tu tema:

```text
Usa rsl-tema-panel con este tema:

Título: Inteligencia artificial para ...
Problemática: ¿Cómo se han aplicado ...?
Objeto de estudio: Los modelos y técnicas ...
Carrera: Ingeniería de Software
```

Variante corta:

```text
rsl-tema-panel

Título: ...
Problemática: ...
Objeto: ...
```

Si mandas solo `rsl-tema-panel` sin datos, te pedirá título, problemática y objeto. No elige un candidato del MD por ti.

### Atajo opcional (solo si quieres un ejemplo del MD)

```text
Usa rsl-tema-panel sobre el Candidato 3 de candidatos-tema-rsl.md
```

---

## Qué hace al correr

1. Normaliza el tema que **tú** pasaste.
2. Lanza en paralelo: `critico-rsl`, `defensor-rsl`, `impacto-social-rsl`, `viabilidad-negocio-rsl`.
3. Sintetiza veredicto y, si hace falta, una versión afilada del título.

**Un tema por corrida.**

---

## Flujo recomendado

1. Define tu tema (propio o inspirado en [candidatos-tema-rsl.md](candidatos-tema-rsl.md)).
2. Corre `rsl-tema-panel` pegando ese tema.
3. Si sale `GO_con_cambios` o `NO_GO`, ajusta y vuelve a correr.
4. Con un veredicto aceptable, usa esa versión para el revisor.
