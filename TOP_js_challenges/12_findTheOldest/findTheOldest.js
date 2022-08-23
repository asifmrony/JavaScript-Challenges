const findTheOldest = function (peopleArray) {
    // const today = new Date().getFullYear();
    // const oldestMan = peopleArray.filter((people) => people.yearOfDeath - people.yearOfBirth - 40);
    //mapping over
    const mapp = peopleArray.map((people) => {
        return age = people.yearOfDeath - people.yearOfBirth;
    })
    const sortByOldest = mapp.sort((a, b) => b - a);
    const oldestMan = peopleArray.filter((people) => people.yearOfDeath - people.yearOfBirth === sortByOldest[0]);
    return oldestMan;
};

// console.log(findTheOldest([
//     {
//         name: "Carly",
//         yearOfBirth: 1942,
//         yearOfDeath: 1970,
//     },
//     {
//         name: "Ray",
//         yearOfBirth: 1962,
//         yearOfDeath: 2011,
//     },
//     {
//         name: "Jane",
//         yearOfBirth: 1912,
//         yearOfDeath: 1941,
//     },
// ]));
// Do not edit below this line
module.exports = findTheOldest;