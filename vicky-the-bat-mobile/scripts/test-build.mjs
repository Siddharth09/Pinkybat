import { readFile } from 'node:fs/promises';

const html = await readFile('www/index.html', 'utf8');

const required = [
  '<canvas',
  '<script>',
  'VICKY',
  'function drawBat',
  'function update',
  'requestAnimationFrame'
];

for (const item of required) {
  if (!html.includes(item)) {
    throw new Error(`Build check failed: missing ${item}`);
  }
}

const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/gi)];

if (!scripts.length) {
  throw new Error('Build check failed: no JavaScript found');
}

for (const [, code] of scripts) {
  new Function(code);
}

console.log('Vicky the Bat build check PASS');
