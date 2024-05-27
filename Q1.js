/*
Write a function in JavaScript that takes an array of strings combined with numbers as input and returns a new array containing the original string and the extracted numeric values from those strings.

const input = ["Hello123", "World456", "49", "Another789"];
const output = extractWordsAndNumbers(input);
console.log(output); // ["Hello", 123, "World", 456, 49, "Another", 789]

*/

const input = ["Hello123", "World456", "49", "Another789"];

const extractWordsAndNumbers = (input) => {
   let result = [];
   let alphabet = "abcdefghijklmnopqrstuvwxyz";

   input.forEach((element) => {
      let number = element.match(/\d+/g);
      let text = "";
      for (let e of element) {
         if (alphabet.includes(e.toLowerCase())) {
            text += e;
         }
      }
      result.push(text, parseInt(number[0]));
      text = "";
   });

   console.log(result.filter(Boolean));
   return result.filter(Boolean);
};

extractWordsAndNumbers(input);
