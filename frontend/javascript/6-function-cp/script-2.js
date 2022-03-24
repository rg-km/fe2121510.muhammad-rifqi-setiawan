// Mengembalikan boolean untuk mengecek apakah teks palindrom
//
// contoh: 
// teks1 = hello
// teks2 = madam
// teks3 = kasur ini rusak
// hasil:
// teks1 dibalik menjadi olleh, maka balikan akan false
// teks2 dibalik sama menjadi madam, maka balikan akan true
// teks3 dibalik sama menjadi kasur ini rusak, maka balikan akan true

function checkPalindrome(string) {
    // TODO: answer here
    let result = true;

    for (let i = 0; i < string.length / 2; i++) {
        const leftPointer = string[i];
        const rightPointer = string[string.length - i - 1]

        // Check Codition 
        // console.log('leftPointer', leftPointer);
        // console.log('rightPointer', rightPointer);
        if (leftPointer !== rightPointer) {
            result =  false;

        }
    }
    return result;
}

// masukan teks
// const string = prompt('Enter a string: ');

// memanggil fungsi palindrom
const value = checkPalindrome('madam');
console.log(value);