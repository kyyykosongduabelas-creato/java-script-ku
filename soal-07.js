const nama = "  muhammad rizki  ";

// Menghilangkan spasi di awal dan akhir
const namaBersih = nama.trim();

// Mengubah menjadi huruf besar dan huruf kecil
const hurufBesar = namaBersih.toUpperCase();
const hurufKecil = namaBersih.toLowerCase();

// Menghitung jumlah karakter setelah di-trim
const jumlahKarakter = namaBersih.length;

console.log("=== 7. String Manipulation ===");
console.log("Asli             :", `"${nama}"`);
console.log("Setelah trim()   :", `"${namaBersih}"`);
console.log("Huruf Besar      :", hurufBesar);
console.log("Huruf Kecil      :", hurufKecil);
console.log("Jumlah Karakter  :", jumlahKarakter);
