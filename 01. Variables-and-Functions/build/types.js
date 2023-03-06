"use strict";
let num;
let str;
let sym;
let nil;
let und;
let bool;
let big;
let arr;
let arr1;
let arr2;
let obj;
// additional
let an;
let un;
// & isaresi vasitesiyle Human interfacesine Person typesin extend edirik
let p = {
    id: "randomId",
    name: "Reshad",
    age: 19,
};
// p.age = "432";
p.age = 24;
// extension
let aaa = {
    name: '',
    surname: ''
};
const calculateAge = (year, name = "Reshad") => {
    console.log("hello" + name + "!");
    return new Date().getFullYear() - year;
};
// calculateAge.length == 1
calculateAge(2004);
function getGel(distance) {
    if (distance > 100) {
        return true;
    }
    return false;
}
//# sourceMappingURL=types.js.map