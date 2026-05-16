// config.js
// ================================================================
// KONFIGURASI SOP TPS3R ELEKTRONIK
// URL Google Drive sudah dikonfigurasi — jangan ubah kecuali ada
// perubahan lokasi file di Google Drive.
// ================================================================

const SOP_CONFIG = {

  // ── BAGIAN I — Dokumen Induk ───────────────────────────────
  bagian1: {
    label:      "Bagian I — Dokumen Induk",
    warna:      "#1A3D2B",
    icon:       "📘",
    deskripsi:  "Lembar pengesahan, kata pengantar, tujuan, ruang lingkup, dasar hukum, glosarium, dan daftar SOP.",
    previewUrl: "https://docs.google.com/document/d/1cYeh7uIZhst03R-xWYqZZGga9a68gjDK/preview",
    editUrl:    "https://docs.google.com/document/d/1cYeh7uIZhst03R-xWYqZZGga9a68gjDK/edit",
  },

  // ── BAGIAN II — Kelompok A ─────────────────────────────────
  kelA: {
    label:      "Kelompok A — Pengumpulan & Penerimaan",
    warna:      "#185FA5",
    icon:       "🚛",
    deskripsi:  "Prosedur pengambilan sampah dari sumber, penerimaan di TPS3R, dan penimbangan serta pencatatan data.",
    previewUrl: "https://docs.google.com/document/d/18-jXPJD5sYBM4HpFLJh5259uJrUg8K38/preview",
    editUrl:    "https://docs.google.com/document/d/18-jXPJD5sYBM4HpFLJh5259uJrUg8K38/edit",
  },

  // ── BAGIAN II — Kelompok B ─────────────────────────────────
  kelB: {
    label:      "Kelompok B — Pemilahan",
    warna:      "#185FA5",
    icon:       "♻️",
    deskripsi:  "Prosedur pemilahan sampah secara manual dan menggunakan conveyor ke kategori organik, anorganik, residu, dan B3.",
    previewUrl: "https://docs.google.com/document/d/1S0aFtD5BoTcumvtz0GcSv9FOHzt58p2t/preview",
    editUrl:    "https://docs.google.com/document/d/1S0aFtD5BoTcumvtz0GcSv9FOHzt58p2t/edit",
  },

  // ── BAGIAN II — Kelompok C ─────────────────────────────────
  kelC: {
    label:      "Kelompok C — Pengolahan Organik",
    warna:      "#2E7D32",
    icon:       "🌱",
    deskripsi:  "Prosedur pencacahan, windrow komposting, budidaya maggot BSF, bokashi, eco enzyme, komposter drum, dan pengemasan produk.",
    previewUrl: "https://docs.google.com/document/d/1T2NNWrjHwZUUn4qXv2E23GTMEl4mzZgm/preview",
    editUrl:    "https://docs.google.com/document/d/1T2NNWrjHwZUUn4qXv2E23GTMEl4mzZgm/edit",
  },

  // ── BAGIAN II — Kelompok D ─────────────────────────────────
  kelD: {
    label:      "Kelompok D — Pengolahan Anorganik",
    warna:      "#00695C",
    icon:       "🔄",
    deskripsi:  "Prosedur sortasi lanjut, pencucian, penyimpanan, dan penjualan material daur ulang (MDU).",
    previewUrl: "https://docs.google.com/document/d/1K-6g7BHYfnKFpRax9EtjyZguDxOhf_EA/preview",
    editUrl:    "https://docs.google.com/document/d/1K-6g7BHYfnKFpRax9EtjyZguDxOhf_EA/edit",
  },

  // ── BAGIAN II — Kelompok E ─────────────────────────────────
  kelE: {
    label:      "Kelompok E — Residu, Lindi & B3",
    warna:      "#4E342E",
    icon:       "⚠️",
    deskripsi:  "Prosedur penanganan residu, lindi (leachate), sampah B3 rumah tangga, dan pengangkutan residu ke TPA.",
    previewUrl: "https://docs.google.com/document/d/1UVBDTJ2-qSKa-NGNUgn6M_cpM2gOcHWM/preview",
    editUrl:    "https://docs.google.com/document/d/1UVBDTJ2-qSKa-NGNUgn6M_cpM2gOcHWM/edit",
  },

  // ── BAGIAN II — Kelompok F ─────────────────────────────────
  kelF: {
    label:      "Kelompok F — K3, Fasilitas & Pelaporan",
    warna:      "#37474F",
    icon:       "🦺",
    deskripsi:  "Prosedur kebersihan fasilitas, penggunaan APD, penanganan kecelakaan kerja, monitoring fasilitas, dan pelaporan bulanan.",
    previewUrl: "https://docs.google.com/document/d/11sLRwEbAkp-evX80s7z6HNVEmykZe7Xe/preview",
    editUrl:    "https://docs.google.com/document/d/11sLRwEbAkp-evX80s7z6HNVEmykZe7Xe/edit",
  },

  // ── BAGIAN II — Kelompok G ─────────────────────────────────
  kelG: {
    label:      "Kelompok G — Operasional Mesin",
    warna:      "#455A64",
    icon:       "⚙️",
    deskripsi:  "Panduan referensi operasional seluruh mesin TPS3R — dari motor roda tiga hingga instalasi pengolahan lindi.",
    previewUrl: "https://docs.google.com/document/d/1ZmgJDzm-03yBmXkTeBcZMKDwdcM4RT02/preview",
    editUrl:    "https://docs.google.com/document/d/1ZmgJDzm-03yBmXkTeBcZMKDwdcM4RT02/edit",
  },

  // ── BAGIAN III — Formulir ──────────────────────────────────
  bagian3: {
    label:      "Bagian III — Formulir Pendukung",
    warna:      "#1B5E20",
    icon:       "📄",
    deskripsi:  "Formulir pencatatan harian, monitoring proses biologis, stok MDU, monitoring lindi, checklist K3, dan laporan bulanan.",
    previewUrl: "https://docs.google.com/document/d/1q0kjRP0PeCrxoZiKaAlW5MWut_UhzK_U/preview",
    editUrl:    "https://docs.google.com/document/d/1q0kjRP0PeCrxoZiKaAlW5MWut_UhzK_U/edit",
  },

};
