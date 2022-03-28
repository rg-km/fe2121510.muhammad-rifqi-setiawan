package main

import "fmt"

func main() {
	// mengembalikan string selamat sore dengan anonymous function
	goodAfternoon := func() string {
<<<<<<< HEAD
		//beginanswer
		return "Selamat sore"
		//endanswer
=======
		// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
	}()

	fmt.Println(goodAfternoon)
}
