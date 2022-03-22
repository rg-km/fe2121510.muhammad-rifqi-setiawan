// Menggunakan switch case, petakan nilai ujian di bawah ini ke dalam Nilai A B C D E
// A = 91-100
// B = 71-90
// C = 61-70
// D = 51-60
// E = <= 50

// Masukan suatu angka
const score = 90;

// TODO: answer here
switch (true) {
    case (score >= 91 && score <=100):
        console.log('grade A');
        break;
    case (score >= 71 && score <=90):
        console.log('grade B');
        break;
    case (score >= 61 && score <=70):
        console.log('grade C');
        break; 
    case (score >= 51 && score <=60):
        console.log('grade D');
        break;
    case (score <= 50) :
        console.log('grade E');
        break; 
    default:
        console.log('pastikan kamu memasukkan angka');
        break;
}