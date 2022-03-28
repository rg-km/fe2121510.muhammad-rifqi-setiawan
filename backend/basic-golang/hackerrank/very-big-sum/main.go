package main

import (
	"fmt"
)

// A Very Big Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

// Full Problem: https://www.hackerrank.com/challenges/a-very-big-sum/problem

func aVeryBigSum(ar []int64) int64 {
<<<<<<< HEAD
	//beginanswer
	var result int64
	for i := 0; i < len(ar); i++ {
		result += ar[i]
	}

	return result
	//endanswer
=======
	// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
}

func main() {

	var ar = []int64{1000000001, 1000000002, 1000000003, 1000000004, 1000000005}

	fmt.Println(aVeryBigSum(ar))
}
