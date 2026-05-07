# Step 1 — Setup Google Cloud CLI

## 1.1 Cek Apakah gcloud CLI Sudah Terinstall

Buka terminal (Command Prompt / PowerShell / Git Bash) lalu jalankan:

```bash
gcloud --version
```

### ✅ Jika Sudah Terinstall

Akan muncul output seperti ini:

```
Google Cloud SDK 559.0.0
bq 2.1.28
core 2026.02.27
gcloud-crc32c 1.0.0
gsutil 5.35
```

→ Lanjut ke **Step 1.2**

### ❌ Jika Belum Terinstall

Akan muncul error seperti:

```
'gcloud' is not recognized as an internal or external command
```

**Cara Install (Windows):**

1. Buka halaman download: https://cloud.google.com/sdk/docs/install
2. Klik **"Windows"** → Download installer `.exe`
3. Jalankan installer, ikuti wizard-nya (Next → Next → Install)
4. Centang **"Run gcloud init"** di akhir instalasi
5. **Restart terminal** setelah instalasi selesai
6. Cek ulang dengan `gcloud --version`

> 💡 **Tips:** Pastikan centang opsi "Add to PATH" saat instalasi agar bisa dijalankan dari terminal manapun.

---

## 1.2 Cek Akun yang Sudah Login

```bash
gcloud auth list
```

### ✅ Jika Sudah Login

Akan muncul output seperti ini:

```
    Credentialed Accounts
ACTIVE  ACCOUNT
*       mthalibagus@gmail.com
```

Tanda `*` menunjukkan akun yang aktif → Lanjut ke **Step 1.3**

### ❌ Jika Belum Login

Akan muncul:

```
No credentialed accounts.
```

**Cara Login:**

```bash
gcloud auth login
```

1. Browser akan terbuka otomatis
2. Pilih akun Google kamu
3. Klik **"Allow"** untuk memberikan izin
4. Kembali ke terminal, akan muncul pesan sukses:
   ```
   You are now logged in as [email@gmail.com]
   ```
5. Cek ulang dengan `gcloud auth list`

---

## 1.3 Cek Project GCP yang Aktif

```bash
gcloud config get-value project
```

### ✅ Jika Sudah Ada Project

Akan muncul nama project:

```
project-tcc06
```

→ Setup selesai! Lanjut ke **Step 2** 🎉

### ❌ Jika Belum Ada Project

Akan muncul:

```
(unset)
```

**Cara Buat & Set Project:**

#### Opsi A: Buat Project Baru via Terminal

```bash
# Buat project baru
gcloud projects create <PROJECT_ID> --name="<NAMA_PROJECT>"

# Contoh:
gcloud projects create notes-app-tcc --name="Notes App TCC"

# Set sebagai project aktif
gcloud config set project notes-app-tcc
```

> ⚠️ `PROJECT_ID` harus unik secara global, huruf kecil, angka, dan strip saja.

#### Opsi B: Buat Project via Console (Browser)

1. Buka https://console.cloud.google.com
2. Klik dropdown project di atas → **"New Project"**
3. Isi nama project → Klik **"Create"**
4. Kembali ke terminal, set project:
   ```bash
   gcloud config set project <PROJECT_ID>
   ```

---

## 1.4 Enable APIs yang Diperlukan

Setelah project sudah di-set, aktifkan API yang dibutuhkan:

```bash
# Enable App Engine API
gcloud services enable appengine.googleapis.com

# Enable Cloud Run API
gcloud services enable run.googleapis.com

# Enable Cloud Build API (untuk build Docker image di Cloud Run)
gcloud services enable cloudbuild.googleapis.com

# Enable Artifact Registry API (untuk simpan Docker image)
gcloud services enable artifactregistry.googleapis.com
```

Cek apakah sudah aktif:

```bash
gcloud services list --enabled --filter="name:(appengine OR run OR cloudbuild OR artifactregistry)"
```

---

## 1.5 Inisialisasi App Engine

App Engine perlu diinisialisasi sekali per project:

```bash
gcloud app create --region=asia-southeast1
```

> 💡 Pilih region `asia-southeast1` (Singapore) untuk latensi terbaik dari Indonesia.

> ⚠️ **Region App Engine tidak bisa diubah setelah dibuat!** Pastikan pilih yang benar.

---

## ✅ Checklist Step 1

| No | Item                         | Command                              | Status |
|----|------------------------------|--------------------------------------|--------|
| 1  | gcloud CLI terinstall        | `gcloud --version`                   | ☐      |
| 2  | Sudah login                  | `gcloud auth list`                   | ☐      |
| 3  | Project sudah di-set         | `gcloud config get-value project`    | ☐      |
| 4  | APIs sudah di-enable         | `gcloud services list --enabled`     | ☐      |
| 5  | App Engine sudah initialized | `gcloud app create --region=...`     | ☐      |

Setelah semua checklist ✅, lanjut ke **Step 2 — Setup Database di phpMyAdmin**.
