const findTheOldest = function (people) {
    return oldestPerson = people.reduce((acc, curr) => {
        const accAge = getAge(acc.yearOfBirth, acc.yearOfDeath)
        const currAge = getAge(curr.yearOfBirth, curr.yearOfDeath)

        return currAge > accAge ? acc = curr : acc
    })

};

const getAge = function (birth, death) {
    if (!death) death = new Date().getFullYear()

    return death - birth
}

// Do not edit below this line
module.exports = findTheOldest;
