import fs from 'node:fs';
import assert from 'node:assert/strict';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const gallery = JSON.parse(fs.readFileSync(new URL('../gallery.json', import.meta.url), 'utf8'));
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
assert.match(html, /id="input-student-name"/, 'murid mesti boleh mengisi nama sendiri');
assert.match(html, /function downloadRecordTemplateCSV/, 'templat semakan rekod mesti disediakan');
assert.doesNotMatch(html, /DEFAULT_ROSTERS|getRosters|roster-grid-list/, 'senarai nama murid tidak boleh ditanam dalam aplikasi');
assert.match(html, /Mohammad Fikrey bin Abdul Gapar/i, 'nama pembangun sistem mesti dipaparkan');
assert.match(html, /height:\s*100dvh/, 'paparan telefon mesti menggunakan ketinggian viewport dinamik');
assert.match(html, /rel="manifest" href="manifest\.webmanifest"/, 'manifest PWA MathBina mesti dipautkan');
assert.match(html, /id="profile-preview-name"/, 'kad profil biru mesti memaparkan nama murid');
assert.match(html, /id="profile-preview-avatar"/, 'kad profil biru mesti memaparkan avatar murid');
assert.match(html, /navigator\.serviceWorker\.register/, 'service worker PWA mesti didaftarkan');
assert.match(html, /const frameDepth = \.74/, 'bingkai pintu dan tingkap mesti melekap pada ketebalan dinding');
assert.match(html, /tree_leaf_dark.*tree_leaf_light/, 'pokok mesti mempunyai kanopi berlapis yang jelas');
assert.match(html, /function getOpeningAttachment/, 'pintu dan tingkap mesti disambungkan pada barisan dinding');
assert.match(html, /Bina dinding dahulu/, 'pintu atau tingkap bebas mesti ditolak');
assert.match(html, /function normalizeStudentIdentity/, 'identiti murid mesti diseragamkan sebelum simpan atau muat');
assert.match(html, /function findStudentSave/, 'rekod murid lama mesti boleh ditemui dan dipulihkan');
assert.match(html, /getStudentSaveKey\(STATE\.studentName, STATE\.className\)/, 'rekod mesti disimpan menggunakan nama dan kelas yang seragam');
assert.match(html, /window\.addEventListener\('pagehide', saveCurrentStudentState\)/, 'kemajuan mesti disimpan apabila murid meninggalkan halaman');
assert.match(html, /Kemajuan lama ditemui/, 'lobi mesti memberitahu murid apabila rekod lama dijumpai');
assert.match(html, /type === 'pet_cat'/, 'kucing mesti mempunyai model 3D tersendiri');
assert.match(html, /type === 'pet_dino'/, 'dinosaur mesti mempunyai model 3D tersendiri');
assert.match(html, /type === 'bicycle'/, 'basikal mesti mempunyai model 3D tersendiri');
assert.match(html, /type === 'car_red'/, 'kereta mesti mempunyai model 3D tersendiri');
assert.match(html, /type === 'helicopter'/, 'helikopter mesti mempunyai model 3D tersendiri');
assert.match(html, /type === 'rocket'/, 'roket mesti mempunyai model 3D tersendiri');
assert.match(html, /type === 'rose_flower' \|\| type === 'sunflower'/, 'bunga mesti mempunyai model 3D tersendiri');
assert.match(html, /type === 'fountain'/, 'air pancut mesti mempunyai model 3D tersendiri');
assert.match(html, /type === 'garden_lamp'/, 'lampu taman mesti mempunyai model 3D tersendiri');
assert.match(html, /id="community-backdrop"/, 'latar lobi mesti menyediakan paparan rumah komuniti');
assert.match(html, /function loadCommunityGallery/, 'galeri rumah bersama mesti dimuatkan pada pembukaan permainan');
assert.match(html, /function drawGalleryHouse/, 'pratonton rumah galeri mesti dijana secara visual');
assert.match(html, /Rumah diluluskan guru/, 'galeri mesti menerangkan proses kelulusan guru');
assert.ok(Array.isArray(gallery.entries) && gallery.entries.length > 0, 'galeri pusat mesti mempunyai sekurang-kurangnya satu rumah rasmi');
assert.ok(gallery.entries.every(entry => entry.approved !== false), 'rumah galeri pusat mesti diluluskan');

console.log('Semua semakan smoke MathBina V6 lulus.');
