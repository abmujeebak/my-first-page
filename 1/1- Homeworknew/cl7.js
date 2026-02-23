// // let arrayName = [3, 50, "upskill", 90];
// // console.log(arrayName);
// // console.log(arrayName[2]);
// // console.log(arrayName.length);

// // let myArray = new Array();
// // myArray[0] = "center";
// // myArray[1] = 50;
// // myArray[2] = 100;

// // console.log(myArray[1]);

// let frontend = ["html", 3000, "js", "react"];
// console.log(frontend);

// frontend.push("Nodejs");
// console.log(frontend);

// frontend.pop();
// console.log(frontend);

// frontend.unshift("startingElem");
// console.log(frontend);

// frontend.shift();
// console.log(frontend);

// let firstArray = [20, 50, "html"];
// let secondArray = [90, 30, "js"];

// let allArray1 = firstArray.concat(secondArray);
// console.log(allArray1);

// let frontend1 = ["html", 3000, "js", "react"];
// console.log(frontend1.sort());
// console.log(frontend1.reverse());

let usernames = ["admin", "khan", "sara"];
let inputName = "admin";

if (inputName === usernames[0]) {
  console.log("Login successful");
} else {
  console.log("Access denied");
}

let totals = [300, 700, 1500];

if (totals[2] >= 1000) {
  console.log("20% Discount");
} else if (totals[2] >= 500) {
  console.log("10% Discount");
} else {
  console.log("No Discount");
}

let attendance = ["present", "absent", "present"];

if (attendance[1] === "present") {
  console.log("Student is in class");
} else {
  console.log("Student is absent");
}

// List of enrolled students
let enrolledStudents = ["Ali", "Sara", "Khan"];

// New student trying to enroll
let newStudent = "Ahmad";

// Check if already enrolled
if (
  newStudent === enrolledStudents[0] ||
  newStudent === enrolledStudents[1] ||
  newStudent === enrolledStudents[2]
) {
  console.log("Student is already enrolled");
} else {
  console.log("Enrollment successful");
}

let enrolledStudents = [];

if (enrolledStudents.length === 0) {
  console.log("No students enrolled yet.");
} else {
  console.log("Students already enrolled.");
}

let ratings = [4.5, 3.2, 5];

if (ratings[1] >= 4) {
  console.log("Top Rated Product");
} else {
  console.log("Average Product");
}

// Product names
let products = ["Laptop", "Mouse", "Keyboard"];

// Product stock
let stock = [5, 0, 10];

// User selects product
let selectedProduct = "Mouse";

// Check product and stock
if (selectedProduct === products[0] && stock[0] > 0) {
  console.log("Laptop added to cart");
} else if (selectedProduct === products[1] && stock[1] > 0) {
  console.log("Mouse added to cart");
} else if (selectedProduct === products[2] && stock[2] > 0) {
  console.log("Keyboard added to cart");
} else {
  console.log("Product is out of stock or not available");
}