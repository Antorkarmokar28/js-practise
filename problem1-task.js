// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.
function temperatureToFarenheit(celsius) {
  return celsius * (9 / 5) + 32;
}
const output = temperatureToFarenheit(35);
console.log(output);
// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0
function duplicateFind(numbers, finNumber) {
  let count = 0;
  for (const num of numbers) {
    if (num === finNumber) {
      count++;
    }
  }
  return count;
}
const numbers = [5, 6, 11, 12, 98, 5];
const numbers2 = [5, 6, 11, 12, 98, 5];
const output1 = duplicateFind(numbers, 5);
const output2 = duplicateFind(numbers2, 25);
console.log(output1, output2);
// Task-3:
// Write a function to count the number of vowels in a string.
function findVowel(string) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (const char of string.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
const vowelString = "Hello";
const output3 = findVowel(vowelString);
console.log(output3);
// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

function findLongestWord(string) {
  const words = string.split(" ");
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}
const string = "I am learning Programming to become a programmer";
const output4 = findLongestWord(string);
console.log(output4);
// Task-5:
// Generate a random number between 10 to 20.
function generateRandomNumber() {
  const random = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  return random;
}

const output5 = generateRandomNumber();
console.log(output5);
