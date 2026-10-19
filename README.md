# Sembakoi

Fondasi website pencatatan stok Sembakoi untuk barang sembako dan frozen food.

## Struktur

- `index.html` — halaman pencatatan dengan hero, dua bagian stok, panduan, footer, dan tombol Selesai.
- `styles.css` — layout responsif dan implementasi komponen UI dasar.
- `theme.css` — token design system dark, frosted glass, typography, gradient hero, dan kontrol stok.
- `app.js` — daftar 113 barang SEMBAKO dan 16 barang FROZEN FOOD, input jumlah, satuan, penyimpanan lokal, pencarian, dan penyalinan teks.
- `favicon.svg` — identitas favicon sederhana.
- `site.webmanifest` — metadata instalasi aplikasi web.
- `robots.txt` — aturan crawling dasar.

## Menjalankan

Tidak membutuhkan build tool atau dependency eksternal. Buka `index.html` langsung di browser, atau gunakan static server:

```bash
python -m http.server 8000
```

Lalu buka `http://localhost:8000`.

## Catatan implementasi

- Data awal mengikuti daftar stok terbaru yang diberikan. Nilai `0` tetap dianggap sebagai stok yang sengaja dicatat.
- Urutan barang berasal dari daftar sumber dan tidak diubah saat pencarian, pengeditan, atau refresh.
- Perubahan jumlah dan satuan disimpan otomatis di `localStorage` dengan key `sembakoi-stock-v2`.
- Kartu stok memakai foto ilustrasi berdasarkan kelompok barang dan tetap ringan dengan lazy loading.
- Tombol **Salin update** hanya memasukkan barang yang sudah memiliki jumlah ke teks `UPDATE STOK SEMBAKO`, lalu menyalinnya ke clipboard.
- Foto Unsplash hanya digunakan sebagai ilustrasi visual; data stok tidak bergantung pada foto.
