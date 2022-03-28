package main

import "fmt"

func main() {
	//fungsi untuk menampilkan string dan memiliki parameter fungsi
	//fungsi yang akan dimasukkan adalah fungsi yang memberi selamat malam
<<<<<<< HEAD
	//beginanswer
	printString := func(f func() string) {
		result := f()
		fmt.Println(result)
	}

	goodNight := func() string {
		return "good night friends"
	}
	//endanswer
=======
	// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f

	printString(goodNight)

}
