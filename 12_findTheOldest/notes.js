const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
  {
    name: "Ebineezer",
    yearOfBirth: 1800,
    yearOfDeath: 1890,
  },

]

console.table(people)

const getAge = function (birth, death) {
  if (!death) death = new Date().getFullYear()

  return death - birth
}

const oldestPerson = people.reduce((acc, curr) => {
  // console.log(acc)
  // console.log(curr)

  const accAge = getAge(acc.yearOfBirth, acc.yearOfDeath)
  const currAge = getAge(curr.yearOfBirth, curr.yearOfDeath)

  // if (currAge > accAge) acc = curr

  return currAge > accAge ? acc = curr : acc
})

console.log(oldestPerson)