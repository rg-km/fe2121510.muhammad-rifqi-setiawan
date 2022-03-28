package main

import (
	"errors"
	"fmt"
)

// Dari contoh yang telah diberikan, kalian dapat mencoba membuat custom error baru dengan atribut message dan errCode.
// Misalnya adalah error untuk validasi data umur kurang dari 0.

// TODO: answer here

func GetAge(data map[string]int, name string) (int, error) {
	if _, ok := data[name]; !ok {
		return 0, errors.New("Data not found")
	}

	if data[name] < 0 {
<<<<<<< HEAD
		// Isilah baris ini dengan return 0 dan custom error yang telah dibuat
=======
		// Isilah baris ini dengan return 0 dan custom error yang telah dibuat dengan message error invalid data dan errCode 500
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
		// TODO: answer here
	}

	return data[name], nil
}

func main() {
	peopleAge := map[string]int{
		"John": 20,
		"Raz":  8,
		"Tony": -1,
	}

	_, err := GetAge(peopleAge, "Tony")
	if err != nil {
		fmt.Println(err.Error())
	}
}
