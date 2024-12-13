document.addEventListener('DOMContentLoaded', function () {
    const barcodeInput = document.getElementById('barcodeInputKeluar');
    const barangSelect = document.getElementById('barangSelectorKeluar');

    $('#myModal').on('shown.bs.modal', function () {
        var barcodeInput = document.getElementById('barcodeInputKeluar');
        barcodeInput.focus(); // Fokuskan ke input barcode
        barcodeInput.select(); // Pilih teks di dalam input (jika ada)
    });

    barcodeInput.addEventListener('input', function () {
        const barcode = barcodeInput.value;

        // Kirim request untuk mendapatkan data berdasarkan barcode
        fetch('get_barang_by_barcode.php?barcode=' + barcode)
            .then(response => response.json())
            .then(data => {
                // Hapus opsi sementara jika ada sebelumnya
                const notFoundOption = barangSelect.querySelector('option[value="not-found"]');
                if (notFoundOption) {
                    notFoundOption.remove();
                }

                if (data && data.idbarang) {
                    // Pilih barang yang sesuai
                    barangSelect.value = data.idbarang;
                } else {
                    // Tambahkan opsi sementara "Barang Tidak Ditemukan"
                    const option = document.createElement('option');
                    option.value = "not-found";
                    option.textContent = "Barang Tidak Ditemukan";
                    option.disabled = true;
                    option.selected = true;
                    barangSelect.appendChild(option);
                }
            })
            .catch(error => console.error('Error:', error));
    });

    // Event listener untuk perubahan pada dropdown barang
    barangSelectorKeluar.addEventListener('change', function () {
        const selectedOption = barangSelect.options[barangSelect.selectedIndex]; // Ambil opsi yang dipilih
        const barcode = selectedOption.getAttribute('data-barcode'); // Ambil data-barcode dari opsi

        if (barcode) {
            barcodeInputKeluar.value = barcode; // Isi input barcode sesuai barang yang dipilih
        } else {
            barcodeInputKeluar.value = ''; // Reset input jika barang tidak memiliki barcode
        }
    });
});
