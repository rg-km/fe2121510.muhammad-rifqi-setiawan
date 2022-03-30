// Compare the Triplets
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */


// Full Problem: https://www.hackerrank.com/challenges/compare-the-triplets/problem

function compareTriplets(a, b) {
  // Write your code here
  // TODO: answer here
  let result = [0, 0];
  if (a.length !== b.length) {
    throw new Error('Panjang array harus sama !');
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        result[0]++;
      } else if (a[i] < b[i]) {
        result[1]++;
      }
    }
  }
  return result;
}
function main() {

  const a = [5, 7, 9] // override input
  const b = [3, 6, 11] // override input

  const result = compareTriplets(a, b);

  console.log(result)
}

main() // execute program

module.exports = compareTriplets