package main

import "fmt"

// Disini kita akan mencoba untuk melakukan subslicing pada slice.
// Coba langsung gunakan function append ketika melakukan subslicing.
// contoh slice = append (slice, slice2[0:3])

// Silahkan copy slice dan mempunyai value "Marcus", "is", "known", "to", "be" dan "a", "philosopher"
// Silahkan print slice tersebut
// Expected output : [Marcus is known to be a philosopher]
func main() {
	slice := []string{"Marcus", "is", "known", "to", "be", "one", "of", "five", "greatest", "emperors", "of", "rome",
		"Aurelius", "is", "also", "known", "to", "be", "a", "philosopher"}

<<<<<<< HEAD
	//beginanswer
	var copySlice []string
	copySlice = append(copySlice, slice[0:5]...)
	copySlice = append(copySlice, slice[len(slice)-2:]...)
	fmt.Println(copySlice)
	//endanswer
=======
	// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
}
