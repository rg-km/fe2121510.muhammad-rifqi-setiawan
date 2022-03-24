// Mengembalikan teks yang berkebalikan
//
// contoh: 
// teks = hello world
// hasil:
// dlrow olleh

function reverseString(str) {
    var reverseStr = "";
    for(var i = str.length - 1; i>=0; i--){
        reverseStr += str[i];
    }

    return reverseStr;
}

// take input from the user
//const string = prompt('Masukan teks: ');
const string = "rifqi";
const result = reverseString(string);
console.log(result);