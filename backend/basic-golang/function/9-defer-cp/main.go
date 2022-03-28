package main

import "fmt"

func main() {
	order("teh")
	order("kopi")
}

func order(drink string) {
	// mengucapkan terima kasih di akhir dengan menggunakan defer
<<<<<<< HEAD
	//beginanswer
	defer fmt.Println("terima kasih, silahkan datang kembali")
	//endanswer
=======
	// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
	fmt.Println("kami sedang ada diskon untuk pembelian kopi")
	fmt.Println("pesanan anda:", drink)
	if drink == "kopi" {
		fmt.Println("okee, karena diskon totalnya jadi 4000")
	}
	fmt.Println("mohon ditunggu")
}
