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
  let waktu = 0,
    jam = 0,
    jamDalamPM = {
      "01": 13,
      "02": 14,
      "03": 15,
      "04": 16,
      "05": 17,
      "06": 18,
      "07": 19,
      "08": 20,
      "09": 21,
      10: 22,
      11: 23,
      12: 12,
    },
    jamDalamAM = {
      12: "00",
    };

  if (s.substring(s.length - 2, s.length) === "PM") {
    jam = jamDalamPM[s.substring(0, 2)];
  } else if (s.substring(s.length - 2, s.length) === "AM" && s.substring(0, 2) === "12") {
    jam = jamDalamAM[s.substring(0, 2)];
  } else {
    jam = s.substring(0, 2);
  }
  waktu = jam + s.substring(2, s.length - 2);
  return waktu;
}

function main() {
  //var s = readLine();
  var s = '07:05:45PM'; // override input
  var result = timeConversion(s);
  console.log(result);

}

main(); // execute program

module.exports = timeConversion