package main

import "fmt"

//fungsi printWord akan melakukan print satu persatu nilai parameter yang diterimanya
//contoh nilai parameter yang diterima
//("selamat","pagi","siang",sore)
//outputnya
//selamat
//pagi
//siang
//sore
func main() {
	printWord("halo")
	printWord("halo", "selamat siang")
	printWord("halo", "andi", "dan", "bagus")
	printWord("mencoba", "variadic", "param", "pada", "go")
}

<<<<<<< HEAD
//beginanswer
func printWord(words ...string) {
	for _, word := range words {
		fmt.Println(word)
	}
}

//endanswer
=======
// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
