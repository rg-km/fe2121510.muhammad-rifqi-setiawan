// Masukan 3 bilangan bulat menggunakan if condition
const num1 = 15;
const num2 = 10;
const num3 = 5;

let largest;

// TODO: answer here


if ( num1 > num2 && num1 > num3 ){
    largest = num1;
}else if ( num2 > num1 && num2 > num3 ){
    largest = num2;
}else{
    largest = num3;
}

// Menampilkan hasil
console.log("Bilangan terbesar adalah " + largest);