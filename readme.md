# Inventaris Barang PT CYB Media Group

Sebuah proyek aplikasi berbasis web untuk sistem inventaris barang PT CYB Media Group. Proyek ini dikembangkan menggunakan HTML, CSS, JavaScript, PHP, dan MySQL, tanpa menggunakan framework backend.

## Fitur Utama

1. **Manajemen Data Barang**
   - Tambah, edit, dan hapus data barang.
   - Menyimpan barcode untuk setiap barang.

2. **Barang Masuk dan Keluar**
   - Menambah catatan barang masuk dan keluar.
   - Sinkronisasi otomatis antara input barcode dan dropdown barang.

3. **Sinkronisasi Barcode**
   - Input barcode otomatis memilih barang terkait di dropdown.
   - Dropdown barang mengisi input barcode sesuai barang yang dipilih.

4. **Scan Barcode**
   - Mendukung pemindaian barcode menggunakan kamera perangkat (khusus smartphone).

5. **Manajemen Admin**
   - Tambah dan hapus pengguna admin.

6. **Feedback Pengguna**
   - Menampilkan pesan jika barcode tidak ditemukan.
   - Menampilkan status barang yang belum memiliki barcode.

## Teknologi yang Digunakan

- **Frontend**: HTML, CSS (dengan Bootstrap untuk beberapa komponen), JavaScript.
- **Backend**: PHP Native.
- **Database**: MySQL.

## Struktur Direktori

```plaintext
project-root/
|-- assets/
|   |-- img/                # Folder untuk menyimpan gambar, termasuk favicon.
|-- css/
|   |-- styles.css          # File CSS utama.
|   |-- custom-styles.css   # File CSS tambahan untuk kustomisasi.
|-- js/
|   |-- script.js           # File JavaScript untuk fungsionalitas tambahan.
|-- index.php               # Halaman utama untuk daftar barang.
|-- masuk.php               # Halaman untuk barang masuk.
|-- keluar.php              # Halaman untuk barang keluar.
|-- admin.php               # Halaman untuk kelola admin.
|-- get_barang_by_barcode.php # API untuk mencari barang berdasarkan barcode.
|-- logout.php              # Halaman logout.
|-- image/                  # Folder untuk menyimpan gambar barang.
```

## Instalasi

1. Clone repository ini:

   ```bash
   git clone https://github.com/username/repository-name.git
   ```

2. Upload file ke server hosting Anda atau gunakan server lokal seperti XAMPP/LAMP/MAMP.

3. Buat database baru di MySQL dan impor file SQL:

   ```sql
   CREATE DATABASE inventaris;
   USE inventaris;
   SOURCE database.sql;
   ```

4. Edit file `koneksi.php` untuk menyesuaikan kredensial database Anda:

   ```php
   $conn = mysqli_connect("host", "username", "password", "database_name");
   ```

5. Akses aplikasi melalui browser Anda:

   ```plaintext
   http://localhost/inventaris
   ```

## Cara Penggunaan

1. Login sebagai admin.
2. Tambah data barang dengan mengisi informasi lengkap, termasuk barcode.
3. Gunakan fitur barang masuk dan keluar untuk mencatat perubahan inventaris.
4. Gunakan scanner barcode (jika tersedia) untuk mempermudah input data.

## Catatan Penting

- Pastikan koneksi database sudah sesuai.
- Ukuran file gambar barang dibatasi maksimal 5 MB.
- Format gambar yang didukung: PNG, JPG, JPEG.

## Pengembang

- **Nama**: Nama Anda
- **Peran**: Fullstack Developer
- **Kontak**: [email@example.com](mailto:email@example.com)

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

---

Terima kasih telah menggunakan sistem inventaris ini. Jika ada saran atau masukan, silakan hubungi kami!
