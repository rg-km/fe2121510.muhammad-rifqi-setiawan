package main

import (
	"fmt"
)

// Diagonal Difference
// - Problem Solving (Basic)
// - Difficulty: Easy

// Full Problem: https://www.hackerrank.com/challenges/diagonal-difference/problem

func diagonalDifference(arr [][]int32) int32 {
<<<<<<< HEAD
	//beginanswer
	var (
		ans      int32 = 0
		leftTop  int32 = 0
		rightTop int32 = 0
	)

	for i := 0; i < int(len(arr)); i++ {
		leftTop += arr[i][i]
		rightTop += arr[(int(len(arr))-1)-i][i]

	}

	ans = leftTop - rightTop
	if ans < 0 {
		ans *= -1
	}

	return ans
	//endanswer
=======
	// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
}

func main() {

	var arr [][]int32
	fmt.Println(diagonalDifference(arr))
}
