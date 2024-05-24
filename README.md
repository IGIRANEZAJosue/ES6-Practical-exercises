# ES6 Interview Questions (Practicals)


## Q1
Write a function in JavaScript that takes an array of strings combined with numbers as input and returns a new array containing the original string and the extracted numeric values from those strings.

```js
const input = ["Hello123", "World456", "49", "Another789"];
const output = extractWordsAndNumbers(input);

// console.log(output);
output: [  "Hello",123, "World", 456, 49, "Another", 789] // Expected output

```

## Q2
Write a function that takes an object as input and returns a new object with all the key-value pairs reversed (keys become values and values become keys)

```js
const originalObj = {aa: "1", bf: "3", cq: "5"};
const reversedObj = reverseObject(originalObj);
// console.log(reversedObj); 
output: {"1": 'aa', "3": 'bf', "5": 'cq'} // Expected output

```

## Q3
Create a function that performs a deep comparison between two arrays of objects, checking for equality of nested properties.

```js
const array1 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array2 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

// console.log(deepEqualArrays(array1, array2));
output: true
......................................................................................

const array1 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array2 = [
    { id: 3, name: "Alice ", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

// console.log(deepEqualArrays(array1, array2));
output: false

```

## Q4
You are given an array of objects representing employees in a company. Each object contains the following properties: name, age, and department. Your task is to write a function to calculate the average age of each department's employees. The function should return an object containing the department name and the summation of employees' age in each department.

```js
//Example Input:
const employees = [
{ name: 'Alice', age: 30, department: 'Engineering' },
{ name: 'Bob', age: 25, department: 'Marketing' },
{ name: 'Charlie', age: 35, department: 'Engineering' },
{ name: 'David', age: 40, department: 'HR' },
{ name: 'Eve', age: 28, department: 'Marketing' },
];

output:
{
Engineering: 65,
Marketing: 53,
HR: 40
} // Expected output

```

## Q5

Create a function that performs a pivot operation, on an array of objects, converting it from long to wide format based on specified keys.

```js
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

```

## Q6

Create a JavaScript function named activeUsers that takes two parameters, an array of users and age. This function should return the new array containing the extracted names of active users older than a given age

```js
const users = [
  { id: 1, name: "john", age: 60, isActive: true },
  { id: 2, name: "king", age: 75, isActive: false },
  { id: 3, name: "jasper", age: 20, isActive: true },
  { id: 4, name: "Samy", age: 30, isActive: true },
  { id: 5, name: "Emma", age: 40, isActive: false },
];
// console.log(activeUsers(users, 25))
// Return the new array containing the extracted names
output: ["john", "Samy"]

```

