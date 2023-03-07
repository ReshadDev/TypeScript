// const person = {
//     name:"Barry",
//     surname:"Alan",
//     speed: 4800
// }


// function changeBarrySpeed(speed:number) : void{
//     person.speed = speed
// }

// console.log(person);

// changeBarrySpeed(1000);

// console.log(person);

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

// class Person {
//     #id = 1;
// }

// const  p = new Person();
// p.id

// let privateAge = 0;

// function Human(this: any){
//     this.getAge = () =>{
//         return privateAge;
//     }
// }

// const h = new Human();
// console.log(h.getAge()); -- 0
// console.log(h.privateAge);  -- undefined
