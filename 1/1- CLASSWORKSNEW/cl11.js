// Example 1: Enrollment type fees
let enrollmentType = "domestic";

if (enrollmentType === "domestic") {
    console.log("The payment is $2000");
} else if (enrollmentType === "international") {
    console.log("The payment is $4000");
} else {
    console.log("Invalid payment");
}

// Example 2: Visa validation based on payment and scholarship
let payment = false;
let scholarship = false;

if (payment && scholarship) {
    console.log("Valid visa");
} else if (payment && !scholarship) {
    console.log("Please apply for scholarship");
} else if (!payment && scholarship) {
    console.log("Please complete the payment.");
} else {
    console.log("Invalid visa");
}

// Example 3: Course type fees
let courseType = "online";
let discount = true;

if (courseType === "online" && discount) {
    console.log("The fee is $4000");
} else if (courseType === "online") {
    console.log("The fee is $6000");
} else if (courseType === "offline" && discount) {
    console.log("The fee is $8000");
} else if (courseType === "offline") {
    console.log("The fee is $10000");
} else {
    console.log("Invalid course.");
}

// Example 4: Discount eligibility based on student type and period
let studentType = "international";
let period = "graduate";

if (studentType === "domestic" && period === "graduate") {
    console.log("You have a discount.");
} else if (studentType === "international" || period === "graduate") {
    console.log("You do not have a discount.");
} else {
    console.log("Invalid info.");
}

// Example 5: Enrollment fee based on age group
let ageGroup = "adult"; 
let isFullTimeStudent = true;

if (ageGroup === "youth") {
    console.log("The enrollment fee is: $4000");
} else if (ageGroup === "adult" && isFullTimeStudent) {
    console.log("The enrollment fee is: $6000");
} else if (ageGroup === "adult") {
    console.log("The enrollment fee is: $8000");
} else {
    console.log("Invalid age group.");
}

// Example 6: Enrollment fee based on location
let location = "rural"; 
let hasScholarship = false;

if (location === "urban") {
    console.log("The enrollment fee is: $8000");
} else if (location === "rural" && hasScholarship) {
    console.log("The total enrollment fee is: $6000");
} else if (location === "rural") {
    console.log("The enrollment fee is: $7000");
} else {
    console.log("Invalid location.");
}

// Example 7: Enrollment fee based on age and special needs
let age = 17; 
let hasSpecialNeeds = true;

if (age < 18) {
    console.log("The enrollment fee is: $3000");
} else if (age >= 18 && hasSpecialNeeds) {
    console.log("The enrollment fee is: $3500");
} else if (age >= 18) {
    console.log("The enrollment fee is: $5000");
} else {
    console.log("Invalid age.");
}

// Example 8: Year of study enrollment fee
let yearOfStudy = 3; 
let isInternational = false;

if (yearOfStudy === 1) {
    console.log("The enrollment fee is: $5000");
} else if (yearOfStudy === 2) {
    console.log("The enrollment fee is: $6000");
} else if (yearOfStudy === 3 && isInternational) {
    console.log("The enrollment fee is: $8000");
} else if (yearOfStudy === 3) {
    console.log("The enrollment fee is: $7000");
} else if (yearOfStudy === 4) {
    console.log("The enrollment fee is: $9000");
} else {
    console.log("Invalid year of study.");
}