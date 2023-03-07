// Linear search

// Bu o demekdir ki , her bir indexdeki ededleri bir bir yoxlayir ve sonda eded 7 e beraberdirse true qaytarir

// Arrayin icinde 7 oldugunu yoxlamaq isteyirik

const array1 = [1,2,6,7,4,2,9];

for (let i = 0; i < array1.length; i++) {
    const element = array1[i];
}

// Binary Search

const array2 = [1,2,3,4,5,6,7,8,9];
// 9
// 1 => 5 => right
// 1 => 7 => right
// 8
// 9

//  "noImplicitAny": false, this helped me to avoid from error

function binary(array: number[],search:number){
   if(array.length ===0){
    return false;
   }
   let medium =  Math.floor(array.length / 2);

   console.log({array});
   if(search === array[medium]){
    return true;
   }else if(search > medium){
    return binary(array.slice(medium + 1),search)
   }else{
    return binary(array.slice(medium),search)
   }
}

binary([1,2,3,4,5,6,7,8,9],8)