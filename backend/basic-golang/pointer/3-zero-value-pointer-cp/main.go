package main

import "fmt"

// Dari contoh yang telah diberikan, kamu dapat bereksperimen dengan zero value pada pointer.
// Program dibawah akan mengeluarkan panic, modifikasi kode dibawah sehingga program tidak mengeluarkan panic.

type Student struct {
	Name         string
	Class        string
	SubjectScore *SubjectScore
}

type SubjectScore struct {
	Scores []int
}

func GetMaxScore(student *Student) int {
<<<<<<< HEAD
	//beginanswer
	if student.SubjectScore == nil {
		fmt.Println("student subject score is nil")
		return 0
	}
	//endanswer
=======
	// TODO: answer here
>>>>>>> 873d29011f6fd4e0358a4df3f3e706f6b1f2272f
	maxScore := 0
	for _, score := range student.SubjectScore.Scores {
		if score > maxScore {
			maxScore = score
		}
	}
	return maxScore
}

func main() {
	student := Student{
		Name:  "Tony",
		Class: "X IPA",
	}

	maxScore := GetMaxScore(&student)
	fmt.Println(maxScore)
}
