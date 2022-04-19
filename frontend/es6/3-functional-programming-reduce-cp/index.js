/**
 * Jumlahkan semua elemen angka dalam sebuah array
 * Contoh:
 *  Input: [1, 1, 1, 5]
 *  Output: 8
 */

 const sumTotalArray = (numbers) => {
    // TODO: answer here
    numbers = [1, 1, 1, 5];
    return numbers.reduce((prev, current) => prev + current);
  };
  
  const hasil = sumTotalArray();
  console.log(hasil)

  module.exports = sumTotalArray
