// Birthday Cake Candles
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

function birthdayCakeCandles(candles) {
  // Write your code here
	// TODO: answer here
  let taller = candles[0] ;
  let result = 0 ;
  for (let i = 0; i<candles.length; i++){
      if(candles[i]>taller){
        taller = candles[i];
    }
  }
    
  for (let i = 0; i<candles.length; i++){
      if(taller === candles[i]){
        result++;
      }
  }
    return result;
}

function main() {
  //var n = parseInt(readLine());
  //ar = readLine().split(' ');
  //ar = ar.map(Number);
  var ar = [3, 2, 1, 3]; // override input
  var result = birthdayCakeCandles(ar);
  console.log(result);

}

main(); // execute program

module.exports = birthdayCakeCandles
