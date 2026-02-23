// 1. Prime number checker
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("Prime Numbers between 1 and 50:");
for (let i = 1; i <= 50; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}

// 2. Employee salary raise based on performance
let employees = [
  { name: "Ali Khan", position: "Manager", salary: 80000, performance: 88 },
  { name: "Sara Ahmad", position: "Developer", salary: 60000, performance: 76 },
  { name: "Bilal Jan", position: "Designer", salary: 50000, performance: 92 },
];

for (let i = 0; i < employees.length; i++) {
  if (employees[i].performance >= 80) {
    employees[i].salary += 5000; // Raise for high performance
  }
}
console.log("Updated Salaries:");
employees.forEach(emp => console.log(`${emp.name}: $${emp.salary}`));

// 3. Create a multiplication matrix
let matrix = [];
let size = 5;
for (let i = 1; i <= size; i++) {
  let row = [];
  for (let j = 1; j <= size; j++) {
    row.push(i * j);
  }
  matrix.push(row);
}
console.log("Multiplication Matrix:");
console.table(matrix);

// 4. Reverse a string
let originalString = "JavaScript is cool!";
let reversedString = "";
for (let i = originalString.length - 1; i >= 0; i--) {
  reversedString += originalString[i];
}
console.log("Reversed String: " + reversedString);

// 5. Generate Fibonacci series
let fib = [0, 1];
for (let i = 2; i < 15; i++) {
  fib[i] = fib[i - 1] + fib[i - 2];
}
console.log("Fibonacci Series: " + fib.join(", "));

// 6. Count letter frequency in a string
let text = "hello world";
let frequency = {};
for (let i = 0; i < text.length; i++) {
  let char = text[i];
  if (frequency[char]) {
    frequency[char]++;
  } else {
    frequency[char] = 1;
  }
}
console.log("Letter Frequency:", frequency);

// 7. Merge two sorted arrays
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let mergedArray = [];
let i = 0, j = 0;

while (i < arr1.length || j < arr2.length) {
  if (i < arr1.length && (j >= arr2.length || arr1[i] < arr2[j])) {
    mergedArray.push(arr1[i++]);
  } else {
    mergedArray.push(arr2[j++]);
  }
}
console.log("Merged Array:", mergedArray);

// 8. Create a histogram from an array
let numbers = [5, 1, 3, 4, 5, 1, 2, 5];
let histogram = {};
for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  histogram[num] = (histogram[num] || 0) + 1;
}
console.log("Histogram:", histogram);

// 9. Sum of digits of a number
let number = 12345;
let sumOfDigits = 0;
for (let i = 0; i < number.toString().length; i++) {
  sumOfDigits += parseInt(number.toString()[i]);
}
console.log("Sum of Digits:", sumOfDigits);

// 10. Rotate an array to the right
let array = [1, 2, 3, 4, 5];
let rotations = 2;
let rotatedArray = new Array(array.length);
for (let i = 0; i < array.length; i++) {
  rotatedArray[(i + rotations) % array.length] = array[i];
}
console.log("Rotated Array:", rotatedArray);