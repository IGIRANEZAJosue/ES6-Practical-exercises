/*

Create a function that performs a pivot operation, on an array of objects, converting it from long to wide format based on specified keys.

      const longFormatData = [
         { id: 1, name: "Alice", age: 30 },
         { id: 2, name: "Bob", age: 25 },
         { id: 3, name: "Charlie", age: 35 }
      ];
      const keys = ["id", "name"];
      // const wideFormatData = pivotLongToWide(longFormatData, keys);
      // console.log(wideFormatData);
      output: {
      id: [ 1, 2, 3 ],
      name: [ 'Alice', 'Bob', 'Charlie' ]
      }
      ..................................................................................
      const longFormatData = [
         { id: 1, lastName: "Dany", age: 30 },
         { id: 2, lastName: "Josue", age: 25 },
         { id: 3, lastName: "Noella", age: 35 }
      ];
      const keys = ["id", "lastName"];
      // const wideFormatData = pivotLongToWide(longFormatData, keys);
      // console.log(wideFormatData);
      output: {
      id: [ 1, 2, 3 ],
      lastName: [ 'Dany', 'Josue', 'Noella' ]
      }

*/

const longFormatData = [
   { id: 1, name: "Alice", age: 30 },
   { id: 2, name: "Bob", age: 25 },
   { id: 3, name: "Charlie", age: 35 }
];
const keys = ["id", "name"];

const pivotLongToWide = (objects, keys) => {

   let result = {};

   for(let i = 0; i < keys.length; i++) {
      result[keys[i]] = [];
   }

   for(let object of objects) {
      for (let key of keys) {
         result[key].push(object[key])
      }
   }

   return result;
   // console.log(result);

}

console.log(pivotLongToWide(longFormatData, keys));
