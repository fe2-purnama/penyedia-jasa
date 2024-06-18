-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 17 Jun 2024 pada 23.37
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_home_services`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_login`
--

CREATE TABLE `tbl_login` (
  `login_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `access_token` text NOT NULL,
  `devices_ip` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_login`
--

INSERT INTO `tbl_login` (`login_id`, `user_id`, `access_token`, `devices_ip`) VALUES
(1, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImRheWF0MTIiLCJlbWFpbCI6ImRheWF0MTJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MCIsImNyZWF0ZV9hdCI6IjIwMjQtMDYtMTdUMTI6NTM6MDEuMDAwWiIsIm5vX3RlbHBvbiI6ODEyMzU0NTU1fV0sImlhdCI6MTcxODYyOTc0MiwiZXhwIjoxNzE4NjMxMjQyfQ.iuEkv28xkaXlFARAubrktXUMFzdZ7HtH8-stEZfTqB4', '192.168.1.6'),
(2, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImRheWF0MTIiLCJlbWFpbCI6ImRheWF0MTJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MCIsImNyZWF0ZV9hdCI6IjIwMjQtMDYtMTdUMTI6NTM6MDEuMDAwWiIsIm5vX3RlbHBvbiI6ODEyMzU0NTU1fV0sImlhdCI6MTcxODYyOTg4NSwiZXhwIjoxNzE4NjMxMzg1fQ.JH-_3nSKAMSGpvCnLEWrGFCQnCBJ0vGTd4xiiQPfS88', '192.168.1.6'),
(3, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImRheWF0MTIiLCJlbWFpbCI6ImRheWF0MTJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MCIsInJvbGUiOiJwZW55ZWRpYV9qYXNhIiwiY3JlYXRlX2F0IjoiMjAyNC0wNi0xN1QxMjo1MzowMS4wMDBaIiwibm9fdGVscG9uIjo4MTIzNTQ1NTV9XSwiaWF0IjoxNzE4NjQxMjk5LCJleHAiOjE3MTg2NDI3OTl9.6TEy3tqQncQbKjssKvCxrj-xT655t_dzDmNzsf5CU5A', '192.168.1.6'),
(4, 2, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJ1c2VyX2lkIjoyLCJ1c2VybmFtZSI6ImRheWF0MTIiLCJlbWFpbCI6ImRheWF0MTJAZ21haWwuY29tIiwicGFzc3dvcmQiOiIyMDJjYjk2MmFjNTkwNzViOTY0YjA3MTUyZDIzNGI3MCIsInJvbGUiOiJwZW55ZWRpYV9qYXNhIiwiY3JlYXRlX2F0IjoiMjAyNC0wNi0xN1QxMjo1MzowMS4wMDBaIiwibm9fdGVscG9uIjo4MTIzNTQ1NTV9XSwiaWF0IjoxNzE4NjQxNDE1LCJleHAiOjE3MTg2NDI5MTV9.otWsXX86kX3-M88XpEGIuviz1yAeMRWXzTMwhLcG5Zc', '192.168.1.6'),
(5, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6Im1hcmxvMjIiLCJlbWFpbCI6Im1hcmxvMjJAZ21haWwuY29tIiwicGFzc3dvcmQiOiJlYTE2ZjY1OTc5MTNlZDc1MWQ0YmQ4ZjUwM2VjNGZmMSIsInJvbGUiOiJwZW55ZWRpYV9qYXNhIiwiY3JlYXRlX2F0IjoiMjAyNC0wNi0xN1QxNjoyNToyMS4wMDBaIiwibm9fdGVscG9uIjoyMTQ3NDgzNjQ3fV0sImlhdCI6MTcxODY0MTU2MCwiZXhwIjoxNzE4NjQzMDYwfQ.fvB-j-wrgLw6IhlJr1q6idV_y_kmNW0ZCld5JPFIuv8', '192.168.1.6'),
(6, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6ImhhZGk0NCIsImVtYWlsIjoiaGFkaTQ0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiN2ZiOWM3NTkwZWQ5YjAwOTdkYzBiMTlmYzYxZDViOTgiLCJyb2xlIjoicGVueWVkaWFfamFzYSIsImNyZWF0ZV9hdCI6IjIwMjQtMDYtMTdUMTY6NDc6MzguMDAwWiIsIm5vX3RlbHBvbiI6MjE0NzQ4MzY0N31dLCJpYXQiOjE3MTg2NDI4ODMsImV4cCI6MTcxODY0NDM4M30.zyDxoAjFBHuVSQyh59NbsoILmAWDrVp9jFEOOCC0slY', '192.168.1.6'),
(7, 3, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6Im1hcmxvMjIiLCJlbWFpbCI6Im1hcmxvMjJAZ21haWwuY29tIiwicGFzc3dvcmQiOiJlYTE2ZjY1OTc5MTNlZDc1MWQ0YmQ4ZjUwM2VjNGZmMSIsInJvbGUiOiJwZW55ZWRpYV9qYXNhIiwiY3JlYXRlX2F0IjoiMjAyNC0wNi0xN1QxNjoyNToyMS4wMDBaIiwibm9fdGVscG9uIjoyMTQ3NDgzNjQ3fV0sImlhdCI6MTcxODY0Mjk0MywiZXhwIjoxNzE4NjQ0NDQzfQ.S1_9IpsAFMyBcMucMFLf15q6oSTsI5apgcX_OZvP4Q8', '192.168.1.6'),
(8, 4, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJ1c2VyX2lkIjo0LCJ1c2VybmFtZSI6ImhhZGk0NCIsImVtYWlsIjoiaGFkaTQ0QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiN2ZiOWM3NTkwZWQ5YjAwOTdkYzBiMTlmYzYxZDViOTgiLCJyb2xlIjoia29uc3VtZW4iLCJjcmVhdGVfYXQiOiIyMDI0LTA2LTE3VDE2OjUwOjAxLjAwMFoiLCJub190ZWxwb24iOjIxNDc0ODM2NDd9XSwiaWF0IjoxNzE4NjQzMDE4LCJleHAiOjE3MTg2NDQ1MTh9.nVtEHWI_1LVpzdoVuhpuPsBSZC9z7eJwYrCdZuRiwVI', '192.168.1.6'),
(9, 5, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3dzIjpbeyJ1c2VyX2lkIjo1LCJ1c2VybmFtZSI6ImFyaTQ0IiwiZW1haWwiOiJhcmk0NEBnbWFpbC5jb20iLCJwYXNzd29yZCI6IjdmYjljNzU5MGVkOWIwMDk3ZGMwYjE5ZmM2MWQ1Yjk4Iiwicm9sZSI6InBlbnllZGlhX2phc2EiLCJjcmVhdGVfYXQiOiIyMDI0LTA2LTE3VDIxOjIxOjMzLjAwMFoiLCJub190ZWxwb24iOjIxNDc0ODM2NDd9XSwiaWF0IjoxNzE4NjU5MzIyLCJleHAiOjE3MTg2NjA4MjJ9.KRK6X_U1hY-lFy3cGFlgT65QMC9CSmn-pMdsYPdXC3A', '192.168.1.6');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_order`
--

CREATE TABLE `tbl_order` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `services_id` int(11) DEFAULT NULL,
  `address` varchar(250) NOT NULL,
  `message` varchar(250) NOT NULL,
  `order_date` date NOT NULL,
  `order_status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_reviews`
--

CREATE TABLE `tbl_reviews` (
  `review_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `order_id` int(11) DEFAULT NULL,
  `service_id` int(11) DEFAULT NULL,
  `reviews` text NOT NULL,
  `rating` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_services`
--

CREATE TABLE `tbl_services` (
  `services_id` int(11) NOT NULL,
  `nama_jasa` varchar(50) NOT NULL,
  `img_url` varchar(50) NOT NULL,
  `deskripsi` text NOT NULL,
  `harga` float NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_services`
--

INSERT INTO `tbl_services` (`services_id`, `nama_jasa`, `img_url`, `deskripsi`, `harga`, `status`) VALUES
(1, 'Pembersihan Rumah', 'https://example.com/img/pembersihan_rumah.jpg', 'Layanan pembersihan rumah secara menyeluruh termasuk ruang tamu, kamar tidur, dan dapur.', 127, 0),
(2, 'Pemasangan AC', 'https://example.com/img/pemasangan_ac.jpg', 'Pemasangan dan perawatan AC untuk semua tipe dan merk dengan garansi.', 127, 0),
(3, 'Perbaikan Listrik', 'https://example.com/img/perbaikan_listrik.jpg', 'Layanan perbaikan dan instalasi listrik untuk rumah Anda dengan standar keamanan tinggi.', 127, 0),
(4, 'Tukang Ledeng', 'https://example.com/img/tukang_ledeng.jpg', 'Layanan perbaikan dan pemasangan pipa air serta sistem drainase.', 127, 0),
(5, 'Perawatan Taman', 'https://example.com/img/perawatan_taman.jpg', 'Layanan perawatan taman termasuk pemangkasan rumput, pemupukan, dan penanaman bunga.', 127, 0),
(6, 'Perbaikan Atap', 'https://example.com/img/perbaikan_atap.jpg', 'Layanan perbaikan dan penggantian atap yang bocor atau rusak.', 127, 0),
(7, 'Pengecatan Rumah', 'https://example.com/img/pengecatan_rumah.jpg', 'Layanan pengecatan dinding dalam dan luar rumah dengan berbagai pilihan warna.', 127, 0),
(8, 'Cuci Sofa dan Karpet', 'https://example.com/img/cuci_sofa_karpet.jpg', 'Layanan pencucian sofa dan karpet menggunakan teknik steam cleaning.', 127, 0),
(14, 'Sedot WC', 'sedotwc.jpg', 'Sedot Wc oleh profesional yang berpengalaman', 400000, 1);

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_users`
--

CREATE TABLE `tbl_users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role` enum('penyedia_jasa','konsumen') NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `no_telpon` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_users`
--

INSERT INTO `tbl_users` (`user_id`, `username`, `email`, `password`, `role`, `create_at`, `no_telpon`) VALUES
(2, 'dayat12', 'dayat12@gmail.com', '202cb962ac59075b964b07152d234b70', 'penyedia_jasa', '2024-06-17 12:53:01', 812354555),
(3, 'marlo22', 'marlo22@gmail.com', 'ea16f6597913ed751d4bd8f503ec4ff1', 'penyedia_jasa', '2024-06-17 16:25:21', 2147483647),
(4, 'hadi44', 'hadi44@gmail.com', '7fb9c7590ed9b0097dc0b19fc61d5b98', 'konsumen', '2024-06-17 16:50:01', 2147483647),
(5, 'ari44', 'ari44@gmail.com', '7fb9c7590ed9b0097dc0b19fc61d5b98', 'penyedia_jasa', '2024-06-17 21:21:33', 2147483647);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tbl_login`
--
ALTER TABLE `tbl_login`
  ADD PRIMARY KEY (`login_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indeks untuk tabel `tbl_order`
--
ALTER TABLE `tbl_order`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `o_user_id` (`user_id`),
  ADD KEY `o_services_id` (`services_id`);

--
-- Indeks untuk tabel `tbl_reviews`
--
ALTER TABLE `tbl_reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `u_order_id` (`order_id`),
  ADD KEY `u_services_id` (`service_id`),
  ADD KEY `u_user_id` (`user_id`);

--
-- Indeks untuk tabel `tbl_services`
--
ALTER TABLE `tbl_services`
  ADD PRIMARY KEY (`services_id`);

--
-- Indeks untuk tabel `tbl_users`
--
ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tbl_login`
--
ALTER TABLE `tbl_login`
  MODIFY `login_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT untuk tabel `tbl_order`
--
ALTER TABLE `tbl_order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tbl_reviews`
--
ALTER TABLE `tbl_reviews`
  MODIFY `review_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT untuk tabel `tbl_services`
--
ALTER TABLE `tbl_services`
  MODIFY `services_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT untuk tabel `tbl_users`
--
ALTER TABLE `tbl_users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `tbl_login`
--
ALTER TABLE `tbl_login`
  ADD CONSTRAINT `tbl_login_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`user_id`);

--
-- Ketidakleluasaan untuk tabel `tbl_order`
--
ALTER TABLE `tbl_order`
  ADD CONSTRAINT `o_services_id` FOREIGN KEY (`services_id`) REFERENCES `tbl_services` (`services_id`),
  ADD CONSTRAINT `o_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`user_id`);

--
-- Ketidakleluasaan untuk tabel `tbl_reviews`
--
ALTER TABLE `tbl_reviews`
  ADD CONSTRAINT `u_order_id` FOREIGN KEY (`order_id`) REFERENCES `tbl_order` (`order_id`),
  ADD CONSTRAINT `u_services_id` FOREIGN KEY (`service_id`) REFERENCES `tbl_services` (`services_id`),
  ADD CONSTRAINT `u_user_id` FOREIGN KEY (`user_id`) REFERENCES `tbl_users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
