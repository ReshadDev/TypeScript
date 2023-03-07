var _Person_id;
var person = {
    name: "Barry",
    surname: "Alan",
    speed: 4800
};
function changeBarrySpeed(speed) {
    person.speed = speed;
}
console.log(person);
changeBarrySpeed(1000);
console.log(person);
/*
const obj = {
    age:11,
    changeAge(age:number){
        this.age = age;
    }
}

//  Bu kodlar Ts de error verecek, cunki window obyekti yoxdu burada

console.log(obj);
// {age: 11, changeAge: ƒ}

obj.changeAge(12);

console.log(obj);
// {age: 12, changeAge: ƒ}
console.log('age' in window && window.age);
// false


const c = obj.changeAge;

c(13);

console.log(obj);
// {age: 12, changeAge: ƒ}

console.log('age' in window && window.age);
// 13

*/
// Closure istifadesi
var Person = /** @class */ (function () {
    function Person() {
        _Person_id.set(this, 1);
    }
    return Person;
}());
_Person_id = new WeakMap();
var p = new Person();
// p.id
var privateAge = 0;
function Human() {
    this.getAge = function () {
        return privateAge;
    };
}
var h = new Human();
console.log(h.getAge());
console.log(h.privateAge);
