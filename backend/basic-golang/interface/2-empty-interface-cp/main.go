package main

import "fmt"

// Dari contoh yang telah diberikan, kamu dapat mencoba untuk menggunakan empty interface.
<<<<<<< HEAD
// Cobalah untuk membuat sebuah data yang dapat merepresentasikan suatu menu pada restaurant.

func main() {
	var menu []map[string]interface{}

	// Buatlah beberapa menu yang memiliki atribut nama, jenis (nasi, cepat saji, minuman, dll), dan harga. Tambahkan setiap menu pada list `menu`
	//beginanswer
	ayamGoreng := make(map[string]interface{})
	ayamGoreng["Nama"] = "Ayam Goreng"
	ayamGoreng["Jenis"] = "Cepat saji"
	ayamGoreng["Harga"] = 20000

	menu = append(menu, ayamGoreng)

	cola := make(map[string]interface{})
	cola["Nama"] = "Cola"
	cola["Jenis"] = "Minuman"
	cola["Harga"] = 7000

	menu = append(menu, cola)
	//endanswer
=======
// Buatlah dua data makanan dan minuman yaitu ayam goreng dan cola yang memiliki atribut
// Nama, Jenis, dan Harga.
// Ayam Goreng, Cepat saji, 20000
// Cola, Minuman, 7000

func GetMenu() []map[string]interface{} {
	var menu []map[string]interface{}

	// TODO: answer here

	return menu
}

func main() {
	menu := GetMenu()
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f

	for _, m := range menu {
		for k, v := range m {
			fmt.Printf("%s: %v\n", k, v)
		}
	}
}
