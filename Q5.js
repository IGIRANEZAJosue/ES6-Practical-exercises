const longFormatData = [
   { id: 1, name: "Alice", age: 30 },
   { id: 2, name: "Bob", age: 25 },
   { id: 3, name: "Charlie", age: 35 },
];
const keys = ["id", "name"];

const pivotLongToWide = (objects, keys) => {
   let result = {};

   for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = [];
   }

   for (let object of objects) {
      for (let key of keys) {
         result[key].push(object[key]);
      }
   }

   return result;
};

console.log(pivotLongToWide(longFormatData, keys));
