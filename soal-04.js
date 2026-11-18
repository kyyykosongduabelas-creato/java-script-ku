let genap = [];
let ganjil = [];
let jumlahGenap = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    genap.push(i);
    jumlahGenap += i;
  } else {
    ganjil.push(i);
  }
}

console.log("=== 4. Looping 1 - 100 ===");
console.log("Angka Genap :", genap.join(", "));
console.log("Angka Ganjil:", ganjil.join(", "));
console.log("Jumlah Seluruh Angka Genap:", jumlahGenap);
