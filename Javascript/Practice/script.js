console.log("hello World");
console.warn("This is a Warning !")
console.error("This is Error")
 
var a    //Undefined
console.log(a);

// alert("this is a Alert ") message deta h 
// confirm ("are you sure")


var a = prompt("Enter Your Name")



// NaN- not a nummber 


// ===== Data Types =====

// 1. Create variables of type string, number, boolean, null, and undefined
let myString = "Hello"; // string
let myNumber = 25; // number
let myBoolean = true; // boolean
let myNull = null; // null
let myUndefined; // undefined


// 2. Check the type of different variables using typeof
console.log(typeof myString); // string
console.log(typeof myNumber); // number
console.log(typeof myBoolean); // boolean
console.log(typeof myNull); // object
console.log(typeof myUndefined); // undefined


// 3. Store your mobile number in a variable and check its type
let mobile = 9876543210; // mobile number
console.log(typeof mobile); // number


// 4. Create a variable with value null and check its type
let value = null; // null value
console.log(typeof value); // object


// 5. Create a bigint number and print it
let bigNumber = 123456789012345678901234567890n; // bigint
console.log(bigNumber); // 123456789012345678901234567890n



// ===== Type Conversion & Coercion =====

// 1. Convert the string "50" into a number
let strNum = "50";
let num = Number(strNum); // convert string to number

console.log(num); // 50
console.log(typeof num); // number


// 2. Convert the number 100 into a string
let numberValue = 100;
let stringValue = String(numberValue); // convert number to string

console.log(stringValue); // "100"
console.log(typeof stringValue); // string


// 3. Convert "true" into a boolean
let boolValue = Boolean("true"); // convert string to boolean

console.log(boolValue); // true
console.log(typeof boolValue); // boolean


// 4. Check the output of:
console.log("5" + 2); // "52"
console.log("5" - 2); // 3
console.log(true + 1); // 2


// 5. Create a variable with value "123abc" and convert it into a number
let mixed = "123abc";

console.log(Number(mixed)); // NaN


// 6. Use parseInt() on "500px"
console.log(parseInt("500px")); // 500

