/**
 * Ambil semua element yang dengan digt yang ditentukan
 * - fungsi akan menerima dua argumen
 * - argumen pertama array angka
 * - argumen kedua berapa digit yang akan di filter
 * Contoh
 *  input: [88, 44, 3, 8481, 444], 2
 *  output: [88, 44]
 *
 */

const filterDigit = (array, digit) => {
  // TODO: answer here
  return array.filter(item => item.toString().length === digit);
};

console.log(filterDigit([88, 44, 3, 8481, 444], 2));
module.exports = filterDigit
