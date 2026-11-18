const nilaiMahasiswa = 88;
let predikat = "";

if (nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
  predikat = "Nilai tidak valid (harus 0–100)";
} else if (nilaiMahasiswa >= 85) {
  predikat = "A";
} else if (nilaiMahasiswa >= 75) {
  predikat = "B";
} else if (nilaiMahasiswa >= 65) {
  predikat = "C";
} else if (nilaiMahasiswa >= 50) {
  predikat = "D";
} else {
  predikat = "E";
}

console.log("=== 3. Predikat Nilai ===");
console.log(`Nilai: ${nilaiMahasiswa} -> Predikat: ${predikat}`);
