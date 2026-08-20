import { readFile } from 'node:fs/promises';
import vm from 'node:vm';

const html = await readFile(new URL('../www/index.html', import.meta.url), 'utf8');
if (!html.includes('<canvas id="game"></canvas>')) throw new Error('Missing game canvas');
if (!html.includes('VICKY <span>THE BAT</span>')) throw new Error('Missing Vicky title');
if (html.includes('more hearts') || html.includes('More hearts')) throw new Error('Old heart instruction text remains');

const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
if (scripts.length !== 1) throw new Error(`Expected one inline game script, found ${scripts.length}`);
new vm.Script(scripts[0], { filename: 'vicky-release-inline.js' });

const cityMatches = html.match(/\{name:'[^']+'[^}]*\}/g) || [];
const cityNames = cityMatches.map(x => x.match(/\{name:'([^']+)'/)?.[1]).filter(Boolean);
if (cityNames.length !== 115) throw new Error(`Expected 115 cities, found ${cityNames.length}`);
if (new Set(cityNames).size !== 115) throw new Error('Duplicate city names detected');
if ((html.match(/function drawBat\s*\(/g) || []).length !== 1) throw new Error('Unexpected drawBat definition count');
if ((html.match(/function draw\s*\(/g) || []).length !== 1) throw new Error('Unexpected draw definition count');

console.log('Vicky release verification passed: syntax, UI, 115 unique cities, and core renderer checks.');
