document.addEventListener('DOMContentLoaded', function () {
    const scanButton = document.getElementById('scanBarcodeButton');
    const barcodeInput = document.getElementById('barcodeInput');
    const qrReader = document.getElementById('qr-reader');
    let html5QrcodeScanner;

    // Fungsi untuk memulai scan
    const startScanning = () => {
        qrReader.style.display = 'block';

        html5QrcodeScanner = new Html5Qrcode("qr-reader");
        html5QrcodeScanner.start(
            { facingMode: "environment" }, // Kamera belakang
            { fps: 10, qrbox: 250 },
            (decodedText) => {
                barcodeInput.value = decodedText;
                stopScanning();
            },
            (errorMessage) => {
                console.warn('Error:', errorMessage);
            }
        ).catch((err) => {
            console.error('Unable to start QR Code scanner:', err);
        });
    };

    // Fungsi untuk menghentikan scan
    const stopScanning = () => {
        if (html5QrcodeScanner) {
            html5QrcodeScanner.stop().then(() => {
                qrReader.style.display = 'none';
            }).catch((err) => {
                console.error('Error stopping QR Code scanner:', err);
            });
        }
    };

    // Tombol scan barcode
    scanButton.addEventListener('click', () => {
        if (qrReader.style.display === 'none') {
            startScanning();
        } else {
            stopScanning();
        }
    });
});
