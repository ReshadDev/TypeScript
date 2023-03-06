// TypeScriptde JavaScriptden fergli olaraq her bir variableni yaradan zaman onun tipini de mueyyen etmeliyik. Eger mueyyen edilmese tip any olaraq qalir.

let age : number;

// age = '454'

age = 45;

let firstName = "John";

let a;

a = 5;

a = 'asa'

// JavaScriptde biz variableni teyin edib onu reqeme ve ya string beraber etsek bir problem olmurdu.Amma TS strict bir dil oldugu ucun b ni string teyin edib , onun valuesine number deye bilmerik

let b : string;

b = "";

function getName(params:any) {
    return 1; 
}

let res = getName("Reshad")


let array = [1,2,3,];

var array2 = array.map((item)=>{item.toFixed()})