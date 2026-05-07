# Step 2 — Setup Database di phpMyAdmin

## 2.1 Akses phpMyAdmin

1. Buka browser dan akses: **https://phpmyadmin.co/**
2. Login dengan kredensial berikut:

| Field    | Value             |
|----------|-------------------|
| Server   | `34.172.113.167`  |
| Username | `admin`           |
| Password | `mypassword`      |

3. Klik **"Login"** atau **"Go"**

---

## 2.2 Buat Database Baru

Setelah berhasil login:

1. Klik tab **"Databases"** di bagian atas
2. Di bagian **"Create database"**, isi:
   - **Database name:** `notes_123230161`
   - **Collation:** `utf8mb4_general_ci`
3. Klik **"Create"**
4. **Screenshot** halaman ini untuk laporan!

> ⚠️ **PENTING:**
> - Gunakan HANYA database `notes_123230161` (sesuai NIM)
> - JANGAN hapus, ubah, atau gunakan database milik mahasiswa lain
> - JANGAN ganti password atau buat user baru

---

## 2.3 Verifikasi Database

Setelah database dibuat:

1. Klik database `notes_123230161` di sidebar kiri
2. Akan terlihat pesan **"No tables found in database"** — ini normal!
3. Tabel `Notes` akan otomatis dibuat oleh Sequelize saat backend pertama kali dijalankan

> 💡 **Kenapa tidak buat tabel manual?**
> Karena di backend kamu ada `sequelize.sync()` yang otomatis membuat tabel
> berdasarkan schema `Note.js` (judul, isi, tanggal_dibuat).

---

## 2.4 Test Koneksi dari Lokal (Opsional)

Sebelum deploy, kamu bisa test koneksi database dari laptop dulu.

### Update file `backend/.env`:

```env
DB_NAME=notes_123230161
DB_USER=admin
DB_PASS=mypassword
DB_HOST=34.172.113.167
PORT=3010
```

### Jalankan backend:

```bash
cd backend
npm start
```

Jika muncul **"Database synced"** dan **"Server running on port 3010"**, berarti koneksi ke database remote berhasil! ✅

Cek di phpMyAdmin → database `notes_123230161` → seharusnya tabel `Notes` sudah muncul.

---

## ✅ Checklist Step 2

| No | Item                              | Status |
|----|-----------------------------------|--------|
| 1  | Login ke phpMyAdmin berhasil      | ☐      |
| 2  | Database `notes_123230161` dibuat | ☐      |
| 3  | Screenshot database diambil       | ☐      |
| 4  | Test koneksi lokal berhasil       | ☐      |

Setelah semua checklist ✅, lanjut ke **Step 3 — Siapkan File Konfigurasi Deployment**.
