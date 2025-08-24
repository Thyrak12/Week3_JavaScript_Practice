// Array Method

// Exercise 1
let numbers = [1, 2, 3, 4, 5];
// TODO: Use map() to create a new array with each number multiplied by 2
let new_numbers = numbers.map(num => num * 2);
console.log(new_numbers);

// Exercise 2
let nums = [10, 15, 20, 25, 30];
// TODO: Use filter() to keep only even numbers
let even = nums.filter(num => num % 2 === 0);
console.log(even);

// Exercise 3
let prices = [5, 10, 15, 20];
// TODO: Use reduce() to calculate the total sum
let sum = prices.reduce((i,f) => i + f, 0);
console.log(sum);

// Exercise 4
let fruits = ["apple", "banana", "cherry", "mango"];
// TODO: Use find() to get the fruit "cherry"
let foundFruit = fruits.find(fruit => fruit === 'cherry');
console.log(foundFruit);
// TODO: Use includes() to check if "banana" exists
console.log(fruits.includes('banana'));

// Exercise 5
let names = ["Zara", "Alex", "John", "Maya"];
// TODO: Sort alphabetically
let alphabet = names.sort();
console.log(alphabet);
// TODO: Reverse the order
let reverse1 = names.reverse();
console.log(reverse1);

