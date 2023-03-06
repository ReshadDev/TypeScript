let num: number;
let str: string;
let sym : symbol;
let nil: null;
let und : undefined;
let bool : boolean;
let big : BigInteger;

let arr : [];
let arr1 : number[];
let arr2 : Array<number>;

let obj : {};

// additional

let an : any;
let un: unknown;

// interface
// extends

interface Human {
    name: string
}

// interface Person extends Human{
//     // Readonly - bu usecase o demekdir ki , biz bunu sonradan deyise bilmirik
//     readonly id: string,
//     age:number,
// }


type Person = {
   readonly id: string;
    age: number;
} & Human

// & isaresi vasitesiyle Human interfacesine Person typesin extend edirik

let p : Person = {
    id: "randomId",
    name: "Reshad",
    age: 19,
}

// p.age = "432";

p.age = 24;

// yuxarida id e readonly dediyimiz ucun deyismeye icaze verilmir
// p.id = "12" -- error



// interface

interface A {
    name : string
}

interface A {
    surname : string
}

// extension

let aaa : A = {
    name : '',
    surname : ''
}


//type

type B = {
    name : string
}

// Functions in TSC

// Burada name? qoyuruq, cunki ola biler biz name gondermek istemirik. Eger ? qoymasaq, asagida funksiyani cagiran zaman year le beraber name de gondermeliyik( bos string bele olsa )
// name?: string

type CalculateAge = (year:number, name? : string)=> number;


const calculateAge : CalculateAge = (year,name = "Reshad") => {
        console.log("hello" + name + "!");
            return new Date().getFullYear() - year;
}

// calculateAge.length == 1
calculateAge(2004);

function getGel(distance: number) : boolean {
    if(distance >100){
       return true;
    }
    return false;
}


