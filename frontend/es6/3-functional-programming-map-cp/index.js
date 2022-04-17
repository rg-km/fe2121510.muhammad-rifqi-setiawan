/**
 * Tampilkan pasang huruf besar dari semua huruf kecil yang ada pada array
 
 * Contoh 
 *  input: ['a', 'b', 'c', 'd']
 *  output: [ {'a': 'A'}, {'b': 'B'}, {'D': 'c'}, {'d': 'D'}]
 * 
 */
 const array = ['a', 'b', 'c', 'd'];
const lowerToUpperMap = (array) => {
  // TODO: answer here
  return array.map(element => {
    return {
      [element.toLowerCase()]: element.toUpperCase()
    }
  })
};

const hasil = lowerToUpperMap(array);
console.log(hasil)

module.exports = lowerToUpperMap
