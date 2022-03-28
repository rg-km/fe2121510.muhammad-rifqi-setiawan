package main

import (
	"fmt"
)

// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

func miniMaxSum(arr []int32) {
<<<<<<< HEAD
	//beginanswer
	min, max := arr[0], arr[0]
	var sum int

	for _, num := range arr {
		if num < min {
			min = num
		}
		if num > max {
			max = num
		}
		sum += int(num)
	}

	fmt.Printf("%d %d\n", sum-int(max), sum-int(min))
	//endanswer
=======
	// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
}

func main() {
	var arr = []int32{1, 2, 3, 4, 5}
	miniMaxSum(arr)
}
