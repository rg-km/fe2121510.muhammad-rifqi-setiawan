package main

import (
	"fmt"
)

// Check Point:
// Passing Grade
// - Input: Point
// - Output: Status Error or Passing Grade Result

// Contoh:
// Input:
// - Masukkan nilai mahasiswa : 100 -> 0
// Output:
// - (>100) Nilai tidak boleh lebih dari 100
// - (<0) Nilai tidak boleh kurang dari 0
// - (=100) Lulus dengan nilai sempurna
// - (>70) Lulus
// - (=65) Hampir Lulus
// - (<70) Tidak lulus!. nilai anda: Point

func main() {
	var point int
	fmt.Printf("Masukkan nilai mahasiswa : ")
	fmt.Scan(&point)

<<<<<<< HEAD
	//beginanswer
	if point > 100 {
		fmt.Printf("Nilai tidak boleh lebih dari 100")
	} else if point < 0 {
		fmt.Printf("Nilai tidak boleh kurang dari 0")
	} else {
		if point == 100 {
			fmt.Printf("Lulus dengan nilai sempurna")
		} else if point > 70 {
			fmt.Printf("Lulus")
		} else if point == 65 {
			fmt.Printf("Hampir Lulus")
		} else {
			fmt.Printf("Tidak lulus!. nilai anda: %d", point)
		}
	}
	//endanswer
=======
	// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f

}
