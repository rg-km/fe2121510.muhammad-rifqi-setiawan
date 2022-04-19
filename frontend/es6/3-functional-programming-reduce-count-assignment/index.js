/**
 * Hitung berapa banyak pengulangan angka dari array berikut dan kembalikan dalam bentuk key-value
 * Contoh:
 *  Input: [1, 1, 1, 5, 5, 10, 9]
 *  Output: {1: 3, 5: 2, 10: 1, 9: 1}
 *
 */

const countRepetition = (numbers) => {
  // TODO: answer here
  return numbers.reduce((prev, cur) => {
    if (prev[cur]) {
      prev[cur] += 1;
    } else {
      prev[cur] = 1;
    }
    return prev;
  }, {});
};

console.log(countRepetition([1, 1, 1, 5, 5, 10, 9]));

module.exports = countRepetition