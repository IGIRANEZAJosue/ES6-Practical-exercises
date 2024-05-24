const array1 = [
   { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
   { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array2 = [
   { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
   { id: 2, name: "Bob", details: { age: 25 , city: "Los Angeles" } }
];

const deepEqualArrays = (array1, array2) => {

   if (array1.length !== array2.length) return false;

   if(JSON.stringify(array1) === JSON.stringify(array2)) {
      return true
   } else {
      return false;
   }

}

console.log(deepEqualArrays(array1, array2));

