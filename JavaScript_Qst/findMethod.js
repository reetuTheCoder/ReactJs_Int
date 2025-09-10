// find() is for arrays, not strings.
// To use find() with a string, first convert the string into an array using .split('') (for characters) or .split(' ') (for words).
// find() iterates over an array and returns the first element that satisfies a condition provided in a callback function.



// find the first vowel in a string
let text = "Hello reetu!, how are you";

const convertStrInArray = text.split("")
let vowel = "aeiouAEIOU"
console.log("convertStrInArray", convertStrInArray);



let firstVovle = convertStrInArray.find((char) => vowel.includes(char))
console.log("firstVovle", firstVovle);  // return first vovle of the array



let lastVovle = convertStrInArray.reverse().find((char) => vowel.includes(char))
console.log("lastVovle", lastVovle);  // return last vovle of the array



const convertStrInArrayWord = text.split(" ")
let strLengthMoreThen3 = convertStrInArrayWord.find((word) => word.length >=3)
console.log("strLengthMoreThen3", strLengthMoreThen3);  // find a whos lenght is grater then = to 3



let lastWordLenght = convertStrInArrayWord.reverse().find((word) => word.length >=3)
console.log("lastWordLenght", lastWordLenght);




let nums = [10, 20, 5, 3, 8, 30, 40, 50]

let firstD = nums.find((num) => num % 2 === 0 )
console.log("firstD:",firstD);

let graterValue  = nums.find((num) => num >= 30)
console.log("graterValue", graterValue);




let newNumbers = [10, 20, 5, 3, 8, 30, 40, "50"]
let restult  = nums.find((num) => num >= 100)
if (restult === undefined) {
    console.log("No match found!");
} else {
    console.log("restult", restult);
}



let users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 35 }
];

let userFind  = users.find((user) => user.name === "Charlie")
if (userFind === undefined) {
    console.log("No match found!");
} else {
    console.log("userFind", userFind);
}