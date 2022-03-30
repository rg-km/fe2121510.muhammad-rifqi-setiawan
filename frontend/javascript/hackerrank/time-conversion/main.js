// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  // TODO: answer here
  let time = s.split(':');
  let hour = time[0];
  let minute = time[1];
  let second = time[2];
  let ampm = time[3];
  let result = '';
  if (ampm === 'AM') {
    if (hour === '12') {
      result = '00:' + minute + ':' + second.slice(0, 2);
    } else {
      result = hour + ':' + minute + ':' + second.slice(0, 2);
    }
  } else {
    if (hour === '12') {
      result = hour + ':' + minute + ':' + second.slice(0, 2);
    } else {
      let newHour = parseInt(hour) + 12;
      result = newHour + ':' + minute + ':' + second.slice(0, 2);
    }
  }
  return result;
}

function main() {
  //var s = readLine();
  var s = '07:05:45PM'; // override input
  var result = timeConversion(s);
  console.log(result);

}

main(); // execute program

module.exports = timeConversion