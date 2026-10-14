# 🏡 MathBina: Misi Bina Rumah Impian (Tahun 1 hingga Tingkatan 5)
### *Aplikasi Gamifikasi Pendidikan Matematik untuk murid dari pelbagai sekolah*
### 👨‍💻 **Pembangun Sistem:** Mohammad Fikrey bin Abdul Gapar (Cikgu Fikrey / Momon)

---

## 🌟 Versi V11 — ID Pengguna, Galeri Kawan & Simpanan Awan Firebase

Versi ini menjana ID awam MathBina untuk setiap pemain, membenarkan sekolah, kelas dan aras diedit, menyokong soalan Tahun 1 hingga Tingkatan 5, serta menyimpan binaan ke Firebase secara automatik. Rumah kawan boleh ditambah menggunakan ID tanpa menunggu kelulusan guru. Setiap rumah diikat kepada identiti tanpa nama peranti pemilik supaya orang lain hanya boleh melihat dan tidak boleh menimpa binaannya.

---

## 🌟 Versi V7 — Galeri Komuniti & Soalan Mengikut Aras Tahun 1–6

Versi terbaharu memperkenalkan mod binaan **Pelan Rumah Starter Minecraft (Berdasarkan Rujukan Rasmi Reddit: *A simple starter house*)** yang membolehkan murid melihat rumah impian terbentuk sempurna secara 3D:

1. **🏡 Pelan Rumah Starter Minecraft 8-Fasa:**
   - **Fasa 1: Tapak Cobblestone & Tiang Balak Oak (100 Syiling):** Menanam asas batu *cobblestone* sekeliling dan 4 tiang balak kayu oak menegak di sudut rumah.
   - **Fasa 2: Lantai Kayu & Dinding Papan Oak (120 Syiling):** Menghampar lantai parket kayu dan mendirikan dinding papan kayu oak berserta bukaan tingkap.
   - **Fasa 3: Anjung Depan, Tangga & Pintu Rumah (100 Syiling):** Membina anjung depan berkayu, tangga masuk kayu oak, tiang pagar anjung, dan pintu kayu depan.
   - **Fasa 4: Tingkap Kaca & Pelita Tanglung (100 Syiling):** Memasang panel tingkap kaca pencahayaan dan tanglung bercahaya hangat ala Minecraft.
   - **Fasa 5: Bumbung Berpuncak Kayu Segitiga / Gable Roof (180 Syiling):** Memasang bumbung A-frame berpuncak kayu bertingkat dengan rabung batu cobblestone.
   - **Fasa 6: Dedaun Rimbun & Taman Bunga (80 Syiling):** Menanam semak dedaun hijau rimbun dan bunga ros mawar di sekeliling asas rumah.
   - **Fasa 7: Corong Asap Batu (Chimney) & Hearth (120 Syiling):** Membina cerobong asap batu cobblestone di sisi rumah yang melepasi bumbung.
   - **Fasa 8: Pagar Halaman & Kereta Sukan Kartun (150 Syiling):** Memasang pagar laman putih dan kenderaan sukan merah di halaman rumah.
   - **⚡ Butang Bina Penuh:** Pilihan untuk membina rumah starter lengkap secara automatik dalam satu klik.
   - **🧹 Butang Kosongkan Tapak:** Mengosongkan tapak binaan untuk memulakan rekaan baharu.

2. **🎥 Kawalan Pantas Kamera 3D & Putaran 360° Automatik:**
   - Butang pandangan pantas: `👁️ Depan`, `📐 Isometrik`, `🔝 Atas`, dan `🔄 Putar 360°`.
   - Kawalan sentuh penuh: Seret satu jari untuk putar kamera, cubit dua jari untuk zum masuk/keluar, dan ketuk blok untuk bina atau padam.

