# FIS — Skills RSL

Nomenclatura: `rsl-*` (inglés).

| Skill | Qué hace | Salida |
|-------|----------|--------|
| `rsl-topic-panel` | Estresa un tema (4 agentes + debate Mermaid + consenso) | `docs/[titulo-breve]/topic.md` |
| `rsl-make-report` | Genera el informe UTP | `docs/[titulo-breve]/informe.md` |
| `rsl-polish-report` | Pule el informe (4 agentes) | `docs/[titulo-breve]/informe-pulido.md` |

Mismo tema → **misma carpeta** (`topic.md`, `informe.md`, `informe-pulido.md`, PDFs).

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

---

## Orden

`rsl-topic-panel` → `rsl-make-report` → adjuntar PDFs → `rsl-polish-report`
