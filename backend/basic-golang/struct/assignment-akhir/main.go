//dikerjakan jika waktu cukup saja
package main

import "fmt"

type Employee struct {
	Name              string
	BaseSalary, Bonus int
}

//method GetFullSalary() untuk menampilkan salary + bonus
//method AddBonus(bonus int) untuk mengubah nilai atribut bonus employee

<<<<<<< HEAD
//beginanswer
func (e Employee) GetFullSalary() int {
	return e.BaseSalary + e.Bonus
}

func (e *Employee) AddBonus(bonus int) {
	e.Bonus += bonus
}

//endanswer
=======
// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f

func main() {
	employee1 := Employee{Name: "bob", BaseSalary: 4000000, Bonus: 300000}
	fmt.Println("sebelum bonus dinaikkan")
	fmt.Println(employee1.GetFullSalary())
	fmt.Println("tambah 100000 ke bonus")
	employee1.AddBonus(100000)
	fmt.Println("setelah bonus dinaikkan")
	fmt.Println(employee1.GetFullSalary())
}
