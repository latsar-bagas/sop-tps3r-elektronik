// config.js
// ================================================================
// KONFIGURASI SOP TPS3R ELEKTRONIK
// Ganti URL placeholder di bawah dengan URL asli dari Google Drive
// ================================================================

// Cara mendapatkan URL Google Drive untuk preview:
// 1. Upload file Word ke Google Drive
// 2. Klik kanan → "Buka dengan Google Docs"
// 3. Salin URL dari address bar browser
// 4. Ganti "/edit" di akhir URL dengan "/preview"
//
// Contoh:
// URL Edit:    https://docs.google.com/document/d/XXXX/edit
// URL Preview: https://docs.google.com/document/d/XXXX/preview
// URL Edit (untuk tombol Ajukan Revisi): tetap pakai /edit
//
// Untuk file Word (.docx) yang diupload (bukan dibuat di Google Docs):
// 1. Upload .docx ke Google Drive
// 2. Klik kanan → "Dapatkan tautan"
// 3. Ubah akses ke "Siapa saja yang memiliki tautan dapat melihat"
// 4. Salin file ID dari URL (bagian setelah /d/ dan sebelum /view)
// 5. Gunakan: https://docs.google.com/document/d/FILE_ID/preview
//    atau embed viewer: https://drive.google.com/file/d/FILE_ID/preview

const SOP_CONFIG = {

  // ── BAGIAN I — Dokumen Induk ───────────────────────────────
  bagian1: {
    label: "Bagian I — Dokumen Induk",
    warna: "#1A3D2B",
    icon:  "📘",
    deskripsi: "Lembar pengesahan, kata pengantar, tujuan, ruang lingkup, dasar hukum, glosarium, dan daftar SOP.",
    previewUrl: "https://docs.google.com/document/d/PLACEHOLDER_BAGIAN1_ID/preview",
    editUrl:    "https://docs.google.com/document/d/PLACEHOLDER_BAGIAN1_ID/edit",
  },

  // ── BAGIAN II — Kelompok A ─────────────────────────────────
  kelA: {
    label: "Kelompok A — Pengumpulan & Penerimaan",
    warna: "#185FA5",
    icon:  "🚛",
    deskripsi: "Prosedur pengambilan sampah dari sumber, penerimaan di TPS3R, dan penimbangan serta pencatatan data.",
    previewUrl: "https://docs.google.com/document/d/PLACEHOLDER_KELA_ID/preview",
    editUrl:    "https://docs.google.com/document/d/PLACEHOLDER_KELA_ID/edit",
  },

  kelB: {
    label: "Kelompok B — Pemilahan",
    warna: "#185FA5",
    icon:  "♻️",
    deskripsi: "Prosedur pemilahan sampah secara manual dan menggunakan conveyor ke kategori organik, anorganik, residu, dan B3.",
    previewUrl: "https://docs.google.com/document/d/PLACEHOLDER_KELB_ID/preview",
    editUrl:    "https://docs.google.com/document/d/PLACEHOLDER_KELB_ID/edit",
  },

  kelC: {
    label: "Kelompok C — Pengolahan Organik",
    warna: "#2E7D32",
    icon:  "🌱",
    deskripsi: "Prosedur pencacahan, windrow komposting, budidaya maggot BSF, bokashi, eco enzyme, komposter drum, dan pengemasan produk.",
    previewUrl: "https://docs.google.com/document/d/PLACEHOLDER_KELC_ID/preview",
    editUrl:    "https://docs.google.com/document/d/PLACEHOLDER_KELC_ID/edit",
  },

  kelD: {
    label: "Kelompok D — Pengolahan Anorganik",
    warna: "#00695C",
    icon:  "🔄",
    deskripsi: "Prosedur sortasi lanjut, pencucian, penyimpanan, dan penjualan material daur ulang (MDU).",
    previewUrl: "https://docs.google.com/document/d/PLACEHOLDER_KELD_ID/preview",
    editUrl:    "https://docs.google.com/document/d/PLACEHOLDER_KELD_ID/edit",
  },

  kelE: {
    label: "Kelompok E — Residu, Lindi & B3",
    warna: "#4E342E",
    icon:  "⚠️",
    deskripsi: "Prosedur penanganan residu, lindi (leachate), sampah B3 rumah tangga, dan pengangkutan residu ke TPA.",
    previewUrl: "https://docs.google.com/document/d/PLACEHOLDER_KELE_ID/preview",
    editUrl:    "https://docs.google.com/document/d/PLACEHOLDER_KELE_ID/edit",
  },

  kelF: {
    label: "Kelompok F — K3, Fasilitas & Pelaporan",
    warna: "#37474F",
    icon:  "🦺",
    deskripsi: "Prosedur kebersihan fasilitas, penggunaan APD, penanganan kecelakaan kerja, monitoring fasilitas, dan pelaporan bulanan.",
    previewUrl: "https://docs.google.com/document/d/PLACEHOLDER_KELF_ID/preview",
    editUrl:    "https://docs.google.com/document/d/PLACEHOLDER_KELF_ID/edit",
  },

  kelG: {
    label: "Kelompok G — Operasional Mesin",
    warna: "#455A64",
    icon:  "⚙️",
    deskripsi: "Panduan referensi operasional seluruh mesin TPS3R — dari motor roda tiga hingga instalasi pengolahan lindi.",
    previewUrl: "https://docs.google.com/document/d/PLACEHOLDER_KELG_ID/preview",
    editUrl:    "https://docs.google.com/document/d/PLACEHOLDER_KELG_ID/edit",
  },

  // ── BAGIAN III — Formulir ──────────────────────────────────
  bagian3: {
    label: "Bagian III — Formulir Pendukung",
    warna: "#1B5E20",
    icon:  "📄",
    deskripsi: "Formulir pencatatan harian, monitoring proses biologis, stok MDU, monitoring lindi, checklist K3, dan laporan bulanan.",
    previewUrl: "https://docs.google.com/document/d/PLACEHOLDER_BAGIAN3_ID/preview",
    editUrl:    "https://docs.google.com/document/d/PLACEHOLDER_BAGIAN3_ID/edit",
  },
};
