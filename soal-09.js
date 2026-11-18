const mahasiswa = [
  { nama: "Andi", nilai: 85 },
  { nama: "Budi", nilai: 60 },
  { nama: "Citra ", nilai: 90 },
  { nama: "Doni", nilai: 70 },
  { nama: "Eka", nilai: 95 }
];

// Filter mahasiswa lulus dan tidak lulus
const lulus = mahasiswa.filter((m) => m.nilai >= 75);
const tidakLulus = mahasiswa.filter((m) => m.nilai < 75);

// Urutkan berdasarkan nilai tertinggi (descending) menggunakan spread [...] agar array asli aman
const urutTertinggi = [...mahasiswa].sort((a, b) => b.nilai - a.nilai);

console.log("=== 9. Array of Objects ===");
console.log("Mahasiswa Lulus       :", lulus);
console.log("Mahasiswa Tidak Lulus :", tidakLulus);
console.log("Jumlah Lulus          :", lulus.length, "orang");
console.log("Urutan Nilai Tertinggi:", urutTertinggi);
