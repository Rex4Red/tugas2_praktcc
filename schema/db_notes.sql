-- =========================================
-- Database: notes_db
-- Aplikasi Notes - Praktikum TCC 2025/2026
-- =========================================

CREATE DATABASE IF NOT EXISTS `notes_db`;
USE `notes_db`;

-- -----------------------------------------
-- Struktur Tabel: Notes
-- -----------------------------------------
DROP TABLE IF EXISTS `Notes`;

CREATE TABLE `Notes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `judul` VARCHAR(255) NOT NULL,
  `isi` TEXT NOT NULL,
  `tanggal_dibuat` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `createdAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- -----------------------------------------
-- Contoh Data Awal
-- -----------------------------------------
INSERT INTO `Notes` (`judul`, `isi`, `tanggal_dibuat`, `createdAt`, `updatedAt`) VALUES
('Catatan Pertama', 'Ini adalah contoh catatan pertama yang dibuat untuk testing aplikasi notes.', NOW(), NOW(), NOW()),
('Belajar Express.js', 'Express.js adalah framework Node.js untuk membuat REST API. Sangat mudah digunakan!', NOW(), NOW(), NOW()),
('Tugas Praktikum TCC', 'Membuat aplikasi notes fullstack dengan Express.js + MySQL + HTML/CSS/JS.', NOW(), NOW(), NOW());
