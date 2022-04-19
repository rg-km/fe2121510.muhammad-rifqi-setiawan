/**
 * Cari nilai tertinggi dari array menggunakan reduce
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 5
 *
 * Catatan: Tidak boleh menggunakan perintah Math.max().
 */

const maxFromArray = (numbers) => {
  // TODO: answer here
  max = numbers[0];
  return numbers.reduce((prev, cur) => {
    if (prev > cur) {
      max = prev;
    } else {
      max = cur;
    }
    return max;
  });
};

console.log(maxFromArray([1, 1, 1, 5]));

module.exports = maxFromArray