// Linear search
// Bu o demekdir ki , her bir indexdeki ededleri bir bir yoxlayir ve sonda eded 7 e beraberdirse true qaytarir
// Arrayin icinde 7 oldugunu yoxlamaq isteyirik
var array1 = [1, 2, 6, 7, 4, 2, 9];
for (var i = 0; i < array1.length; i++) {
    var element = array1[i];
}
// Binary Search
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 9
// 1 => 5 => right
// 1 => 7 => right
// 8
// 9
//  "noImplicitAny": false, this helped me to avoid from error
function binary(array, search) {
    if (array.length === 0) {
        return false;
    }
    var medium = Math.floor(array.length / 2);
    console.log({ array: array });
    if (search === array[medium]) {
        return true;
    }
    else if (search > medium) {
        return binary(array.slice(medium + 1), search);
    }
    else {
        return binary(array.slice(medium), search);
    }
}
binary([1, 2, 3, 4, 5, 6, 7, 8, 9], 8);
