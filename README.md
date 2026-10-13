# 🏡 MATH CRAFT & SHOOTER: Kelab Bina Rumah Impian PDPR (Tahun 5 & 6)
### *Aplikasi Gamifikasi Pendidikan Matematik Rendah KSSR Semakan — SK Ranggu Tawau*
### 👨‍💻 **Pembangun Sistem:** Mohammad Fikrey bin Abdul Gapar (Cikgu Fikrey / Momon)

## Versi V3 — Pembina Rumah Voxel 3D

Branch pembangunan V3 menggantikan petak emoji dengan dunia voxel 3D sebenar:

- tapak 14 × 8 dengan koordinat X, Y dan Z;
- binaan sehingga 8 aras, kawalan kamera sentuh, zum, putar blok, undo dan redo;
- blok tidak boleh terapung tanpa sokongan;
- bentuk khas untuk pintu, tingkap, bumbung condong/rata, tangga, pagar dan pokok;
- XP kekal sebagai markah pencapaian, manakala syiling digunakan di kedai;
- migrasi simpanan V2 ke V3 tanpa memadam data lama;
- tahap dan peratus rumah dikira daripada lantai, dinding, pintu, tingkap, bumbung, tingkat atas dan landskap sebenar;
- dashboard/CSV guru memaparkan XP, ketepatan, jumlah soalan dan kemajuan rumah.

Three.js dimuat daripada CDN jsDelivr ketika halaman dibuka. Penyegerakan merentas peranti belum diaktifkan kerana backend dan log masuk guru belum dikonfigurasi. Lihat [SECURITY.md](SECURITY.md) sebelum menambah pangkalan data.

---

## 🌟 Pengenalan & Konsep Permainan (Sandbox Crafting + Math XP Quest)

Aplikasi ini dibangunkan secara khas oleh **Mohammad Fikrey bin Abdul Gapar** untuk murid-murid SK Ranggu Tawau yang menggabungkan elemen kreativiti **Lego / Minecraft Sandbox (Bina Rumah Impian)** dengan minigame arked matematik yang mencabar:

1. **Padang Rumput Binaan Rumah Impian (Creative Building Plot):**
   - Setiap murid diberikan sebidang tanah lapangan rumput bergrid (14 × 8 petak) sendiri.
   - Murid boleh menyusun blok-blok binaan untuk mendirikan rumah impian, bumbung, pintu, tingkap kaca, halaman taman, kolam renang, pagar, kenderaan (kereta lumba, basikal, helikopter, roket) serta haiwan peliharaan!
   - Dilengkapi alatan letak blok, alatan pemadam (*eraser*), dan butang tangkap gambar (*snapshot*) untuk memuat turun hasil karya rumah murid.

2. **Ekonomi XP & Kedai Blok (XP Block Shop):**
   - Setiap blok dan hiasan mempunyai harga XP (cth: Dinding Kayu = 20 XP, Bata Merah = 30 XP, Pintu = 40 XP, Kereta Sukan = 250 XP, Kolam Renang = 80 XP, Roket = 500 XP).
   - Murid bermula dengan pek alu-aluan 150 XP dan 8 blok asas percuma.
   - Apabila XP habis, murid perlu mengembara ke zon cabaran matematik untuk mengumpul XP!

3. **2 Zon Minigame Cari XP (Zero Reading Fatigue):**
   - 🎯 **Math Shooter (Meriam Belon):** Meriam kartun hijau di atas bukit membidik belon-belon terapung. Tembak belon dengan jawapan betul -> **POP! 🎈💥** meletup dan dapat **+100 XP** terus ke akaun!
   - 🎡 **Roda Sifir & Operasi (Spinning Wheel):** Putar roda berputar, jawab soalan kilat dalam masa 15 saat -> dapat bonus **+150 XP** sehingga **+300 XP (Jackpot)**!
   - Jika jawab salah: tiada XP diberikan, murid digalakkan mencuba lagi.

4. **Penyimpanan Perkembangan Murid (Persistent Auto-Save per Student):**
   - Binaan rumah dan baki XP setiap murid disimpan secara automatik dalam `localStorage`.
   - Setiap kali murid login dengan nama mereka, rumah impian mereka akan dipaparkan semula seperti mana mereka tinggalkan.

5. **Pilihan 8 Kelas & 287 Murid Rasmi SK Ranggu Tawau:**
   - **Tahun 5:** `5 Khoir`, `5 Mumtaz`, `5 Jahid`, `5 Eltizam`
   - **Tahun 6:** `6 Khoir`, `6 Mumtaz`, `6 Jahid`, `6 Eltizam`
   - Murid hanya perlu scroll atau buat carian pantas `🔍 Cari nama...` untuk klik nama mereka sendiri.

6. **📅 Papan Skor Kalendar PDPR (Scrollable mengikut Tarikh):**
   - Menyenaraikan semua murid SK Ranggu yang aktif mengumpul XP dan membina rumah.
   - Boleh di-filter mengikut tarikh kalendar PDPR.
   - Lengkap dengan fungsi muat turun fail Excel (CSV) dan butang salin laporan ke WhatsApp Cikgu.

7. **⚙️ Panel Kawalan Guru:**
   - Membolehkan Cikgu Fikrey mengurus murid, menambah kelas, import senarai pukal, atau menetapkan semula pangkalan data 8 kelas SK Ranggu bila-bila masa.

---

## 🕹️ Aliran Permainan (Gameplay Loop)

```
[LOBBY: PILIH KELAS & NAMA MURID + AVATAR]
                  │
                  ▼
   🏡 PADANG RUMPUT BINAAN RUMAH IMPIAN (SANDBOX PLOT)
   • Letak blok, dinding, pintu, tingkap, kereta, kolam renang.
   • Beli blok baharu di Kedai Blok menggunakan XP.
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
   💰 KEMBALI KE PADANG RUMAH DENGAN POKET PENUH XP!
   • Beli blok impian dan teruskan membina rumah tercantik!
   • Tangkap gambar rumah 📸 & rekod markah ke Papan Skor Kalendar!
```

---

## 🌐 Pautan Rasmi & Deployment

- **Pautan Langsung:** [https://momon-ux.github.io/math-quest-pdpr/](https://momon-ux.github.io/math-quest-pdpr/)
- **Repositori GitHub:** [https://github.com/momon-ux/math-quest-pdpr](https://github.com/momon-ux/math-quest-pdpr)
- **Pembangun Sistem:** Mohammad Fikrey bin Abdul Gapar (SK Ranggu Tawau)
