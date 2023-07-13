let bool = true;
console.log("Is bool == 'true'? I predict True.")
console.log(bool == true);

console.log("Is bool != 'true'? I predict False.")
console.log(bool != true);

let car = 'honda';
console.log("Is car != 'HONDA'? I predict True.")
console.log(car != car.toUpperCase());

let digit = 4;

console.log("Is digit > 0? I predict True.")
console.log(digit > 0);

console.log("Is digit >= 0? I predict True.")
console.log(digit >= 0);

console.log("Is digit < 0? I predict False.")
console.log(digit < 0);

console.log("Is digit <= 0? I predict False.")
console.log(digit <= 0);


console.log("Is digit > 4 && digit < 5? I predict False.")
console.log(digit > 4 && digit < 5);

console.log("Is digit > -Infinity && digit < Infinity? I predict True.")
console.log(digit > -Infinity && digit < Infinity);


console.log("Is bool || true? I predict True.")
console.log(bool || true);

const arr = [2, 3, 3];
console.log("Is Array.isArray(arr)? I predict True.")
console.log(Array.isArray(arr));

console.log("Is arr.indexOf(2) >= 0? I predict True.")
console.log(arr.indexOf(2) >= 0);

console.log("Is arr.indexOf(5) >= 0? I predict False.")
console.log(arr.indexOf(5) >= 0);

