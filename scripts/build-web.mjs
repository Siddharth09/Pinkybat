import { access } from 'node:fs/promises';
for (const file of ['www/index.html','www/style.css','www/game.js','www/manifest.webmanifest','www/assets/icons/icon.svg']) await access(file);
console.log('Pinky Bat web bundle verified.');
