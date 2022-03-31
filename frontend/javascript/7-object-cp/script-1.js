// Dari kode di bawah ini

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// buat kode untuk manipulasi data dalam objek berdasarkan instruksi berikut

// 1. Tulis perintah untuk menambahkan bahasa "Go" ke akhir array languages.
// 2. Ubah difficulty menjadi 7.
// 3. Menggunakan kata kunci delete, tulis perintah untuk menghapus key jokes dari objek programming.
// 4. Tulis perintah untuk menambahkan key baru yang disebut isFun dan nilai true ke objek programming.
// 5. Menggunakan loop, iterasi array languages dan console.log semua bahasa.
// 6. Menggunakan loop, console.log semua key dalam objek pemrograman.
// 7. Menggunakan loop, console.log semua value dalam objek pemrograman.

// TODO: answer here
programming.languages.push("Go"); // 1
programming.difficulty = 7; // 2
delete programming.jokes; // 3
programming.isFun = true; // 4

// 5 
console.log("Show all languages: ");
for (let bahasa in programming) {
    let arr = programming[bahasa]
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    } 
} 

console.log("\nshow all keys: ");
// 6
for (let item in programming) {
    console.log(item);
}

console.log("\nshow all values: ");
// 7
for (let value in programming) {
    console.log(programming[value]);
}

