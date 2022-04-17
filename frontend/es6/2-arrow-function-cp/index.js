/**
 * Ubah fungsi-fungsi di bawah ini menjadi bentuk arrow function
 *
 * function multiplyByTwo (n) {
 *  return n * 2;
 * }
 *
 * function multiply (x, y) {
 *  return x * y;
 *
 * function returnTheTwo() {
 *  return 2;
 * }
 *
 */

// TODO: answer here
const multiplyByTwo = x => x * 2;
multiplyByTwo(2); // 4

const multiply = (x, y) => x * y;
multiply(2, 3); // 6

const returnTheTwo = () => 2;
returnTheTwo(); // 2

module.exports = {
  multiplyByTwo,
  multiply,
  returnTheTwo
}