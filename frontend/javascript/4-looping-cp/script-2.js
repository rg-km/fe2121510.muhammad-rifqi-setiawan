// Mengembalikan pola * yang menurun di setiap barisnya
//
// contoh: 
// baris = 5
// hasil:
// *****
// ****
// ***
// **
// *

// Masukan jumlah baris
const n = 5;

// TODO: answer here
function segitiga(n) {
    let stars = '';
    for (let i = 0; i < n; i++) {
        for (let j = n; j > i; j--) {
            stars += "*";
        }
        stars += "\n";
    }
    return stars;
}
console.log(segitiga(n));
