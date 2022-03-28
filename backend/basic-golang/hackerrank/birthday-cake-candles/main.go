package main

import (
	"fmt"
)

// Birthday Cake Candles
// - Problem Solving (Basic)
// - Difficulty: Easy

// Full Problem: https://www.hackerrank.com/challenges/birthday-cake-candles/problem

func birthdayCakeCandles(candles []int32) int32 {
<<<<<<< HEAD
	//beginanswer
	var max int32 = 0
	var score = make(map[int32]int32)
	for _, val := range candles {
		if max < val {
			max = val
			score[max] = 1
		} else if max == val {
			score[max]++
		}
	}
	return score[max]
	//endanswer
=======
	// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
}

func main() {
	var arr = []int32{3, 2, 1, 3}
	fmt.Println(birthdayCakeCandles(arr))
}
