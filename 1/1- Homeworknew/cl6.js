// Example 1: User Role Check
let roles = ["user", "editor", "admin"];
let inputRole = "editor";

if (inputRole === roles[1]) {
  console.log("Edit access granted");
} else {
  console.log("Access denied");
}

// Example 2: Age Verification
let ages = [15, 20, 30];
let inputAge = 22;

if (inputAge >= 21) {
  console.log("Adult access granted");
} else {
  console.log("Access denied");
}

// Example 3: Temperature Check
let temperatures = [30, 25, 15];
let inputTemperature = 22;

if (inputTemperature > 25) {
  console.log("It's a hot day");
} else if (inputTemperature > 15) {
  console.log("It's a pleasant day");
} else {
  console.log("It's a cold day");
}

// Example 4: Membership Tier
let tiers = ["basic", "silver", "gold"];
let inputMembership = "silver";

if (inputMembership === tiers[2]) {
  console.log("Gold benefits granted");
} else if (inputMembership === tiers[1]) {
  console.log("Silver benefits granted");
} else {
  console.log("Basic benefits granted");
}

// Example 5: Inventory Check
let items = [5, 0, 20];
let inputItemIndex = 1;

if (items[inputItemIndex] === 0) {
  console.log("Item out of stock");
} else if (items[inputItemIndex] < 10) {
  console.log("Low stock");
} else {
  console.log("In stock");
}