/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/
for (let i = 1; i <= 60; i++) {
  console.log(
    i,
    "I will invest at least 6 hrs every single day for next 60 days!"
  );
}
/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */

/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */

/*programming hero*/
for (let i = 61; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
for (let i = 78; i <= 98; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

/***

Subtask-1:

Display sum of all the odd numbers from 91 to 129.

 */
/***

Subtask-2:

Display sum of all the even numbers from 51 to 85.

 */

/*programming hero*/
let oddSumNum = 0;
for (let i = 91; i <= 129; i++) {
  if (i % 2 === 1) {
    oddSumNum = oddSumNum + i;
    console.log(oddSumNum);
  }
}
let evenSumNum = 0;
for (let i = 51; i <= 85; i++) {
  if (i % 2 === 0) {
    evenSumNum += i;
    console.log(evenSumNum);
  }
}
/***

Generate a multiplication table for number 9

 */

/*programming hero*/
let multiplicationNumber = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${multiplicationNumber}x${i}=${multiplicationNumber * i}`);
}
/***

Implement a countdown timer that counts down from 81 to 65.

 */

/*programming hero*/
for (let i = 81; i >= 65; i--) {
  console.log(i);
}
