import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { gunzip } from 'node:zlib';
import { promisify } from 'node:util';

const gunzipAsync = promisify(gunzip);
const encoded = (await readFile(new URL('../../vicky-the-bat-mobile-release/source/vicky.html.gz.b64', import.meta.url), 'utf8')).trim();
const html = await gunzipAsync(Buffer.from(encoded, 'base64'));
await mkdir(new URL('../dist/', import.meta.url), { recursive: true });
await writeFile(new URL('../dist/index.html', import.meta.url), html);
console.log(`Built Vicky the Bat web release (${html.byteLength} bytes).`);
