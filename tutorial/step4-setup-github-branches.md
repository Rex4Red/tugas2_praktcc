# Step 4 — Setup GitHub Branches

Sesuai referensi, kita perlu membuat **2 branch terpisah** di GitHub:
- `be_notes_paas` → Berisi kode **backend** saja (untuk Cloud Run)
- `fe_notes_paas` → Berisi kode **frontend** saja (untuk App Engine)

---

## 4.1 Pastikan Kode Terbaru di `main`

### Langkah:

1. Buka terminal
2. Masuk ke folder project:
   ```bash
   cd "e:\Kuliah\Semester 6\prak tcc\Tugas 2 AG"
   ```
3. Cek status git:
   ```bash
   git status
   ```
4. Jika ada perubahan yang belum di-commit, commit dulu:
   ```bash
   git add .
   git commit -m "update: siapkan konfigurasi untuk Tugas 3 deployment"
   git push origin main
   ```

---

## 4.2 Buat Branch `be_notes_paas` (Backend)

Branch ini hanya berisi **file backend** + **Dockerfile**.

### Langkah:

1. Buat branch baru dari main:
   ```bash
   git checkout -b be_notes_paas
   ```

2. Hapus folder frontend (hanya di branch ini, tidak mempengaruhi main):
   ```bash
   # Windows CMD
   rmdir /s /q frontend
   
   # PowerShell
   Remove-Item -Recurse -Force frontend
   ```

3. Pindahkan isi folder `backend/` ke root (opsional, tapi lebih rapi):
   
   **Opsi A: Biarkan struktur tetap di folder `backend/`**
   
   Jika kamu biarkan di folder `backend/`, nanti di Cloud Run perlu atur source directory.
   
   **Opsi B: Pindahkan ke root** (direkomendasikan, sesuai referensi)
   
   ```bash
   # Salin isi backend ke root
   xcopy backend\* . /s /e /y
   
   # Hapus folder backend
   rmdir /s /q backend
   ```

4. Hapus file yang tidak diperlukan:
   ```bash
   # Hapus file yg tidak perlu di branch backend
   del notes.sql 2>nul
   ```

5. Pastikan file-file berikut ada di root branch:
   ```
   Dockerfile
   .dockerignore
   index.js
   package.json
   package-lock.json
   config/database.js
   controllers/noteController.js
   models/noteModels.js
   routes/noteRoutes.js
   schema/Note.js
   ```

6. Commit dan push:
   ```bash
   git add .
   git commit -m "setup: backend untuk deploy ke Cloud Run"
   git push origin be_notes_paas
   ```

---

## 4.3 Buat Branch `fe_notes_paas` (Frontend)

Branch ini hanya berisi **file frontend** + **app.yaml** + **cloudbuild.yaml**.

### Langkah:

1. Kembali ke branch main dulu:
   ```bash
   git checkout main
   ```

2. Buat branch baru:
   ```bash
   git checkout -b fe_notes_paas
   ```

3. Hapus folder backend:
   ```bash
   # PowerShell
   Remove-Item -Recurse -Force backend
   ```

4. Pindahkan isi folder `frontend/` ke root (sesuai referensi):
   ```bash
   xcopy frontend\* . /s /e /y
   rmdir /s /q frontend
   ```

5. Hapus file yang tidak diperlukan:
   ```bash
   del notes.sql 2>nul
   ```

6. Pastikan file-file berikut ada di root branch:
   ```
   app.yaml
   cloudbuild.yaml
   index.html
   index.js
   style.css
   ```

7. Commit dan push:
   ```bash
   git add .
   git commit -m "setup: frontend untuk deploy ke App Engine"
   git push origin fe_notes_paas
   ```

---

## 4.4 Kembali ke Main

Setelah kedua branch dibuat, kembali ke main:

```bash
git checkout main
```

---

## 4.5 Verifikasi di GitHub

Buka GitHub di browser: https://github.com/Rex4Red/tugas2_praktcc

### Cek branch:

1. Klik dropdown **"main"** (branch selector)
2. Harus terlihat 3 branch:
   - `main` → Kode lengkap (backend + frontend)
   - `be_notes_paas` → Hanya kode backend + Dockerfile
   - `fe_notes_paas` → Hanya kode frontend + app.yaml + cloudbuild.yaml

### Cek isi branch `be_notes_paas`:
1. Switch ke branch `be_notes_paas`
2. Pastikan ada: `Dockerfile`, `index.js`, `package.json`, `config/`, `controllers/`, dll
3. Pastikan **TIDAK ada** folder `frontend/`

### Cek isi branch `fe_notes_paas`:
1. Switch ke branch `fe_notes_paas`
2. Pastikan ada: `app.yaml`, `cloudbuild.yaml`, `index.html`, `index.js`, `style.css`
3. Pastikan **TIDAK ada** folder `backend/`

> 📸 **Screenshot kedua branch di GitHub untuk laporan!**

---

## ✅ Checklist Step 4

| No | Item | Status |
|----|------|--------|
| 1 | Perubahan di main sudah di-commit & push | ☐ |
| 2 | Branch `be_notes_paas` dibuat & push | ☐ |
| 3 | Branch `fe_notes_paas` dibuat & push | ☐ |
| 4 | `be_notes_paas` hanya berisi backend + Dockerfile | ☐ |
| 5 | `fe_notes_paas` hanya berisi frontend + app.yaml + cloudbuild.yaml | ☐ |
| 6 | Verifikasi di GitHub → 3 branch terlihat | ☐ |
| 7 | Screenshot branches di GitHub | ☐ |

Setelah semua ✅, lanjut ke **Step 5 — Deploy Backend ke Cloud Run via GCP Console**.
