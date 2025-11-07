// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const colors = ["red", "blue", "green", "yellow", "orange"];
const rev_colors = [];
let i = 0;
while (i < colors.length) {
  rev_colors.unshift(colors[i]);
  i++;
}
console.log(rev_colors);

// Task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];
const numbers = [12, 98, 5, 41, 23, 78, 46];
let even_num = [];
for (let i = 0; i < numbers.length; i++) {
  const num = numbers[i];
  if (num % 2 === 0) {
    even_num.push(num);
  }
}
console.log(even_num);
// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'
const strings = ["Tom", "Tim", "Tin", "Tik"];
let full_string = "";
for (const string of strings) {
  full_string = full_string.concat(string);
}
console.log(full_string);
// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'
const statement = "I am a hard working person";
const words = statement.split(" ");
let revWords = [];
for (let i = words.length - 1; i >= 0; i--) {
  revWords.push(words[i]);
}
const rev_statement = revWords.join(" ");
console.log(rev_statement);
// Task 5
// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]
const numbers1 = [1, 2, 3];
console.log("Original Array:", numbers1);
const copyNumbers = [...numbers1];
copyNumbers[0] = 99;
console.log("Coppy Array", copyNumbers);
// Given an array of student objects, print each student’s name and marks.
const students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];
for (const student of students) {
  const studentName = student.name;
  const studentMark = student.marks;
  console.log("Name:", studentName, "Marks", studentMark);
}
// Task 7
// Given a 2D array, update the value at second row first item to 99 and print the updated array.

// input:

// [
//   [1, 2],
//   [3, 4],
//   [5, 6]
// ]
// Expected Array:

// [
//   [1, 2],
//   [99, 4],
//   [5, 6]
// ]
const numbersOfArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
numbersOfArray[1][0] = 99;
console.log(numbersOfArray);
