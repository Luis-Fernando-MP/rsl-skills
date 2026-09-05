# FIS — Skills RSL + Graphify

Nomenclatura skills: `rsl-*` / `graphify-*` (inglés).

## Skills RSL

| Skill | Qué hace | Salida |
|-------|----------|--------|
| `rsl-topic-panel` | Estresa un tema (4 agentes + debate Mermaid + consenso) | `docs/[titulo-breve]/topic.md` |
| `rsl-make-report` | Genera el informe UTP (7 puntos) | `docs/[titulo-breve]/informe.md` |
| `rsl-polish-report` | Pule el informe (4 agentes) | `docs/[titulo-breve]/informe-pulido.md` |

## Skills Graphify (memoria — **tú** las ejecutas)

Los agentes `rsl-*` **no** regeneran Graphify solos. Tú invocas la skill cuando quieras actualizar la memoria.

| Skill | Qué hace | Salida |
|-------|----------|--------|
| `graphify-root` | Crea/actualiza el grafo del **repo** | `graphify-out/` |
| `graphify-theme` | Crea/actualiza el grafo de **un tema** | `docs/[titulo-breve]/graphify-out/` |

Mismo tema → **misma carpeta**:

```text
docs/[titulo-breve]/
  topic.md
  informe.md
  informe-pulido.md
  RSL/
    PDF/          ← PDFs de las RSL (no junto a los .md)
    MD/           ← opcional (conversión PDF→MD para menos tokens)
  graphify-out/   ← memoria Graphify del tema
```

Root (proyecto):

```text
graphify-out/     ← memoria Graphify del repo (skills, global/, README…)
```

Agentes: `.cursor/agents/`

---

## Cómo ejecutar

### Estresar tema

```text
Usa rsl-topic-panel con este tema:

Título: ...
Problemática: ...
Objeto de estudio: ...
```

### Crear informe

```text
Usa rsl-make-report

Título: ...
Problemática: ...
Objeto de estudio: ...
Carrera: Ingeniería de Software
```

(o sobre `docs/[titulo-breve]/` si ya existe `topic.md`)

### Pulir informe

```text
Usa rsl-polish-report sobre docs/[titulo-breve]/informe.md
```

### Memoria Graphify — root

```text
Usa graphify-root
```

```bash
npm run graphify:refresh
```

### Memoria Graphify — tema

```text
Usa graphify-theme sobre docs/ia-inclusion-cognitiva-software/
```

```bash
npm run graphify:theme -- ia-inclusion-cognitiva-software
```

Consulta tema (después de indexar):

```bash
graphify query "métricas de evaluación" --graph docs/ia-inclusion-cognitiva-software/graphify-out/graph.json
```

---

## Orden sugerido

`rsl-topic-panel` → `rsl-make-report` → PDFs en `RSL/PDF/` → **`graphify-theme`** → `rsl-polish-report`  
(y de vez en cuando **`graphify-root`** si cambias skills / `global/`)

## Requisitos Graphify

```bash
pipx install graphifyy
pipx ensurepath && hash -r
graphify install --platform cursor
```
