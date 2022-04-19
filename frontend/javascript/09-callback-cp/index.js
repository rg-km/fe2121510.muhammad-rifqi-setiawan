// Buatlah callback yang memenuhi function call di line 29

// function ini menduplikasi tiap karakter pada sebuah string
// contoh: hehe => hheehhee
function doubleChars(str) {
  // TODO: answer here
  return [...str].map(s => s.repeat(2)).join('');
}

// function ini mengulang pengaplikasian callback pada str sejumlah num
function repeat(str, num, cb) {
  // TODO: answer here
  let newStr = cb(str)
  return [...newStr].map(s => s.repeat(num)).join('');
}

console.log(repeat("triple", 2, doubleChars)); //  ttttrrrriiiipppplllleeee

module.exports = {
  doubleChars,
  repeat
}