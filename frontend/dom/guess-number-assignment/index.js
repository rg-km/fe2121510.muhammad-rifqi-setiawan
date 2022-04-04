/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

// let newGameBtn = tombol untuk melakukan restart game
// let randomNumber = generate random number dari 1 sampai 10
// let message = element untuk menampilkan pesan
// let displayScore = element untuk menampilkan score
// let input = element untuk memasukan data
// let checkBtn = tombol untuk melakuan pengecekan angka pada input
// let score = nilai yang akan ditampilakan

// TODO: answer here
let newGameBtn = document.getElementById('btn-new');
let randomNumber = document.getElementById('number');
let message = document.getElementsByClassName('message');
let displayScore = document.getElementsByClassName('score-label');
let input = document.getElementsByClassName('input');
let checkBtn = document.getElementById('btn-check');
let score = document.getElementsByClassName('score');

// event listener
checkBtn.addEventListener("click", checkNumber);
newGameBtn.addEventListener('click', resetGame);

function displayMessage(msg) {
  // TODO: answer here
  message.innerHTML = msg;

}

function resetGame() {
  // TODO: answer here
  score = 0;
  displayScore.innerHTML = score;
  //dilarang menghapus code dibawah ini!
  document.getElementById('hidden-number').innerHTML = randomNumber

}

function checkNumber() {
  // TODO: answer here
  randomNumber = Math.floor(Math.random() * 10) + 1;
  if (input.value !== randomNumber) {
    displayMessage('You are wrong!');
    score -= 10;
    displayScore.innerHTML = score;
  // } else if (input.value > 11){
  //   displayMessage.innerHTML = 'Guess any number between 1 and 10';
  // } else if (input.value === randomNumber){
  //   displayMessage.innerHTML = 'Yeay! you guessed it!';
  //   score += 10;
  //   displayScore.innerHTML = score; 
  // } else if (input.value < randomNumber) {
  //   displayMessage.innerHTML = 'Too small, buddy!';
  // } else if (input.value > randomNumber) {
  //   displayMessage.innerHTML = 'Oww... thats too big!';
  // } else if (score === 0 && input.value !== randomNumber) {
  //   displayMessage.innerHTML = 'Oops, you lost the game';
  }
}

//dilarang menghapus code dibawah ini!
document.getElementById('hidden-number').innerHTML = randomNumber