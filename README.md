# FIS — Skills RSL + Graphify

Nomenclatura skills: `rsl-*` / `graphify-*` (inglés).

## Skills RSL

| Skill | Qué hace | Salida |
|-------|----------|--------|
| `rsl-topic-panel` | Estresa un tema (4 agentes + debate Mermaid + consenso) | `docs/[titulo-breve]/topic.md` |
| `rsl-make-report` | Genera el informe UTP (7 puntos) | `docs/[titulo-breve]/informe.md` |
| `rsl-polish-report` | Pule el informe (4 agentes) | `docs/[titulo-breve]/informe-polish.md` |
| `rsl-make-paper` | Genera la **Introducción** del paper (sin agentes) | `docs/[titulo-breve]/paper.md` |
| `rsl-polish-paper` | Pule la Introducción (4 agentes) | `docs/[titulo-breve]/paper-polish.md` |

## Skills Graphify (memoria — **tú** las ejecutas)

Los agentes `rsl-*` **no** regeneran Graphify solos. Tú invocas la skill cuando quieras actualizar la memoria. Las skills de paper **sí consultan** el grafo (`query`) para gastar menos tokens.

| Skill | Qué hace | Salida |
|-------|----------|--------|
| `graphify-root` | Crea/actualiza el grafo del **repo** | `graphify-out/` |
| `graphify-theme` | Crea/actualiza el grafo de **un tema** | `docs/[titulo-breve]/graphify-out/` |

Mismo tema → **misma carpeta**:

```text
docs/[titulo-breve]/
  topic.md
  informe.md
  informe-polish.md
  paper.md
  paper-polish.md
  ficha.md               ← opcional (si la adjuntas; si no, se usa informe-polish/informe)
  RSL/
    PDF/                 ← originales
    MD/                  ← corpus indexable (RAG + headings + locators)
    index-manifest.json  ← traza (no re-lee lo indexado)
  graphify-out/          ← grafo del tema (gitignored)
```

Root (proyecto):

```text
graphify-out/     ← memoria Graphify del repo (skills, global/, README…)
```

Agentes: `.cursor/agents/` (`critico-rsl`, `defensor-rsl`, `impacto-social-rsl`, `viabilidad-negocio-rsl`)

---

## Cómo ejecutar

### Estresar tema

```text
Usa rsl-topic-panel con este tema:

Título: ...
Problemática: ...
Objeto de estudio: ...
```

### Crear informe UTP

```text
Usa rsl-make-report sobre docs/[titulo-breve]/
```

### Pulir informe UTP

```text
Usa rsl-polish-report sobre docs/[titulo-breve]/informe.md
```

### Crear Introducción del paper (sin agentes)

Usa `topic.md` + ficha (`informe-polish.md` / `informe.md` / `ficha.md`) + Graphify + `RSL/MD/`.

```text
Usa rsl-make-paper sobre docs/ia-inclusion-cognitiva-software/
```

Salida: `paper.md` (Contexto, Problema, Justificación, Objetivo, Organización).

### Pulir Introducción del paper (4 agentes)

```text
Usa rsl-polish-paper sobre docs/[titulo-breve]/paper.md
```

Salida: `paper-polish.md`.

### Memoria Graphify — root

```text
Usa graphify-root
```

```bash
npm run graphify:refresh
```

### Memoria Graphify — tema (pipeline A→D)

```text
Usa graphify-theme sobre docs/ia-inclusion-cognitiva-software/
```

| Stage | Acción |
|-------|--------|
| **A prepare** | Diff `index-manifest.json` → `pdftotext` + MD estructurado (`##`/`###` + locators). Skip si ya indexado. |
| **B agent-RAG** | Solo si `needs_agent` (PDF ilegible / pocos headings). |
| **C build** | Grafo AST en `graphify-out/`. |
| **D verify** | Gates: ≥8 nodos/paper, queries smoke, informe/topic. |

```bash
npm run graphify:theme -- ia-inclusion-cognitiva-software
npm run graphify:theme:test -- ia-inclusion-cognitiva-software
```

Consulta (después de PASS):

```bash
graphify query "digital accessibility" --graph docs/ia-inclusion-cognitiva-software/graphify-out/graph.json
```

---

## Orden sugerido

```text
rsl-topic-panel
  → rsl-make-report
  → PDFs en RSL/PDF/
  → graphify-theme (PASS)
  → rsl-polish-report
  → rsl-make-paper          ← Introducción (borrador)
  → rsl-polish-paper        ← Introducción debatida
```

(y de vez en cuando **`graphify-root`** si cambias skills / `global/`)

## Requisitos Graphify

```bash
pipx install graphifyy
pipx ensurepath && hash -r
graphify install --platform cursor
```
