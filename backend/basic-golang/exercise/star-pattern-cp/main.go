package main

import "fmt"

// Check Point:
// Start Pattern
// - Input: Size
// - Output: Start Pattern

// Contoh:
// - Input: Size: 10
// - Output:
//           *
//          **
//         ***
//        ****
//       *****
//      ******
//     *******
//    ********
//   *********
//  **********

func main() {
	var size int
	fmt.Print("Size: ")
	fmt.Scanf("%d", &size)

<<<<<<< HEAD
	//beginanswer
	for i := 0; i < size; i++ {
		for j := 0; j < size-i-1; j++ {
			fmt.Print(" ")
		}
		for j := 0; j < i+1; j++ {
			fmt.Printf("%s", "*")
		}
		fmt.Println()
	}
	//endanswer
=======
	// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
}
