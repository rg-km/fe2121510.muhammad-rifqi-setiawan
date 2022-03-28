package main

import "fmt"

func main() {
	// fungsi ini akan mengembalikan fungsi berikut
	// func(x, y int) int {
	// 	return x * y
	// }
<<<<<<< HEAD
	//beginanswer
	getAreaFunc := func() func(int, int) int {
		return func(x, y int) int {
			return x * y
		}
	}
	//endanswer
=======
	// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
	areaF := getAreaFunc()
	res := areaF(3, 4) // 12
	fmt.Println(res)
}
