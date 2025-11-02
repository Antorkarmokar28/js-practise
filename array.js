// 1. Declare an array
// Declare an array with 5 elements containing fruits
// console log the 3rd index element
// change the value of the 2nd index element to jambura
// console log the final array
const fruits = ["apple", "orange", "banana", "pineapple", "watermelon"];
console.log(fruits[3]);
fruits[2] = "jambura";
console.log(fruits);
// 2. Add or remove elements
// Declare an array of 3 tourist destinations
// Add a new tourist destination to your tourist array
// Add two more to your array
// Remove the last tourist destination you have added
// display the final array as output
const tourist = ["Cox's bazar", "Bandharban", "Jaflong"];
const addNewTouristPlace = tourist.push("Potenga");
const addNewTwoTouristPlace = tourist.push("Sundorban", "Sajek Valley");
const removeLastTouristPlace = tourist.pop();
console.log(tourist);
// 3. Checking Array Membership with ‘includes’
// Instructions:

// Create an array of books containing different book.

// Use the includes method to check if the array contains a javascript book.

// Print a message to the console indicating whether the element is present in the array or not.
const books = ["Matmatics", "Bangla", "English", "Javascript"];
if (books.includes("Javascript")) {
  console.log("Yes! The array contains a JavaScript book.");
} else {
  console.log("No! There is no JavaScript book in the array.");
}
// 4. Checking if it's an Array
// Instructions:

// Create different variables, each containing either an array or a non-array value.

// Now use isArray to check if each variable is an array.

// Print a message to the console indicating whether each variable is an array or not.
const friend = ["Naim", "Kanon"];
const age = 45;
const checking = Array.isArray(age);
if (checking) {
  console.log("This is a Array");
} else {
  console.log("No, this is a not Array");
}
// 5. Combining Arrays
// Instructions:

// Create two arrays of your choice.
// Use the concat method to combine the two arrays into a new array.
// Print both the original arrays and the combined array using console.log().
const birds = ["Duyel", "Tia", "Moyna"];
const animals = ["Elephent", "Tiger"];
const mergeArray = birds.concat(animals);
console.log(birds, animals);
console.log(mergeArray);
