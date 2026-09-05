# Candidatos de tema RSL — Ingeniería de Software

Fecha: 2026-09-04  
Carrera: Ingeniería de Software  
Tipo: Revisión Sistemática de la Literatura (RSL)  
Nota: Se descarta el eje saturado *IA + huaicos/El Niño* salvo que se afilie mucho; estos 5 candidatos pivotan a temas más defendibles.

Método: cada tema une **3 tópicos** (dominio + tecnología SE/IA + ángulo diferenciador).

---

## Cómo estresar un tema (tú corres el panel)

La skill `rsl-tema-panel` acepta **cualquier tema**, no solo estos 5.

Forma principal — pega tu tema en el chat:

```text
Usa rsl-tema-panel con este tema:

Título: ...
Problemática: ...
Objeto de estudio: ...
```

Atajo opcional si quieres uno de estos ejemplos:

```text
Usa rsl-tema-panel sobre el Candidato N de candidatos-tema-rsl.md
```

Detalle: [README.md](README.md).

---

## Candidato 1 — Seguridad del código con GenAI

**Tópicos:** ciberseguridad · LLM / asistentes de código · vulnerabilidades / calidad segura

**Título:**  
Inteligencia artificial generativa y vulnerabilidades de seguridad en el código de software: una revisión sistemática de la literatura

**Problemática:**  
¿Qué tipos de vulnerabilidades introduce, propaga o ayuda a detectar el código generado o asistido por inteligencia artificial, y con qué métodos se evalúa su seguridad?

**Objeto de estudio:**  
Evidencia empírica, taxonomías de fallas y técnicas de detección/mitigación aplicadas a código generado o asistido por LLM (p. ej. Copilot, ChatGPT y equivalentes).

**Aporte esperado:**  
Mapa de vulnerabilidades recurrentes, benchmarks usados, límites de SAST/LLM y agenda de investigación para calidad segura en Ingeniería de Software.

---

## Candidato 2 — Green Software + GenAI

**Tópicos:** sostenibilidad · IA generativa en desarrollo · métricas energéticas

**Título:**  
Consumo energético y sostenibilidad del uso de inteligencia artificial generativa en el desarrollo de software: una revisión sistemática de la literatura

**Problemática:**  
¿Cómo se mide, reporta y reduce el impacto energético y ambiental de herramientas de IA generativa en el ciclo de vida del desarrollo de software?

**Objeto de estudio:**  
Métricas, herramientas, prácticas y evidencias empíricas sobre huella energética/carbono de GenAI aplicada a ingeniería de software (asistentes, entrenamiento/inferencia en flujos de desarrollo).

**Aporte esperado:**  
Taxonomía de métricas Green SE/Green AI en contexto GenAI-desarrollo, brechas de medición y buenas prácticas reportadas.

---

## Candidato 3 — Salud mental + calidad de software con IA

**Tópicos:** salud mental digital · apps/chatbots con IA · calidad, seguridad y riesgos del software

**Título:**  
Calidad, seguridad y riesgos de aplicaciones de inteligencia artificial para el apoyo en salud mental: una revisión sistemática de la literatura

**Problemática:**  
¿Cómo se evalúan la calidad, la seguridad, la eficacia y los riesgos éticos/técnicos del software basado en IA destinado al apoyo en salud mental?

**Objeto de estudio:**  
Criterios de evaluación, arquitecturas, controles de riesgo y evidencia sobre aplicaciones y chatbots de salud mental con IA (privacidad, manejo de crisis, sesgos, confiabilidad).

**Aporte esperado:**  
Marco de calidad de software para salud mental con IA y mapa de riesgos/vacíos regulatorios y técnicos.

---

## Candidato 4 — GenAI en DevOps (más allá del código)

**Tópicos:** DevOps / MLOps · IA generativa · build / deploy / operate / monitor

**Título:**  
Inteligencia artificial generativa aplicada a las fases de construcción, despliegue y operación de software: una revisión sistemática de la literatura

**Problemática:**  
¿Cómo se ha utilizado la IA generativa más allá de la escritura de código (CI/CD, infraestructura como código, monitoreo, gestión de incidentes) y qué evidencia de efectividad existe?

**Objeto de estudio:**  
Aplicaciones, herramientas y resultados reportados de GenAI en las fases build, release, deploy, operate y monitor del ciclo de vida del software.

**Aporte esperado:**  
Síntesis del “lado derecho” del ciclo SE (subrepresentado frente a code generation), métricas usadas y huecos para MLOps/DevOps.

---

## Candidato 5 — Inclusión cognitiva / neurodivergencia

**Tópicos:** discapacidad cognitiva / neurodivergencia · IA · diseño y evaluación de software

**Título:**  
Inteligencia artificial para el diseño y evaluación de software inclusivo orientado a personas con discapacidad cognitiva y neurodivergencia: una revisión sistemática de la literatura

**Problemática:**  
¿Cómo se han aplicado técnicas de IA en el diseño, adaptación y evaluación de software para mejorar la inclusión digital de personas con discapacidad cognitiva y neurodivergencia, y qué vacíos metodológicos persisten?

**Objeto de estudio:**  
Modelos y prácticas de IA en desarrollo/evaluación de sistemas (interfaces adaptativas, personalización, soporte cognitivo, pruebas de usabilidad/accesibilidad) dirigidos a usuarios con discapacidad cognitiva o neurodivergencia.

**Aporte esperado:**  
Taxonomía por tipo de discapacidad cognitiva, técnica de IA, fase SE y métricas; contraste frente al sesgo de la literatura hacia discapacidad visual.

---

## Tema descartado / de alto riesgo (referencia)

**Título típico:** Inteligencia artificial para la predicción y alerta temprana de huaicos en el Perú: una RSL  

**Riesgo:** saturación de RSL globales sobre IA + desastres / landslides / debris flows. Solo viable con ángulo muy afilado (SAT como sistema de software, Andes/datos escasos, o XAI operativo).

---

## Uso del panel de estrés

- Skill: `~/.cursor/skills/rsl-tema-panel/SKILL.md`
- Agentes: `critico-rsl`, `defensor-rsl`, `impacto-social-rsl`, `viabilidad-negocio-rsl` en `~/.cursor/agents/`

Tras **tu** ejecución del panel, anota aquí el veredicto:

| Candidato | Veredicto | Fecha | Notas |
|-----------|-----------|-------|-------|
| (elegido) | GO / GO_con_cambios / NO_GO | | |
