"use strict";
// tuple
let tuple = ['red', 2313];
tuple[0] = 'blue';
tuple[1] = 5353;
// generic
function getRandomNumber(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
console.log(getRandomNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));
function getRandomString(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
console.log(getRandomString(['reshad', 'qara', 'huseyn', 'nino']));
function getRandomPerson(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
console.log(getRandomPerson([
    { name: "Reshad" },
    { name: "Nicat" },
    { name: "Eli" },
    { name: "Hosain" }
]));
//# sourceMappingURL=generic.js.map