---
name: rsl-polish-paper
description: >-
  Polishes docs/[short-title]/paper.md with 4 agents and writes paper-polish.md
  (tema/problemática-pregunta/objetivo + secciones Contexto…Organización + refs
  APA 7) and paper-debate.md. Use when the user says rsl-polish-paper.
---

# rsl-polish-paper

## Goal

Polish **`paper.md`** via 4-agent debate → **`paper-polish.md`** (limpio) + **`paper-debate.md`** (traza). Do not create from scratch (`rsl-make-paper`). Do not overwrite `paper.md` unless asked.

## Paths

```text
docs/[titulo-breve]/
  paper.md → paper-polish.md + paper-debate.md
  topic/informe* = insumo interno (NUNCA citar en el paper)
```

## Division of labor

| | `paper.md` | `paper-polish.md` |
|---|------------|-------------------|
| Rol | Bodega rica (make se explaya) | Documento limpio, compacto |
| Subsecciones 1.1/2.3 | Permitidas | **Prohibidas** |
| Bloques | Outline numerado | **Exactamente** estos H2 en orden (ver abajo) |
| Extensión | Larga | **Masticado**: lo central; párrafos cortos |

## Fluidez y anti-“texto IA” (required — revisor de forma)

El polish debe **leerse como prosa académica humana**, no como lista de bullets convertidos a párrafos.

| Regla | Detalle |
|-------|---------|
| **Lo central primero** | Por bloque: 1 idea núcleo + evidencia mínima. Cortar listas de matices, acrónimos encadenados y “además / por otro lado / en este sentido” de relleno. |
| **Párrafos cortos** | Ideal **2–4 oraciones** por párrafo. Máx. ~5. Nunca paredes de 8+ líneas. |
| **Contexto** | ~3–5 párrafos. Definir → anclas (1 frase c/u) → tensiones. No volcar todo el estado del arte. |
| **Continuidad** | Cada párrafo abre desde el anterior (conector o eco semántico) y deja gancho al siguiente. El cierre de Contexto prepara El problema; el cierre del Problema prepara Justificación; etc. |
| **Sin eco cíclico** | Chemnad/Perry/Aljedaani: una mención fuerte en Contexto; en Problema/Objetivo solo si aportan avance. |
| **Prohibido “sabor IA”** | Enumeraciones disfrazadas (A; B; C; D), tríos forzados en cada párrafo, guiones largos en serie, verbos genéricos (“se busca abordar”), meta-comentarios. |

En `paper-debate.md`, la sección **Forma / gramática** debe **validar** continuidad y fluidez (pass/fail + 3–5 correcciones). Si falla → reescribir el polish antes de entregar.

## Output template (`paper-polish.md`) — required

```markdown
# [Título de la RSL]

**Tema.** … (enunciado corto)
**Problemática.** ¿…?
**Objetivo.** … (responde a la pregunta; una o dos oraciones)

## Contexto
(3–5 párrafos cortos: definiciones → lo central de las anclas → disputas)

## El problema
(3–4 párrafos: nace de lo anterior → pregunta → vacío → contraste actual/deseada)

## Justificación
(2–4 párrafos: por qué el tema → utilidad/para quién → por qué RSL)

## Objetivo de la RSL
(2–3 párrafos: respuesta a la pregunta → delimitación → ética breve)

## Organización del contenido de la revisión
(1 párrafo)

## Referencias
(3 RSL ancla, APA 7)
```

**Orden fijo:** Contexto → El problema → Justificación → Objetivo de la RSL → Organización → Referencias.  
Sin `### 1.1` / `### 2.3`.

### APA 7

- In-text `(Autor, año)`; DOI solo en Referencias.
- **Prohibido:** ``topic.md``, panel, GO_*, skills, rutas.
- Fronteras Xu/Paiva/Bi: in-text ok; lista final = solo 3 ancla (salvo pedido).

### Problemática = pregunta

Header **Problemática** must be a research **question**. Body may explain *why it arises*; that does not replace the interrogative form.

## Procedure

1. Read `paper.md` + ficha + `topic.md` (internal).
2. Graphify lookup (no refresh).
3. Parallel: `critico-rsl`, `defensor-rsl`, `impacto-social-rsl`, `viabilidad-negocio-rsl`.
4. Prompt: APA 7; problemática-pregunta; bloques ordenados **masticados**; continuidad; **prohibido** sabor lista-IA / topic.md.
5. Síntesis breve en chat.
6. Write `paper-debate.md` (Mermaid + turnos + **Forma/gramática pass-fail**).
7. Write `paper-polish.md`. Si el revisor de forma falla → reescribir hasta pass.
8. List changes; PDF/Graphify gaps.

## Forbidden

- Remake from scratch; overwrite paper.md/informe/topic sin pedido.
- Subsecciones tipo 1.1 en polish; omitir alguno de los 5 H2 de contenido.
- Problemática afirmativa (debe ser ¿…?).
- Párrafos-pared o Contexto que vuelque todo el estado del arte.
- Debate crudo dentro de paper-polish.md.
- Inventar DOI; refresh Graphify sin pedido.
