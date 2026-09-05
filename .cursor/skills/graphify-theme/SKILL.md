---
name: graphify-theme
description: >-
  Create or refresh Graphify memory for one docs/[titulo-breve] theme
  (informe, topic, RSL/PDF). Use when the user says graphify-theme and passes
  a theme slug or docs/... path. Agents must not run this unless the user
  explicitly invokes this skill.
---

# graphify-theme

Build / refresh the **per-theme** knowledge graph so SLR PDFs/MD and theme markdown can be queried without dumping raw PDFs into chat context.

## Control

- You run refresh **only** when the user explicitly invokes this skill and names the theme.
- If the theme is missing → ask for `docs/[titulo-breve]/` or the slug. Do not guess.
- `rsl-*` agents must **never** refresh theme graphs on their own.
- After a theme graph exists, agents **may** lookup with `--graph` for that theme.

## Resolve theme

Accept any of:

- `ia-inclusion-cognitiva-software`
- `docs/ia-inclusion-cognitiva-software`
- `docs/ia-inclusion-cognitiva-software/`

Normalize to `docs/[titulo-breve]/`. Folder must exist.

## Procedure

1. Resolve theme path. Ensure `RSL/PDF/` exists (create empty dirs if needed; do not invent PDFs).
2. From **repo root** run:

```bash
npm run graphify:theme -- <titulo-breve>
```

Example:

```bash
npm run graphify:theme -- ia-inclusion-cognitiva-software
```

3. Verify `docs/[titulo-breve]/graphify-out/graph.json`.
4. Chat: theme path, graph path, PDFs present under `RSL/PDF/`, missing files.

## Lookup (theme graph)

Always pass `--graph`:

```bash
graphify query "<question>" --graph docs/[titulo-breve]/graphify-out/graph.json
graphify path "A" "B" --graph docs/[titulo-breve]/graphify-out/graph.json
graphify explain "<concept>" --graph docs/[titulo-breve]/graphify-out/graph.json
```

Optional: if the user later converts PDFs → MD under `RSL/MD/`, re-invoke this skill so the graph picks them up (lighter tokens than re-reading PDFs).

## Invoke examples

```text
Usa graphify-theme sobre docs/ia-inclusion-cognitiva-software/
```

```text
Usa graphify-theme ia-inclusion-cognitiva-software
```

```text
Actualiza graphify del tema ia-inclusion-cognitiva-software
```

## Forbidden

- Refreshing **root** graph from this skill (use **graphify-root**).
- Running without a theme path.
- Auto-refresh after every `rsl-make-report` / polish unless the user asks.
