function ageDistribution(persons) {
    let result = new Map();
    // TODO: answer here
    let ageDistribution = groupByAge(persons);
    for (let [key, value] of ageDistribution) {
        result.set(key, value.length);
    }
    return result
}

function groupByAge(persons) {
    let result = new Map();
    // TODO: answer here
    for (let i = 0; i < persons.length; i++) {
        let age = persons[i].age;
        if (result.has(age)) {
            result.set(age, [...result.get(age), persons[i]]);
        } else {
            result.set(age, [persons[i]]);
        }
    }
    return result
}

let people = [
    { name: "Bob", age: 21 },
    { name: "Sam", age: 28 },
    { name: "Ann", age: 21 },
    { name: "Joe", age: 22 },
    { name: "Ben", age: 28 },
]

console.log(ageDistribution(people));
console.log(groupByAge(people));

module.exports = {
    ageDistribution, groupByAge
}