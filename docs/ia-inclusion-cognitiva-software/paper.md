# Introducción — Inteligencia artificial en el ciclo de vida del software para accesibilidad cognitiva y neurodivergencia: técnicas, fases de ingeniería y métricas de evaluación — una revisión sistemática de la literatura

## 1. Contexto

### 1.1 Definiciones generales

La accesibilidad digital designa el conjunto de propiedades que permiten a las personas —incluidas aquellas con discapacidad— percibir, operar y comprender productos y servicios digitales. En el ámbito web, las *Web Content Accessibility Guidelines* (WCAG) constituyen el marco de referencia dominante para requisitos verificables de conformidad (W3C). En paralelo, el trabajo del W3C *Cognitive and Learning Disabilities Accessibility* (COGA) articula orientaciones orientadas a barreras de comprensión, memoria, atención y carga cognitiva, con frecuencia menos automatizables que los criterios WCAG centrados en percepción y operación.

Por *accesibilidad cognitiva* se entiende aquí la capacidad del software de reducir barreras cognitivas (p. ej. lenguaje sencillo, consistencia, control del ritmo, minimización de sobrecarga). *Neurodivergencia* se usa como categoría amplia que agrupa perfiles como TEA, TDAH, dislexia o discapacidad intelectual, sin tratarla como caja negra: el protocolo de la revisión estratificará poblaciones cuando la evidencia lo permita (consenso del panel en `topic.md`).

La *inteligencia artificial* (IA), incluidos el aprendizaje automático y los modelos de lenguaje grandes (LLM / GenAI), interviene cada vez más en la generación de contenido, la detección de problemas de accesibilidad y la remediación asistida. El *ciclo de vida del software* (requisitos, diseño, implementación, verificación y validación, operación) es el eje de la Ingeniería de Software: el interés de esta revisión no es la tecnología asistiva clínica en sí, sino cómo la IA se inserta en artefactos y procesos de ingeniería —en especial diseño, personalización en runtime y, sobre todo, testing, V&V y auditoría— y qué métricas se emplean para evaluar calidad y accesibilidad.

### 1.2 Lo que se sabe del tema hasta la fecha

La evidencia reciente se organiza en frentes ya sintetizados por revisiones sistemáticas o de alcance, que esta RSL toma como frontera y no pretende repetir.

