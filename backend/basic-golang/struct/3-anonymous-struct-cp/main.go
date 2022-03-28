package main

import "fmt"

func main() {
	//membuat rectangle dengan anonymous struct
	//field dari struct ini sama seperti rectangle sebelumnya
<<<<<<< HEAD
	//beginanswer
	newRectangle := struct {
		Width  int
		Length int
	}{
		Width:  10,
		Length: 30,
	}
	//endanswer
=======
	// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f

	fmt.Printf("rectangle dengan lebar %d dan panjang %d", newRectangle.Width, newRectangle.Length)
}
