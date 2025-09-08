const splitSentence = (sentence) => {
  return sentence.split(" ");
};
console.log(splitSentence("The quick brown fox"));

// first way

// const findLastIndexOf = (str, searchItem) => {
//  return str.lastIndexOf(searchItem);
// }
// console.log(findLastIndexOf("Hello planet earth, you are a great planet.","earth"));

// also add some checkes if you want more safe
const findLastIndexOf = (str, searchItem) => {
  if (typeof str === !str || typeof searchItem === !searchItem) {
    console.log("both value is not same type");
    return -1;
  }

  const lowerStr = str.toLowerCase();
  const lowerSearchItem = searchItem.toLowerCase();

  return lowerStr.lastIndexOf(lowerSearchItem);
};

console.log(
  findLastIndexOf("Hello planet earth, you are a great planet.", "earth")
);
console.log(
  findLastIndexOf("Hello planet earth, you are a great planet.", "Earth")
);
console.log(
  findLastIndexOf("Hello planet earth, you are a great planet.", "12")
);

// second way
let str = "Hello planet earth, you are a great planet.";
// console.log(str.lastIndexOf("earth"));

const findIndexOf = (str, searchItem) => {
  if (typeof str === !str || typeof searchItem === !searchItem) {
    console.log("both value is not same type");
    return -1;
  }

  const lowerStr = str.toLowerCase();
  const lowerSearchItem = searchItem.toLowerCase();

  return lowerStr.indexOf(lowerSearchItem);
};
console.log(findIndexOf("Hello world", "World"));


const getAges = (users) => {
  // Write your code here
  return users.map((user)=> user.age)
}

const users = [
  { name: 'John', age: 25, height: 175 },
  { name: 'Mary', age: 30, height: 165 },
  { name: 'Bob', age: 40, height: 180 },
  { name: 'Jane', age: 20, height: 170 }
];


const age = getAges(users);

console.log("age",age);



Array.prototype.myFindIndex = function(callback, thisArg) {
  // Write your code here

  for(let i = 0; i < this.length; i++) {
      if(callback.call(thisArg, this[i], i, this)) {
        return i;
      }
      
  }
return -1;
  
};
const numbers = [1, 2, 3,4, 5];
const index = numbers.myFindIndex(num => num > 3);
console.log(index);


const array = [5, 12, 8, 130, 44,];

const isLargeNumber = (element) => element > 13;

console.log(array.findIndex(isLargeNumber));





