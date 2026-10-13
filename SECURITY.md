# Keselamatan dan privasi murid

Versi semasa ialah aplikasi statik GitHub Pages. Oleh sebab semua HTML dan JavaScript dihantar kepada pelayar, kod pentadbir yang ditulis dalam `index.html` **bukan kawalan keselamatan sebenar**. Nama murid yang disimpan terus dalam kod juga boleh dibaca oleh sesiapa yang membuka repositori awam.

## Keadaan semasa

- Data permainan kekal dalam `localStorage` peranti; belum ada penyegerakan langsung merentas peranti.
- Migrasi format simpanan V2 ke V3 tidak memadam data lama.
- Kod pentadbir lama dikekalkan sementara supaya guru tidak terkunci keluar secara mengejut.

## Pelan selamat sebelum penyegerakan langsung

1. Pindahkan senarai murid ke pangkalan data berpusat dengan polisi akses mengikut kelas.
2. Gantikan nama penuh pada klien awam dengan ID murid atau nama paparan minimum.
3. Gunakan log masuk guru sebenar (contohnya Firebase Auth atau Supabase Auth); jangan simpan kata laluan/kod rahsia dalam JavaScript.
4. Hadkan dashboard guru melalui peranan pelayan dan log audit.
5. Dapatkan persetujuan sekolah/penjaga dan tetapkan tempoh penyimpanan sebelum memuat naik data murid.
6. Uji pangkalan data dalam persekitaran percubaan sebelum mendakwa data telah disegerakkan.

Jangan masukkan kunci API rahsia atau kata laluan pangkalan data ke repositori ini. Kunci awam klien masih perlu dilindungi dengan polisi pangkalan data yang ketat.
