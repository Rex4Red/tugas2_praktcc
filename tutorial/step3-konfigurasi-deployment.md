# Step 3 — Siapkan File Konfigurasi Deployment (Revised)

Berdasarkan referensi, kita menggunakan **Skenario 2**:
- **Backend** → Cloud Run (butuh `Dockerfile`)
- **Frontend** → App Engine (butuh `app.yaml` + `cloudbuild.yaml`)

---

## 3.1 Siapkan File Backend (untuk Cloud Run)

Backend butuh **Dockerfile** agar bisa di-deploy ke Cloud Run.

### Langkah: Buat file `backend/Dockerfile`

1. Buka folder `backend/`
2. Buat file baru bernama **`Dockerfile`** (tanpa ekstensi)
3. Isi dengan:

```dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
```

### Penjelasan:

| Baris | Fungsi |
|-------|--------|
| `FROM node:22-alpine` | Image Node.js ringan |
| `WORKDIR /app` | Set folder kerja di container |
| `COPY package*.json` | Copy file dependencies dulu |
| `RUN npm install` | Install dependencies |
| `COPY . .` | Copy semua kode backend |
| `EXPOSE 3000` | Port yang digunakan Express.js |
| `CMD ["node", "index.js"]` | Jalankan server saat container start |

### Langkah: Buat file `backend/.dockerignore`

1. Di folder `backend/`, buat file **`.dockerignore`**
2. Isi dengan:

```
node_modules
.env
.env.example
.gitignore
.gcloudignore
api.rest
```

---

## 3.2 Update Backend `index.js`

Pastikan PORT menggunakan environment variable (Cloud Run akan set port-nya sendiri).

Buka `backend/index.js`, pastikan baris ini ada:

```javascript
const port = process.env.PORT || 3000;
```

> ✅ Sudah ada di kode kamu. Port default 3000, tapi Cloud Run akan override via env.

---

## 3.3 Siapkan File Frontend (untuk App Engine)

Frontend butuh **`app.yaml`** dan **`cloudbuild.yaml`** untuk deploy ke App Engine.

### Langkah: Buat file `frontend/app.yaml`

1. Buka folder `frontend/`
2. Buat file baru bernama **`app.yaml`**
3. Isi dengan:

```yaml
runtime: nodejs20
env: standard

instance_class: F1

automatic_scaling:
  max_instances: 1

handlers:
  - url: /
    static_files: index.html
    upload: index.html
  - url: /(.*)
    static_files: \1
    upload: (.*)
```

### Penjelasan:

| Field | Fungsi |
|-------|--------|
| `runtime: nodejs20` | Runtime Node.js |
| `instance_class: F1` | Instance kecil (hemat biaya) |
| `automatic_scaling` | Maks 1 instance (hemat biaya) |
| `handlers` | Serve file statis (HTML, JS, CSS) tanpa server |

### Langkah: Buat file `frontend/cloudbuild.yaml`

1. Di folder `frontend/`, buat file **`cloudbuild.yaml`**
2. Isi dengan:

```yaml
steps:
  - name: 'gcr.io/google.com/cloudsdktool/cloud-sdk'
    entrypoint: 'bash'
    args:
      - '-c'
      - 'gcloud app deploy app.yaml --quiet'
timeout: '600s'
```

### Penjelasan:

| Field | Fungsi |
|-------|--------|
| `name` | Gunakan image Cloud SDK (sudah ada gcloud) |
| `entrypoint` | Jalankan perintah bash |
| `args` | Eksekusi `gcloud app deploy app.yaml` tanpa konfirmasi |
| `timeout` | Batas waktu build 10 menit |

---

## 3.4 Update Frontend `index.js` — API_BASE

> ⚠️ **Ini akan diupdate setelah backend berhasil di-deploy ke Cloud Run dan kita tahu URL-nya.**

Yang akan diubah nanti:

```diff
-const API_BASE = `${window.location.origin}/api/v1/notes`;
+const API_BASE = "https://BACKEND_URL/api/v1/notes";
```

---

## 3.5 Bersihkan File dari Plan Lama

Karena kita ganti skenario, hapus file config dari plan lama yang tidak terpakai:

| File | Aksi |
|------|------|
| `backend/app.yaml` | ❌ Hapus (backend ke Cloud Run, bukan App Engine) |
| `backend/.gcloudignore` | ❌ Hapus (tidak perlu untuk Cloud Run) |
| `frontend/Dockerfile` | ❌ Hapus (frontend ke App Engine, bukan Cloud Run) |
| `frontend/nginx.conf` | ❌ Hapus (tidak perlu untuk App Engine) |
| `frontend/.dockerignore` | ❌ Hapus (tidak perlu untuk App Engine) |

---

## 3.6 Struktur Akhir

```
backend/
├── Dockerfile           ← [BARU] Untuk Cloud Run
├── .dockerignore        ← [BARU] Exclude node_modules dll
├── index.js             ← [DIUBAH] CORS + hapus static serve
├── package.json         ← [DIUBAH] Tambah engines
├── config/database.js
├── controllers/noteController.js
├── models/noteModels.js
├── routes/noteRoutes.js
└── schema/Note.js

frontend/
├── app.yaml             ← [BARU] Untuk App Engine
├── cloudbuild.yaml      ← [BARU] Untuk Cloud Build trigger
├── index.html           ← [DIUBAH] Footer Tugas 3
├── index.js             ← [AKAN DIUBAH] API_BASE nanti
└── style.css
```

---

## ✅ Checklist Step 3

| No | Item | Status |
|----|------|--------|
| 1 | `backend/Dockerfile` dibuat | ☐ |
| 2 | `backend/.dockerignore` dibuat | ☐ |
| 3 | `frontend/app.yaml` dibuat | ☐ |
| 4 | `frontend/cloudbuild.yaml` dibuat | ☐ |
| 5 | File plan lama dihapus | ☐ |
| 6 | Screenshot `Dockerfile` (backend) diambil | ☐ |
| 7 | Screenshot `app.yaml` (frontend) diambil | ☐ |

Setelah semua ✅, lanjut ke **Step 4 — Setup GitHub Branches**.
