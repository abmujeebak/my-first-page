// // // // const express = require("express");
// // // // const connectDB = require("./src/config/db");
// // // // const { error } = require("console");
// // // // const { Dir } = require("fs");

// // const { count } = require("console");

// // // // const app = express();
// // // // const PORT = 3000;

// // // // app.use(express.json());

// // // // const DIARY = {};
// // // // const EMAILS = new Set();

// // // // // Signup  here is my car - Please park it and give me back token
// // // // // email => unique car number
// // // // app.post("/signup", (req, res) => {
// // // //   const { name, email, password } = req.body;

// // // //   if (EMAILS.has(email)) {
// // // //     return res.status(400).json({ error: "Email already taken" });
// // // //   }

// // // //   const token = `${Date.now()}`;

// // // //   DIARY[token] = { name, email, password };
// // // //   EMAILS.add(email);

// // // //   return res.json({ status: "success", token });
// // // // });

// // // // app.post("/me", (req, res) => {
// // // //   const { token } = req.body;

// // // //   if (!token) {
// // // //     return res.status(400).json({ error: "Missing Token" });
// // // //   }

// // // //   if (!(token in DIARY)) {
// // // //     return res.status(400).json({ error: "Invalid Token" });
// // // //   }

// // // //   const entry = DIARY[token];

// // // //   return res.json({ data: entry });
// // // // });

// // // // // check the token

// // // // app.post("/tokenData", (req, res) => {
// // // //   const { token } = req.body;

// // // //   if (!token) {
// // // //     return res.status(400).json({ error: "Missing Token" });
// // // //   }

// // // //   if (!(token in DIARY)) {
// // // //     return res.status(400).json({ error: "Invalid Token" });
// // // //   }

// // // //   const entry = DIARY[token];

// // // //   return res.json({ data: entry });
// // // // });

// // // // // Connect to MongoDB
// // // // connectDB();

// // // // app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// // // // loop > forloop, whileloop, do while, foreach, for in , for of

// // // // for loop 1, var, cond, incre

// // // for (i = 1; i <= 10; i++) {
// // //   console.log("Users list" + i);
// // // }

// // // let empList = ["khan", "jan", "upskill"];

// // // for (i = 0; i < empList.length; i++) {
// // //   console.log(empList[i]);
// // // }

// // // let students = ["Ahmad", "Fatima", "Bilal", "Zahra"];

// // // for (let i = 0; i < students.length; i++) {
// // //   console.log(students[i] + " is enrolled in Web Development Course.");
// // // }

// // // let employees = ["Ali Khan", "Sara Ahmad", "Bilal Jan"];
// // // let performanceScore = [85, 60, 90];

// // // for (let i = 0; i < employees.length; i++) {
// // //   if (performanceScore[i] >= 80) {
// // //     console.log(employees[i] + " will receive a bonus.");
// // //   } else {
// // //     console.log(employees[i] + " will not receive a bonus.");
// // //   }
// // // }

// // // let number = 0;
// // // while (number <= 10) {
// // //   console.log(number++);
// // // }

// // // let counts = 0;

// // // do {
// // //   console.log(counts++);
// // // } while (counts <= 10);

// // let employees = ["Ali Khan", "Sara Ahmad", "Bilal Jan"];
// // for (data of employees) {
// //   console.log(data);
// // }

// // for (emp in employees) {
// //   console.log(employees[emp]);
// // }

// let users = {
//   user_id: 1,
//   username: "upskill",
//   userpassword: "23bc",
//   userlocation: "kabul",
// };

// console.log(users.user_id);
// console.log(users);

// // json / api

// let emp = [
//   {
//     emp_id: 1,
//     emp_name: "upskill",
//   },

//   {
//     emp_id: 2,
//     emp_name: "upskill222",
//   },
// ];

// for (empList in emp) {
//   console.log(emp[empList]);
// }



let employees = [
  { name: "Ali Khan", position: "Manager", salary: 80000, performance: 85 },
  { name: "Sara Ahmad", position: "Developer", salary: 60000, performance: 75 },
  { name: "Bilal Jan", position: "Designer", salary: 50000, performance: 90 },
];

for (let i = 0; i < employees.length; i++) {
  console.log("Employee Name: " + employees[i].name);
  console.log("Position: " + employees[i].position);
  console.log("Salary: " + employees[i].salary);

  if (employees[i].performance >= 80) {
    console.log("Bonus: Eligible ✅");
  } else {
    console.log("Bonus: Not Eligible ❌");
  }

  console.log("----------------------");
}




let student = {
    name : "John"
    age : 20
    marks: {
        science: 70,
        math: 75
    },

};

console.log(student.marks);
console.log(student.marks.science);