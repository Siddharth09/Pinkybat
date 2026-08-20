import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { gunzip } from 'node:zlib';
import { promisify } from 'node:util';

const gunzipAsync = promisify(gunzip);
const encoded = (await readFile(new URL('../source/vicky.html.gz.b64', import.meta.url), 'utf8')).trim();
const html = await gunzipAsync(Buffer.from(encoded, 'base64'));
await mkdir(new URL('../www/', import.meta.url), { recursive: true });
await writeFile(new URL('../www/index.html', import.meta.url), html);
console.log(`Built Vicky the Bat release (${html.byteLength} bytes).`);