3. **🧱 Tekstur & Blok Khas Minecraft (Procedural Pixel-Art):**
   - Tekstur tulen dijana secara prosedural di dalam kanvas: *Cobblestone*, *Oak Log*, *Oak Planks*, *Bush Leaves*, *Wood Stairs/Wedge Roof*, *Stone Chimney*, *Lanterns*, dan *Flowers*.
   - Tidak memerlukan muat turun imej luar yang berisiko disekat oleh sambungan internet sekolah.

4. **Ekonomi Syiling & 2 Minigame Menjana XP (Zero Reading Fatigue):**
   - 🎯 **Math Shooter (Meriam Belon):** Meriam kartun hijau membidik belon-belon terapung. Tembak belon dengan jawapan matematik yang betul -> **POP! 🎈💥** meletup dan dapat **+100 XP**!
   - 🎡 **Roda Sifir & Operasi (Spinning Wheel):** Putar roda bertuah 8 segmen, selesaikan soalan kilat dalam 15 saat -> dapat **+150 XP** sehingga **+300 XP (Jackpot)**!
   - Kedua-dua minigame menjana soalan mengikut aras tahun yang dipilih, daripada operasi asas Tahun 1 hingga operasi bergabung Tahun 6.

5. **Penyimpanan Perkembangan Murid (Persistent Auto-Save):**
   - Binaan 3D, baki syiling, markah XP, dan kemajuan fasa rumah setiap murid disimpan secara automatik dalam `localStorage`.

6. **Terbuka kepada semua sekolah:**
   - Pilihan **Tahun 1 hingga Tahun 6**.
   - Nama sekolah dan kelas ialah ruangan pilihan yang boleh ditaip sendiri tanpa senarai kelas tetap.
   - Galeri awam hanya memaparkan nama ringkas, tahun dan avatar bagi rumah yang diluluskan guru.

7. **📅 Papan Skor Kalendar PDPR & Eksport Excel (CSV):**
   - Menyenaraikan semua rekod murid mengikut kalendar sesi PDPR.
   - Boleh dieksport ke format Excel (CSV) dan disalin terus ke mesej WhatsApp guru.

8. **⚙️ Alat Semakan Rekod Guru:**
   - Panel pengurusan dengan kod akses guru (kod kekal tersembunyi tanpa dipaparkan pada skrin).

---

## 🕹️ Aliran Permainan (Gameplay Loop)

```
[LOBBY: PILIH TAHUN 1–6 + TAIP NAMA; SEKOLAH/KELAS PILIHAN]
                  │
                  ▼
   🏡 DUNIA 3D MINECRAFT STARTER HOUSE (THREE.JS)
   • Putar kamera 360°, lihat tapak rumput.
   • Buka "PELAN RUMAH STARTER" untuk bina rumah Reddit fasa-demi-fasa!
                  │
                  ├──────────────────────────────┐
                  ▼                              ▼
   🎯 ZON CARI XP: MATH SHOOTER    🎡 ZON CARI XP: RODA SIFIR
   • Tembak belon jawapan tepat!   • Putar roda & jawab soalan kilat!
   • Dapat +100 XP setiap tembakan! • Menangi +150 XP hingga +300 XP!
                  │                              │
                  └──────────────┬───────────────┘
                                 │
                                 ▼
   💰 KEMBALI DENGAN SYILING UNTUK SIAPKAN RUMAH IMPIAN!
   • Buka semua fasa hingga rumah starter siap 100%!
   • Tangkap gambar 3D Snapshot 📸 & rekod markah ke Papan Skor Kalendar!
```

---

## 🌐 Pautan Rasmi & Deployment

- **Pautan Langsung:** [https://momon-ux.github.io/math-quest-pdpr/](https://momon-ux.github.io/math-quest-pdpr/)
- **Repositori GitHub:** [https://github.com/momon-ux/math-quest-pdpr](https://github.com/momon-ux/math-quest-pdpr)
- **Pembangun Sistem:** Mohammad Fikrey bin Abdul Gapar (SK Ranggu Tawau)
