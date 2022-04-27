/*
Name   : Muhammad Rifqi Setiawan
idcamp : 2121510
*/

const Stack = require('./stack')

function IsValidParentheses(s) {
    // TODO: answer here
    const stack = [];
    const StringKarakter = { ')': '(', '}': '{', ']': '['};

    // looping untuk check setiap karakter
    for (const string of s) {
        // jika isi dari StringKarakter tidak sama dengan isi dari perulangan s
        // maka push ke stack
        if (!StringKarakter[string]){
            //console.log(string);
           stack.push(string);
           
        } 
        // jika karakter ada di dalam object StringKarakter
        else if(stack.pop() !== StringKarakter[string]){
            return false;
        } 
      }
      //check condition jika kondisi stack kosong
      if (s === "") {
          return false;
      }
      return stack.length === 0;
};

console.log(IsValidParentheses("{}[]()")); // true
console.log(IsValidParentheses("{}[(])")); // false

module.exports = {
    IsValidParentheses
}