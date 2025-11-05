// Task-1:
// Count how many times a string has the letter a
let text = "JavaScript is amazing!";
let count = 0;
for (let i = 0; i < text.length; i++) {
  if (text[i].toLocaleLowerCase() === "a") {
    count++;
  }
}
console.log(count);
// Task-2:
// Count how many times a string has the letter a or A
let text2 = "An Apple a day keeps the doctor Away";
let count2 = 0;
for (let i = 0; i < text2.length; i++) {
  if (text2[i].includes("a") || text2[i].includes("A")) {
    count2++;
  }
}
console.log(count2);
// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
let vowel = "Education is a powerful tool";
vowel = vowel.toLocaleLowerCase();

if (
  vowel.includes("a") &&
  vowel.includes("e") &&
  vowel.includes("i") &&
  vowel.includes("o") &&
  vowel.includes("u")
) {
  console.log("The string contains all the vowels (a, e, i, o, u).");
} else {
  console.log("The string does not contain all the vowels.");
}
