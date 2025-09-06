function replaceAllWhiteSpace(str) {
  if (!str) {
    return str;
  }
  return str.replace(/\s/, "");
}
console.log(replaceAllWhiteSpace("reetu singh alakh"));


export const reverseArray = (array) => {
  const reversedvalue = [...array].reverse();
  return reversedvalue;
}
 console.log(reverseArray([1, 2, 3, 4]));