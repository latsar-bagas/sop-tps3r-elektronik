# SOP TPS3R Elektronik
**Dinas Perumahan Rakyat, Kawasan Permukiman dan Cipta Karya — Provinsi Jawa Timur**

Sistem informasi digital Standar Operasional Prosedur TPS3R berbasis web — dapat diakses dari perangkat apapun tanpa instalasi.

---

## Struktur File

```
sop-tps3r-elektronik/
├── index.html      ← Halaman login
├── tps3r.html      ← Portal pengelola & petugas TPS3R
├── dinas.html      ← Portal staf Dinas (inbox & riviu revisi)
├── config.js       ← Konfigurasi URL Google Drive (WAJIB diisi)
└── README.md       ← Panduan ini
```

---

## Cara Deploy ke GitHub Pages

### Langkah 1 — Buat Repository GitHub

1. Buka [github.com](https://github.com) → Login
2. Klik tombol **"New"** (pojok kiri atas)
3. Isi nama repository, contoh: `sop-tps3r-elektronik`
4. Pilih **Public**
5. Klik **"Create repository"**

### Langkah 2 — Upload Semua File

**Cara A — Lewat browser (paling mudah):**
1. Di halaman repository yang baru dibuat, klik **"uploading an existing file"**
2. Drag & drop semua file: `index.html`, `tps3r.html`, `dinas.html`, `config.js`, `README.md`
3. Scroll ke bawah → klik **"Commit changes"**

**Cara B — Lewat Git (untuk yang bisa):**
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/sop-tps3r-elektronik.git
git push -u origin main
```

### Langkah 3 — Aktifkan GitHub Pages

1. Di repository, klik tab **"Settings"**
2. Di sidebar kiri, klik **"Pages"**
3. Di bagian **"Branch"**, pilih `main` dan folder `/root`
4. Klik **"Save"**
5. Tunggu 1–3 menit
6. URL website akan muncul, contoh:
   ```
   https://USERNAME.github.io/sop-tps3r-elektronik/
   ```

---

## Cara Mengisi URL Google Drive di config.js

Setelah website online, langkah selanjutnya adalah menghubungkan file Word SOP dari Google Drive.

### Persiapan di Google Drive

1. Upload semua file Word SOP ke Google Drive
2. Untuk setiap file, klik kanan → **"Buka dengan Google Docs"**
3. Setelah terbuka di Google Docs, salin URL dari address bar

### Format URL yang dibutuhkan

| Keperluan | Format URL |
|---|---|
| Preview (baca) | `https://docs.google.com/document/d/FILE_ID/preview` |
| Edit (ajukan revisi) | `https://docs.google.com/document/d/FILE_ID/edit` |

**Contoh:**
- URL Google Docs: `https://docs.google.com/document/d/1aBcDeFgHiJkLmN/edit`
- URL Preview: `https://docs.google.com/document/d/1aBcDeFgHiJkLmN/preview`

### Pengaturan Berbagi (Penting!)

Agar file bisa di-preview tanpa login Google:
1. Di Google Docs, klik **"Bagikan"** (pojok kanan atas)
2. Klik **"Ubah ke siapa saja yang memiliki tautan"**
3. Pastikan izin: **"Penampil"** (bukan Editor)
4. Klik **"Selesai"**

### Mengisi config.js

Buka file `config.js`, cari bagian setiap kelompok SOP, ganti URL placeholder:

```javascript
// SEBELUM (placeholder):
previewUrl: "https://docs.google.com/document/d/PLACEHOLDER_KELA_ID/preview",
editUrl:    "https://docs.google.com/document/d/PLACEHOLDER_KELA_ID/edit",

// SESUDAH (diisi URL asli):
previewUrl: "https://docs.google.com/document/d/1aBcDeFgHiJkLmN/preview",
editUrl:    "https://docs.google.com/document/d/1aBcDeFgHiJkLmN/edit",
```

Lakukan untuk semua kelompok (bagian1, kelA, kelB, kelC, kelD, kelE, kelF, kelG, bagian3).

Setelah selesai, upload ulang `config.js` ke GitHub → perubahan otomatis live dalam 1–2 menit.

---

## Akun Login

| Peran | Username | Password | Halaman |
|---|---|---|---|
| Pengelola / Petugas TPS3R | `tps3r` | `user` | tps3r.html |
| Staf Dinas PRKCK | `dinas` | `admin` | dinas.html |

---

## Alur Penggunaan

```
PENGELOLA TPS3R
  → Login dengan akun tps3r / user
  → Pilih dokumen SOP → Preview langsung di browser
  → Klik "Ajukan Revisi"
  → Konfirmasi → Google Docs terbuka di tab baru
  → Edit dokumen → Simpan (otomatis di Google Docs)
  → Kembali ke website → Pengajuan tercatat di riwayat

STAF DINAS
  → Login dengan akun dinas / admin
  → Lihat inbox pengajuan revisi
  → Klik pengajuan → Split view: SOP asli (kiri) | Revisi (kanan)
  → Tulis catatan (opsional)
  → Klik "Setujui" atau "Tolak"
  → Status berubah dan tercatat otomatis
```

---

## Catatan Teknis

- Website ini adalah **simulasi statis** yang berjalan sepenuhnya di browser
- Data pengajuan revisi tersimpan sementara di `sessionStorage` browser
- Untuk implementasi permanen dengan database, perlu integrasi backend (Supabase/Firebase)
- Preview dokumen menggunakan Google Docs Viewer — membutuhkan koneksi internet
- Kompatibel dengan Chrome, Firefox, Safari, dan Edge versi terbaru

---

## Troubleshooting

**Preview dokumen tidak muncul:**
- Pastikan URL Google Drive sudah diisi di config.js
- Pastikan pengaturan berbagi file sudah "Siapa saja yang memiliki tautan"
- Coba buka URL preview langsung di browser untuk memastikan bisa diakses

**Halaman tidak bisa diakses setelah deploy:**
- Pastikan GitHub Pages sudah diaktifkan di Settings → Pages
- Tunggu 3–5 menit setelah aktivasi
- Pastikan nama file menggunakan huruf kecil (index.html, bukan Index.html)

**Login tidak bisa:**
- Pastikan username ditulis huruf kecil: `tps3r` atau `dinas`
- Pastikan pilihan peran sesuai akun (Pengelola untuk tps3r, Staf Dinas untuk dinas)
