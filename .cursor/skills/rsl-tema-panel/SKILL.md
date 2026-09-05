---
name: rsl-tema-panel
description: >-
  Estresa CUALQUIER tema de RSL (no solo candidatos de un MD) con panel de 4
  agentes (crítico, defensor, impacto social, viabilidad empresarial) y emite
  GO / GO_con_cambios / NO_GO. Usar cuando el usuario diga rsl-tema-panel,
  "correr el panel", o pegue título/problemática/objeto de investigación.
---

# Panel de estrés para temas de RSL

## Objetivo

Recibir **cualquier tema** de investigación/RSL (texto libre), lanzar de inmediato 4 agentes en paralelo y sintetizar un veredicto duro.

Los archivos tipo `candidatos-tema-rsl.md` son **opcionales** (atajo si el usuario apunta a un candidato). El caso normal es: el usuario **pasa el tema en el mensaje**.

## Cómo se invoca

### Caso principal — tema libre (preferido)

```text
Usa rsl-tema-panel con este tema:

Título: ...
Problemática: ...
Objeto de estudio: ...
Carrera: Ingeniería de Software
```

También vale:

```text
rsl-tema-panel

Título: ...
Problemática: ...
Objeto: ...
```

### Atajo opcional — desde un MD

Solo si el usuario lo pide explícitamente (p. ej. “Candidato 3 de candidatos-tema-rsl.md”). No asumas que el tema debe salir de ese archivo.

### Sin tema

Si solo dice `rsl-tema-panel` sin datos → pide título, problemática y objeto. **No inventes** un tema ni elijas un candidato del MD por defecto.

## Entrada: normalizar el tema

Acepta texto libre (o, si lo piden, un bloque de un MD) y conviértelo a:

```markdown
## BLOQUE_TEMA
- Título:
- Problemática:
- Objeto de estudio:
- Tópicos (3): (inferir solo si el usuario no los dio; marcar como inferidos)
- Carrera/contexto: (default Ingeniería de Software si no se indica)
- Notas: (rechazos previos, restricciones, opcional)
```

## Procedimiento (obligatorio)

1. Construye `BLOQUE_TEMA` desde lo que el usuario pegó.
2. Lanza **en la misma respuesta, en paralelo**, 4 Task:
   - `subagent_type: critico-rsl`
   - `subagent_type: defensor-rsl`
   - `subagent_type: impacto-social-rsl`
   - `subagent_type: viabilidad-negocio-rsl`
3. Cada Task recibe el **mismo** `BLOQUE_TEMA` + “Evalúa solo este tema. Responde en español con el formato de tu rol.”
4. Espera a los 4. No suavices al crítico.
5. Sintetiza con la plantilla de salida.
6. Si no es GO, reescribe título + problemática + objeto afilados.

**Prohibido:** limitar el panel a los 5 candidatos del MD; elegir un candidato sin que el usuario lo pida; evaluar los 4 roles sin lanzar agentes; mezclar varios temas en una corrida.

## Criterios duros (anti-rechazo)

- ¿RSL/SMS casi idénticas 2023–2026?
- ¿3 tópicos reales o 2 palabras de moda?
- ¿Objeto de RSL vs prototipo empírico disfrazado?
- ¿Corpus: ni vacío ni infinito?
- ¿Alineación con la carrera?
- ¿Aporte en una frase?

## Plantilla de salida

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

## Agentes

| Agente | Rol |
|--------|-----|
| `critico-rsl` | Ataques, saturación, NO_GO |
| `defensor-rsl` | Hueco y contraargumentos |
| `impacto-social-rsl` | Beneficios, ODS, ética |
| `viabilidad-negocio-rsl` | Demanda industrial / transferencia |
