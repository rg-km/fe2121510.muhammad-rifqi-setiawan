package main

import "fmt"

// buat struct Rectangle (persegi panjang) dengan dua atribut yaitu Width dan Length
// tambah dua method :
// GetArea() dan GetPerimeter()
// GetArea() digunakan untuk menampilkan (print) luas persegi panjang
// GetPerimeter() digunakan untuk menampilkan (print) keliling persegi panjang

type Rectangle struct {
<<<<<<< HEAD
	//beginanswer
	Width  int
	Length int
	//endanswer
}

//beginanswer
func (r Rectangle) GetArea() {
	fmt.Println("luas persegi panjang : ", r.Width*r.Length)
}

func (r Rectangle) GetPerimeter() {
	fmt.Println("keliling persegi panjang : ", 2*(r.Width+r.Length))
}

//endanswer
=======
	// TODO: answer here
}

// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
func main() {
	var r Rectangle
	r.Width = 10
	r.Length = 20
	fmt.Println(r)

	r.GetArea()
	r.GetPerimeter()
}
