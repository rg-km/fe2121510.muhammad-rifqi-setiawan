//jangan ditunjukkan ke peserta
//mungkin dikerjakan jika waktu cukup aja
package main

import "fmt"

//fungsi calculate akan mengembalikan hasil melakukan perhitungan berikut
//penjumlahan, pengurangan,perkalian,dan pembagian
func main() {
	sumResult, subtractResult, multiplyResult, divideResult := calculate(4, 4)
	fmt.Println("hasil penjumlahan", sumResult)
	fmt.Println("hasil pengurangan", subtractResult)
	fmt.Println("hasil perkalian", multiplyResult)
	fmt.Println("hasil pembagian", divideResult)
	fmt.Println(calculate(5, 5))
}

func calculate(Number1, Number2 int) (sumResult, subtractResult, multiplyResult, divideResult int) {
<<<<<<< HEAD
	//beginanswer
	sumResult = Number1 + Number2
	subtractResult = Number1 - Number2
	multiplyResult = Number1 * Number2
	divideResult = Number1 / Number2
	//endanswer
=======
	// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
	return
}
