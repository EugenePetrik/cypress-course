// Task data

const arrOfStings = ['Denis', 'Bill', 'Anna'];
const arrOfNumbers = [10, 7, 44, 32, 9, 5, 16];
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
let result = null;

// Task #1

arrOfStings.sort();   // Method sort() changes original array
console.log(arrOfStings);   // [ 'Anna', 'Bill', 'Denis' ]

// Task #2

result = arrOfNumbers.slice().sort();   // Method slice() creates a new array
console.log(result);   // [ 10, 16, 32, 44, 5,  7,  9 ]
console.log(arrOfNumbers);   // [ 10, 7, 44, 32, 9, 5, 16 ]

// Task #3

const sortAsc = arrOfNumbers.sort((prev, next) => prev - next);
console.log(sortAsc);   // [ 5,  7,  9, 10, 16, 32, 44 ]

const sortDesc = arrOfNumbers.sort((prev, next) => next - prev);
console.log(sortDesc);   // [ 44, 32, 16, 10, 9,  7,  5 ]

// Task #4 - use forEach to console.log each country in the countries array

countries.forEach((country) => console.log(country));

// Task #5 - use map to create a new array by changing each country to uppercase in the countries array

result = countries.map((country) => country.toUpperCase());
console.log(result);   // [ 'FINLAND', 'SWEDEN', 'DENMARK', 'NORWAY', 'ICELAND' ]

// Task #6 - use filter to filter out countries containing land

result = countries.filter((country) => country.toLocaleLowerCase().includes('land'));
console.log(result);   // [ 'Finland', 'IceLand' ]

// Task #7 - use reduce to sum all the numbers in the numbers array

result = arrOfNumbers.reduce((acc, item, index) => {
  console.log(`Current index - ${index}, accumulator - ${acc}, item - ${item}`);
  return acc + item;
}, 0);
console.log(result);   // 123

// Task #8 - use some to check if some names' length greater than seven in names array

result = names.some((userName) => userName.length > 7);
console.log(result);   // true

// Task #9 - use every to check if all the countries contain the word land

result = countries.every((country) => country.toLowerCase().includes('land'));
console.log(result);   // false

// Task 10 - use find to find the first country containing only six letters in the countries array

result = countries.find((country) => country.length === 6);
console.log(result);   // Sweden

// Task #11 - use findIndex to find the position of Ukraine if it doesn't exist in the array you will get -1

result = countries.findIndex((country) => country === 'Ukraine');
console.log(result);   // -1

result = countries.findIndex((country) => country === 'Norway');
console.log(result);   // 3