Chemnad y Othman (2024) realizaron una revisión sistemática y análisis bibliométrico de aplicaciones de IA a la accesibilidad digital (alrededor de 43 artículos tras un cribado amplio en bases que incluyen Scopus). Sus hallazgos destacan un **predominio estructural de la discapacidad visual**, cobertura insuficiente de TEA, trastornos neurológicos y condiciones motoras, y débil adhesión a estándares de accesibilidad en muchos sistemas revisados (DOI [10.3389/frai.2024.1349668](https://doi.org/10.3389/frai.2024.1349668)).

Perry et al. (2024) sintetizaron 15 estudios sobre tecnologías de IA orientadas al funcionamiento adaptativo en condiciones del neurodesarrollo en entornos cotidianos (p. ej. robótica, dispositivos, realidad virtual), con énfasis en outcomes clínicos y de apoyo, no en entregables del ciclo de vida del software (DOI [10.1038/s41746-024-01355-7](https://doi.org/10.1038/s41746-024-01355-7)).

Aljedaani y Mollik (2026) revisaron 38 estudios sobre LLM en accesibilidad web y mostraron que las tareas predominantes son text-céntricas y estructuralmente explícitas, con WCAG como marco principal y **limitada consideración de COGA**, además de prácticas de evaluación heterogéneas y escasa participación directa de usuarios con discapacidad (DOI [10.1145/3800424.3800452](https://doi.org/10.1145/3800424.3800452); espejo OA [arXiv:2605.13873](https://arxiv.org/abs/2605.13873)).

Como fronteras de solapamiento —no como anclas a remake— se reconocen, además, el *scoping review* de Xu et al. (2025) sobre diseño de interacción humano–IA inclusivo/adaptativo para usuarios neurodivergentes (DOI [10.1080/17483107.2025.2579822](https://doi.org/10.1080/17483107.2025.2579822)), de orientación HCI/AT, y la RSL de Paiva et al. (2021) sobre accesibilidad en procesos de Ingeniería de Software (94 estudios), sin eje IA+cognitivo/COGA (DOI [10.1016/j.jss.2020.110819](https://doi.org/10.1016/j.jss.2020.110819)).

### 1.3 Situación actual y disputas

La literatura disputa al menos tres tensiones. Primera: **sesgo sensorial versus cognitivo**. Chemnad y Othman (2024) documentan que la IA aplicada a accesibilidad digital se concentra en lo visual; Aljedaani y Mollik (2026) muestran, en el subdominio GenAI+web, que WCAG domina y COGA queda al margen. Segunda: **lente clínica/HCI versus lente de proceso SE**. Perry et al. (2024) y Xu et al. (2025) consolidan apoyo cotidiano e interacción inclusiva, respectivamente, sin construir una taxonomía anclada en fases y métricas de ingeniería. Tercera: **automatización versus validez con usuarios**. El auge de LLM y scanners WCAG sugiere eficiencia en V&V, pero las orientaciones cognitivas suelen exigir juicio experto o prueba con personas neurodivergentes; confundir “WCAG verde” con inclusión cognitiva produce lo que la ficha denomina accesibilidad de fachada, relevante también bajo marcos como la Ley 29973 y el lineamiento PCM/SGTD WCAG 2.2 en el Perú.

## 2. El problema

### 2.1 Tendencias o nuevas perspectivas

Dos tendencias reconfiguran el problema. Por un lado, la adopción de GenAI/LLM en flujos de desarrollo y de remediación de accesibilidad web (Aljedaani & Mollik, 2026) desplaza parte del esfuerzo hacia detección y generación asistida. Por otro, la presión regulatoria y de gobierno digital (p. ej. WCAG 2.2 en la Administración Pública peruana; marcos europeos de accesibilidad de productos/servicios) eleva el costo de ignorar barreras no visuales. Surge así la pregunta de cómo integrar IA en el **ciclo de vida SE** —no solo en el producto final— cuando el usuario objetivo enfrenta barreras cognitivas o neurodivergentes.

### 2.2 Discrepancias existentes

Existe discrepancia entre (a) el volumen de síntesis sobre IA+accesibilidad digital con sesgo visual (Chemnad & Othman, 2024), (b) el volumen de síntesis clínico-asistiva o HCI para neurodesarrollo/neurodivergencia (Perry et al., 2024; Xu et al., 2025) y (c) la relativa escasez de síntesis que crucen **IA × cognitivo/COGA × fase SE × métrica de evaluación**. Paiva et al. (2021) ya mapearon accesibilidad en procesos SE, pero sin el eje IA+cognitivo que hoy introduce GenAI. La discrepancia no es la ausencia total de papers, sino la **falta de organización SE-centrada** de lo existente.

### 2.3 Vacíos de conocimiento

Persiste un vacío operativo: no se dispone de una taxonomía **condición × técnica de IA × fase SE × métrica** que contraste explícitamente el sesgo visual/WCAG-duro, delimite HCI/AT clínico y señale qué puede automatizarse (p. ej. en CI) frente a lo que exige validación con usuarios COGA. Tampoco está estabilizado, a escala de revisión, el inventario de métricas cognitivas usadas en V&V de software asistido por IA. El panel (`topic.md`, veredicto GO_con_cambios) ubicó la celda más aguda en verificación/evaluación × GenAI × COGA, sin impedir cubrir diseño y personalización cuando haya evidencia de proceso SE.

### 2.4 Contraste: situación actual vs situación deseada

**Situación actual:** evidencia fragmentada entre accesibilidad digital+IA sesgada a lo visual, apoyo clínico/NDC y LLM+web con COGA débil; riesgo de cumplir checklists WCAG sin abordar comprensión ni carga cognitiva.  
**Situación deseada:** un mapa de evidencia primaria anclado en Ingeniería de Software que diga, para cada celda de la taxonomía, qué técnicas se han usado, en qué fase, con qué métricas y con qué límites éticos y de automatización.  
**Qué se propone estudiar:** sintetizar esa evidencia primaria (requisitos/diseño adaptativo, personalización, testing/V&V/auditoría) para perfiles cognitivos o neurodivergentes, produciendo la taxonomía cuádruple y el contraste frente a las fronteras ya citadas, con exclusión de intervenciones sin componente de proceso o calidad de software.

## 3. Justificación

### 3.1 Justificación de la elección del tema

El tema se eligió porque articula tres tópicos defendibles ante un revisor de Ingeniería de Software: accesibilidad cognitiva/neurodivergencia (con COGA), IA/GenAI aplicada a artefactos del ciclo de vida, y fases SE con métricas de diseño, personalización y verificación. El consenso del panel descartó un título genérico de “software inclusivo” que colisionaba con síntesis HCI (Xu et al., 2025) y exigió el recorte a ciclo de vida y métricas. Además, Chemnad y Othman (2024) y Aljedaani y Mollik (2026) aportan evidencia de sesgo visual/WCAG que hace científicamente pertinente el contraste cognitivo, mientras Perry et al. (2024) evitan confundir el objeto con outcomes clínicos.

### 3.2 Utilidad de los resultados de la revisión

Los resultados podrían utilizarse para: (a) orientar protocolos de extracción y reporting en investigación SE; (b) alimentar *Definition of Done* y gates de CI que distingan lo automatizable de lo que requiere usuarios COGA; (c) priorizar backlog de remediación cognitiva en productos educativos y de gobierno digital, sin pretender certificar cumplimiento legal. Se escribe, por tanto, para investigadores y profesionales de calidad/accesibilidad que necesitan un mapa accionable, no solo un catálogo narrativo.

### 3.3 Necesidad de una RSL

Una revisión sistemática (frente a un ensayo o un mapeo informal) es necesaria porque el campo está saturado de revisiones parciales en fronteras adyacentes y el riesgo de remake es alto. Solo un protocolo reproducible (p. ej. PRISMA), con criterios de inclusión/exclusión SE explícitos y estratificación poblacional, permite demostrar el hueco —o documentar celdas vacías— de forma auditable. El entregable mínimo no es la prosa sola, sino la taxonomía con columna de transferibilidad a DoD/CI, exigida en la ficha UTP.

## 4. Objetivo de la RSL

El objetivo es **sintetizar evidencia primaria** sobre técnicas de IA aplicadas a artefactos y procesos de Ingeniería de Software (requisitos/diseño de interfaces adaptativas, personalización en runtime, testing, V&V y auditoría de accesibilidad) para perfiles cognitivos o neurodivergentes, produciendo una taxonomía **condición × técnica de IA × fase SE × métrica de evaluación**, con contraste explícito respecto al sesgo visual/WCAG-duro documentado por Chemnad y Othman (2024) y a la debilidad COGA en GenAI+web mostrada por Aljedaani y Mollik (2026), y con delimitación frente al apoyo clínico/NDC de Perry et al. (2024) y frente a las fronteras HCI/AT (Xu et al., 2025) y SE-sin-IA-cognitiva (Paiva et al., 2021).

Así se une el problema (fragmentación y sesgo de la situación actual) con lo ya hecho para abordarlo (las tres RSL ancla y las fronteras de solapamiento): no se rehace esos frentes; se organiza la intersección vacía en clave de ciclo de vida y métricas.

**Salvaguarda ética mínima:** no medicalizar la neurodivergencia; no sustituir evidencia clínica por métricas de ingeniería; señalar cuando la evidencia omita participación de personas con discapacidad; situar ODS 10.2 y 4.5/4.a como horizonte de valor público, no como impacto causal automático del mapeo.

## 5. Organización del contenido de la revisión

El resto del trabajo se organiza, de forma prevista, así: (1) **Marco teórico y conceptual** (WCAG, COGA, neurodivergencia estratificada, IA/GenAI en SE); (2) **Metodología** (protocolo tipo PRISMA, bases IEEE/ACM/Scopus, cadenas de búsqueda, criterios de inclusión/exclusión SE vs HCI/AT/clínico, estratificación poblacional, extracción de la taxonomía cuádruple y de métricas); (3) **Resultados** (mapas por condición, técnica, fase y métrica; contraste visual/WCAG vs cognitivo/COGA; celdas densas y vacías, con énfasis en V&V); (4) **Discusión** (implicaciones para Ingeniería de Software, límites de GenAI en auditoría, ética y transferibilidad a DoD/CI); (5) **Conclusiones y trabajo futuro**. Un anexo metodológico recogerá la tabla de solapamiento RQ-propia frente a Xu, Paiva, Chemnad, Perry y Aljedaani.
