/* 

Write a loop 1 to 200. Use break to exit the loop once you find 100.

*/
let i = 1;
while (i <= 200) {
  if (i === 100) {
    console.log("Found 100! Exiting the loop...");
    break;
  }
  i++;
}
/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/
let sum = 0;
let number = 1;
while (true) {
  sum = sum + number;
  console.log("Number:", number, "Sum:", sum);
  if (number >= 100) {
    console.log("Sum reached 100 or more! Breaking the loop.");
    break;
  }
  number++;
}
/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

for (let i = 1; i <= 100; i++) {
  let sqrt = Math.sqrt(i);
  if (sqrt === Math.floor(sqrt)) {
    console.log(`First perfect square found: ${i}`);
    break;
  }
  console.log(i);
}
