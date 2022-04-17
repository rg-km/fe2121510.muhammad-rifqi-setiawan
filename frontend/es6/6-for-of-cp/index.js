/**
 * Tampilkan tipe data dari setiap elemen array
 * Input: ["A", 3, [2]]
 * Outout: ["string", "number", "object"]
 *
 * Hint:
 * - Untuk pengecekan tipe data kalian dapat menggunakan typeof
 * - Pastikan menggunakan for-of untuk perulangan
 */
const input = ["A", 3, [2]];
const convertElementToType = (array) => {
  // TODO: answer here
  let result = [];
  for(const letter of array) {
  result.push(typeof letter);
  }
  return result
};

const hasilConvert = convertElementToType(input);
console.log(hasilConvert);

module.exports = convertElementToType