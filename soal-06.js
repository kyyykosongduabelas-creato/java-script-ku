const nilai =[85,70,90,65,75,80];

// Menampilkan seluruh nilai
console.log("=== 6. Pengolahan Array Nilai ===");
console.log("Seluruh Nilai   :", nilai.join(", "));

// Nilai tertinggi dan terendah
const tertinggi = Math.max(...nilai);
const terendah = Math.min(...nilai);

// Menghitung rata-rata
const totalNilai = nilai.reduce((acc, curr) => acc + curr, 0);
const rataRata = totalNilai / nilai.length;

// Menghitung jumlah mahasiswa lulus (>= 75)
const jumlahLulus = nilai.filter((n) => n >= 75).length;

console.log("Nilai Tertinggi :", tertinggi);
console.log("Nilai Terendah  :", terendah);
console.log("Rata-rata       :", rataRata.toFixed(2));
console.log("Jumlah Lulus    :", jumlahLulus, "mahasiswa");
``