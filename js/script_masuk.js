document.addEventListener('DOMContentLoaded', function () {
    const barcodeInput = document.getElementById('barcodeInput');
    const barangSelect = document.getElementById('barangSelector');

    // Fokus dan auto select saat modal terbuka
    $('#myModal').on('shown.bs.modal', function () {
        barcodeInput.focus();
        barcodeInput.select();
    });

    // Ketika barcode diinput
    barcodeInput.addEventListener('input', function () {
        const barcode = barcodeInput.value.trim();

        if (barcode) {
            fetch('get_barang_by_barcode.php?barcode=' + barcode)
                .then(response => response.json())
                .then(data => {
                    // Hapus opsi sementara jika ada sebelumnya
                    const notFoundOption = barangSelect.querySelector('option[value="not-found"]');
                    if (notFoundOption) notFoundOption.remove();

                    if (data && data.idbarang) {
                        barangSelect.value = data.idbarang; // Pilih item yang sesuai
                    } else {
                        // Tambahkan opsi "Barang Tidak Ditemukan" sementara
                        const option = document.createElement('option');
                        option.value = "not-found";
                        option.textContent = "Barang Tidak Ditemukan";
                        option.disabled = true;
                        option.selected = true;
                        barangSelect.appendChild(option);
                    }
                })
                .catch(error => console.error('Error:', error));
        }
    });

    // Ketika barang di dropdown dipilih
    barangSelect.addEventListener('change', function () {
        const selectedOption = barangSelect.options[barangSelect.selectedIndex];
        const barcode = selectedOption.getAttribute('data-barcode');

        if (barcode) {
            barcodeInput.value = barcode; // Isi input barcode sesuai barang yang dipilih
        } else {
            barcodeInput.value = ''; // Reset input jika barang tidak memiliki barcode
        }
    });
});
