class Score {
    constructor(name, correct, wrong, empty) {
        // TODO: answer here
        this.name = name;
        this.correct = correct;
        this.wrong = wrong;
        this.empty = empty;
    }
}

class Scores {
    constructor(scores) {
        // TODO: answer here
        this.scores = scores;
    }

    topStudents() {
        // TODO: answer here
        let students = [];
        let topStudents = [];
        let score = this.scores;
        let value = 0;
        for (let i = 0; i < score.length; i++) {
            value = 4 * score[i].correct - score[i].wrong;
            students.push({
                name: score[i].name,
                correct: score[i].correct,
                wrong: score[i].wrong,
                empty: score[i].empty,
                value: value
            });
        }
        students.sort((a, b) => {
            // sort by value
            if (a.value > b.value) {
                return -1;
            } else if (a.value < b.value) {
                return 1;
            } else if (a.value === b.value) {
                // sort by name
                if (a.correct > b.correct) {
                    return -1;
                } else if (a.correct < b.correct) {
                    return 1;
                } else if (a.correct === b.correct) {
                    if (a.name < b.name) {
                        return -1;
                    }
                }
            }
        });
        for (let i = 0; i < students.length; i++) {
            topStudents.push(students[i].name);
        }
        return topStudents;
    }
}

// mengecheck nilai sama tetapi abjadnya berbeda
let Dio = new Score("Dio", 3, 2, 2)
let Angga = new Score("Angga", 3, 2, 2)
let Budi = new Score("Budi", 3, 2, 2)
let Rifqi = new Score("Rifqi", 4, 1, 1)
let scores = new Scores([Dio, Angga, Budi, Rifqi]);
console.log(scores.topStudents())


module.exports = {
    Score,
    Scores
}
