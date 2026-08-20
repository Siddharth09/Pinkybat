import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { gunzip } from 'node:zlib';
import { promisify } from 'node:util';

const gunzipAsync = promisify(gunzip);
const encoded = await readFile('source/vicky.html.gz.b64', 'utf8');
const html = await gunzipAsync(Buffer.from(encoded.trim(), 'base64'));
await mkdir('www', { recursive: true });
await writeFile('www/index.html', html);
console.log(`Built Vicky the Bat web bundle (${html.byteLength} bytes).`);
