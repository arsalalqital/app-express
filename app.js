// app.js
const express = require('express');
const app = express();
const port = 3000;

// Route untuk halaman utama
app.get('/', (req, res) => {
  res.send('Selamat datang di halaman utama!');
});

// Route untuk halaman tentang
app.get('/tentang', (req, res) => {
  res.send('Ini adalah halaman tentang kami.');
});

// Route untuk halaman kontak
app.get('/kontak', (req, res) => {
  res.send('Hubungi kami di kontak@example.com.');
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});