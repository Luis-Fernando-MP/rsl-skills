#!/usr/bin/env node
/**
 * Refresh Graphify for one theme under docs/[titulo-breve]/.
 * Usage:
 *   npm run graphify:theme -- ia-inclusion-cognitiva-software
 *   npm run graphify:theme -- docs/ia-inclusion-cognitiva-software
 */
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(root);

const raw = process.argv[2];
if (!raw) {
  console.error(
    [
      'Missing theme. Usage:',
      '  npm run graphify:theme -- <titulo-breve>',
      '  npm run graphify:theme -- docs/<titulo-breve>',
      '',
      'Example:',
      '  npm run graphify:theme -- ia-inclusion-cognitiva-software',
    ].join('\n')
  );
  process.exit(1);
}

let themeRel = raw.replace(/\/+$/, '');
if (!themeRel.startsWith('docs/')) {
  themeRel = path.join('docs', themeRel);
}
const themeAbs = path.resolve(root, themeRel);

if (!existsSync(themeAbs)) {
  console.error(`Theme folder not found: ${themeRel}`);
  process.exit(1);
}

// Ensure PDF (and optional MD) corpus dirs exist for the theme.
mkdirSync(path.join(themeAbs, 'RSL', 'PDF'), { recursive: true });

const home = process.env.USERPROFILE || process.env.HOME || homedir();
const extraBins = [
  path.join(home, '.local', 'bin'),
  path.join(home, 'AppData', 'Roaming', 'Python', 'Python314', 'Scripts'),
  path.join(home, 'AppData', 'Roaming', 'Python', 'Python313', 'Scripts'),
  path.join(home, 'AppData', 'Roaming', 'Python', 'Python312', 'Scripts'),
].filter((p) => existsSync(p));

const pathEnv = [...extraBins, process.env.PATH || ''].filter(Boolean).join(path.delimiter);

function run(cmd, args) {
  return spawnSync(cmd, args, {
    encoding: 'utf8',
    shell: true,
    cwd: root,
    env: { ...process.env, PATH: pathEnv },
  });
}

let result = run('graphify', ['update', themeRel]);
if ((result.status ?? 1) !== 0) {
  result = run('python3', ['-m', 'graphify', 'update', themeRel]);
}
if ((result.status ?? 1) !== 0) {
  result = run('python', ['-m', 'graphify', 'update', themeRel]);
}

if ((result.status ?? 1) !== 0) {
  console.error(result.stdout || '');
  console.error(result.stderr || '');
  console.error('graphify CLI not found or theme update failed.');
  process.exit(result.status ?? 1);
}

if (result.stdout) process.stdout.write(result.stdout);
if (result.stderr) process.stderr.write(result.stderr);

const graphJson = path.join(themeAbs, 'graphify-out', 'graph.json');
if (!existsSync(graphJson)) {
  console.error(`Update finished but ${path.relative(root, graphJson)} is still missing.`);
  process.exit(1);
}

console.log('PASS: graphify theme →', path.relative(root, graphJson));
process.exit(0);
