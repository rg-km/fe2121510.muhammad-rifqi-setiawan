// Buat kalkulator objek dengan 5 methods:
// - read() meminta (prompt) dua nilai dan menyimpannya sebagai properti objek.
// - sum() mengembalikan jumlah nilai yang disimpan.
// - substract() mengurangi jumlah nilai yang disimpan.
// - multiply() mengalikan nilai yang disimpan.
// - division() membagi nilai yang disimpan.

const prompt = require('prompt-sync')();

let calculator = {
  // Tulis kode di sini
  // TODO: answer here
  read: function() {
    this.a = +prompt("Masukan nilai a: ");
    this.b = +prompt("Masukan nilai b: ");
    console.log ("\n");
  },
  sum: function() {
    return `Hasil dari a + b adalah : ${this.a + this.b}`;
  },
  substract: function() {
    return `Hasil dari a - b adalah ${this.a - this.b}`;
  },
  multiply: function() {
    return `Hasil dari a * b adalah ${this.a * this.b}`;
  },
  division: function() {
    return `Hasil dari a / b adalah ${this.a / this.b}`;
  }
};
  
calculator.read();
console.log(calculator.sum());
console.log(calculator.substract());
console.log(calculator.multiply());
console.log(calculator.division());