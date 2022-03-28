package main

import "fmt"

//buat struct Rectangle dengan dua atribut yaitu Width dan Length

<<<<<<< HEAD
//beginanswer
type Rectangle struct {
	Width  int
	Length int
}

//endanswer
=======
// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f

func main() {
	var r Rectangle
	r.Width = 10
	r.Length = 20
	fmt.Println(r) //{10,20}

	r2 := Rectangle{Width: 5, Length: 15}
	fmt.Println(r2) // {5,15}

	fmt.Println("lebar rectangle2:", r2.Width)    //5
	fmt.Println("panjang rectangle2:", r2.Length) //15

}
