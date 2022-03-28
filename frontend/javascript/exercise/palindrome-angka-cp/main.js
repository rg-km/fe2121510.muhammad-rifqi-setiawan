/**
 * Carilah angka palindrome yang LEBIH BESAR dan TERDEKAT dari angka-angka dibawah ini
 * 
 * Misal:
 * - Jika angka pada parameter bernilai 90 maka angka palindrome terdekat adalah 99
 * - Jika angka pada parameter bernilai 102 maka angka palindrome terdekat adalah 111
 */

function angkaPalindrome(num) {
  // TODO: answer here
  let stringNum = num.toString();
  let reverseString = '';

  for (let i = 0; i < stringNum.length; i++) {
    reverseString += stringNum[stringNum.length - 1 - i];
}

if (num != reverseString) {
  return angkaPalindrome(num + 1);
} else { 
  return num; 
  }
}

console.log(angkaPalindrome(10)); //11
console.log(angkaPalindrome(17)); //22
console.log(angkaPalindrome(175)); //181

module.exports = angkaPalindrome