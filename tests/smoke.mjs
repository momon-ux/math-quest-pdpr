import fs from 'node:fs';
import assert from 'node:assert/strict';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const inlineScripts = [...html.matchAll(/<script(?: [^>]*)?>([\s\S]*?)<\/script>/g)]
  .map((match) => match[1])
  .filter(Boolean)
  .join('\n');

assert.doesNotThrow(() => new Function(inlineScripts), 'JavaScript dalam index.html mesti sah');
assert.match(html, /id="voxel-world"/, 'kanvas voxel 3D mesti wujud');
assert.match(html, /STATE\.coins/, 'ekonomi syiling mesti berasingan daripada XP');
assert.match(html, /function migrateLegacyGrid/, 'migrasi data grid lama mesti disediakan');
assert.match(html, /function calculateHouseProgress/, 'kemajuan rumah mesti dikira daripada struktur');
assert.match(html, /Blok perlu sokongan di bawah/, 'blok terapung mesti ditolak');
assert.match(html, /function undoBuild/, 'undo mesti disediakan');
assert.match(html, /function redoBuild/, 'redo mesti disediakan');
assert.doesNotMatch(html, /STATE\.xp\s*-=/, 'pembelian tidak boleh mengurangkan XP pencapaian');

console.log('Semua semakan smoke Math Craft V3 lulus.');
