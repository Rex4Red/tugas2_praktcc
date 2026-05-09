// Import Package dan File
const express = require("express");
const sequelize = require("./config/database");
const noteRoutes = require("./routes/noteRoutes");

// Inisialisasi Express dan Cors
const app = express();
const cors = require("cors");

// CORS: izinkan frontend dari App Engine
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

// Middleware untuk parsing JSON
app.use(express.json());

// Route dasar untuk testing API
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Selamat datang di Notes API!",
    endpoints: {
      "GET /api/v1/notes": "Lihat semua catatan",
      "GET /api/v1/notes/:id": "Lihat detail catatan",
      "POST /api/v1/notes": "Tambah catatan baru",
      "PUT /api/v1/notes/:id": "Edit catatan",
      "DELETE /api/v1/notes/:id": "Hapus catatan"
    }
  });
});

app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Selamat datang di Notes API!",
    endpoints: {
      "GET /api/v1/notes": "Lihat semua catatan",
      "GET /api/v1/notes/:id": "Lihat detail catatan",
      "POST /api/v1/notes": "Tambah catatan baru",
      "PUT /api/v1/notes/:id": "Edit catatan",
      "DELETE /api/v1/notes/:id": "Hapus catatan"
    }
  });
});

// Setting Routes
require("./schema/Note"); // Untuk generate Tabel Notes
app.use("/api/v1/notes", noteRoutes); // Untuk setting routes notes

// Sync Database dan Jalankan Server
const port = process.env.PORT || 3000;
sequelize.sync().then(() => {
  console.log("Database synced");
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
