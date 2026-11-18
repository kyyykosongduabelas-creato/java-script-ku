const hargaBarang = 25000;
const jumlahBarang = 4;
const persenDiskon = 0.10; // 10%

const totalSebelumDiskon = hargaBarang * jumlahBarang;
const besaranDiskon = totalSebelumDiskon * persenDiskon;
const totalPembayaran = totalSebelumDiskon - besaranDiskon;

console.log("=== 2. Total Belanja ===");
console.log("Total Sebelum Diskon : Rp" + totalSebelumDiskon);
console.log("Besaran Diskon (10%) : Rp" + besaranDiskon);
console.log("Total Pembayaran     : Rp" + totalPembayaran);
