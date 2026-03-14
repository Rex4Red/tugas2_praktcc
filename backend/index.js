// Import Package dan File
const express = require("express");
const path = require("path");
const sequelize = require("./config/database");
const noteRoutes = require("./routes/noteRoutes");

// Inisialisasi Express dan Cors
const app = express();
const cors = require("cors");

// Izinkan semua origin (untuk development)
app.use(cors());

// Middleware untuk parsing JSON
app.use(express.json());

// Serve frontend static files
app.use(express.static(path.join(__dirname, "../frontend")));

// Route dasar untuk testing API
app.get("/api", (req, res) => {
  res.send("Hello World! - Notes API is running");
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
