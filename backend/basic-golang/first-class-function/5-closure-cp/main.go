package main

import "fmt"

func main() {
	//fungsi counter akan menerima (x int) dan mengembalikan fungsi
	//fungsi yang dikembalikan akan melakukan decrement nilai parameter x ketika dipanggil dan
	//mengembalikan nilai parameter x

	counter := func(x int) func() int {
<<<<<<< HEAD
		//beginanswer
		return func() int {
			x--
			return x
		}
		//endanswer
=======
		// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
	}
	decrement := counter(5)
	fmt.Println(decrement())
	fmt.Println(decrement())
	fmt.Println(decrement())
}
