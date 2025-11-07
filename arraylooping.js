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
