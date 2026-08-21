import { mkdir, copyFile } from 'node:fs/promises';

await mkdir('www', { recursive: true });
await copyFile('source/vicky.html', 'www/index.html');

console.log('Built Becky the Bat web bundle from source/vicky.html');
