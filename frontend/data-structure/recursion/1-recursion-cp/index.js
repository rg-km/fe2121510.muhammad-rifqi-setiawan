// Terapkan pow(x, n), yang menghitung x pangkat n (yaitu, x^n)
//
// Contoh 1:
// Input: x = 2.0, n = 10
// Output: 1024.0
//
// Contoh 2:
//
// Input: x = 2.1, n = 3
// Output: 9.261
//
// Example 3:
// Input: n = 2.0, n = -2
// Output: 0.25
// Explanation: 2^-2 = (1/2)^2 = 1/4 = 0.25

function myPow(x, n) {
    if (n === 0) return 1;
    
    let pow = Math.abs(n);
    
    // TODO: answer here
    let result = 1;
    for (let i = 0; i < pow; i++) {
        result *= x;
    }
    
    // TODO: answer here
    if (n < 0) {
        return 1 / result;
    } else {
        return result;
    }
}

console.log(myPow(2, 10)); // 1024

module.exports = { myPow }