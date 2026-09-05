# FIS — Skills RSL

Nomenclatura: `rsl-*` (inglés).

| Skill | Qué hace |
|-------|----------|
| `rsl-topic-panel` | Estresa un tema con 4 agentes. No escribe informe. |
| `rsl-make-report` | Recibe un tema y crea `docs/[fecha hora - título]/informe.md`. |
| `rsl-polish-report` | Pule un `informe.md` existente con 4 agentes. |

Agentes: `.cursor/agents/`

Salida de informes:

```text
docs/[YYYY-MM-DD HHMM - titulo-breve]/informe.md
```

---

## Cómo ejecutar

### Estresar tema (opcional)

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

Si faltan RSL: keywords + queries Scopus en el informe; adjunta PDF en la misma carpeta `docs/.../`.

### Pulir informe

```text
Usa rsl-polish-report sobre docs/YYYY-MM-DD HHMM - titulo-breve/informe.md
```

---

## Orden

`rsl-topic-panel` (opcional) → `rsl-make-report` → adjuntar PDFs → `rsl-polish-report`
