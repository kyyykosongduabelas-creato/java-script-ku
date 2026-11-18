// Data katalog produk
const katalogProduk = [
  { nama: "Mouse", harga: 50000 },
  { nama: "Keyboard", harga: 100000 },
  { nama: "Monitor", harga: 1500000 },
  { nama: "Headset", harga: 200000 }
];

// Simulasi daftar belanjaan pengguna
const keranjangBelanja = [
  { namaProduk: "Mouse", jumlah: 2 },
  { namaProduk: "Headset", jumlah: 1 },
  { namaProduk: "Keyboard", jumlah: 3 }
];

function prosesKasir(keranjang) {
  let totalBelanja = 0;
  const rincianStruk = [];

  for (const item of keranjang) {
    // Cari produk berdasarkan nama (case-insensitive)
    const produkDitemukan = katalogProduk.find(
      (p) => p.nama.toLowerCase() === item.namaProduk.toLowerCase()
    );

    if (produkDitemukan) {
      const subtotal = produkDitemukan.harga * item.jumlah;
      totalBelanja += subtotal;

      rincianStruk.push({
        nama: produkDitemukan.nama,
        hargaSatuan: produkDitemukan.harga,
        jumlah: item.jumlah,
        subtotal: subtotal
      });
    } else {
      console.log(`Produk "${item.namaProduk}" tidak ditemukan di katalog.`);
    }
  }

  // Cek diskon 10% jika total belanja > 500.000
  const diskon = totalBelanja > 500000 ? totalBelanja * 0.10 : 0;
  const totalAkhir = totalBelanja - diskon;

  // Cetak Struk Pembelian
  console.log("========================================");
  console.log("            STRUK PEMBELIAN             ");
  console.log("========================================");
  rincianStruk.forEach((item) => {
    console.log(
      `${item.nama} (${item.jumlah}x @ Rp${item.hargaSatuan.toLocaleString("id-ID")}) \t: Rp${item.subtotal.toLocaleString("id-ID")}`
    );
  });
  console.log("----------------------------------------");
  console.log(`Total Belanja    : Rp${totalBelanja.toLocaleString("id-ID")}`);
  console.log(`Diskon (10%)     : Rp${diskon.toLocaleString("id-ID")}`);
  console.log(`Total Pembayaran : Rp${totalAkhir.toLocaleString("id-ID")}`);
  console.log("========================================");
}

// Menjalankan program kasir
prosesKasir(keranjangBelanja);
