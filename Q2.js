/*

Write a function that takes an object as input and returns a new object with all the key-value pairs reversed (keys become values and values become keys)

const originalObj = {aa: "1", bf: "3", cq: "5"};
const reversedObj = reverseObject(originalObj);
// console.log(reversedObj); 
output: {"1": 'aa', "3": 'bf', "5": 'cq'} // Expected output

*/

const originalObj = { aa: "1", bf: "3", cq: "5" };

const reverseObject = (originalObj) => {
   let result = {};

   for (let key in originalObj) {
      result[originalObj[key]] = key;
   }

   return result;
};

console.log(reverseObject(originalObj));
