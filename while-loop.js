/***

"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.

 */

/*programming hero*/
let message = 1;
while (message <= 60) {
  console.log(
    `${message}.I will invest at least 6 hrs every single day for next 60 days!`
  );
  message++;
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

let oddNum = 61;
while (oddNum <= 100) {
  if (oddNum % 2 !== 0) {
    console.log(oddNum);
  }
  oddNum++;
}

let evenNum = 78;
while (evenNum <= 98) {
  if (evenNum % 2 === 0) {
    console.log(evenNum);
  }
  evenNum++;
}
/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

/*programming hero*/
let oddNumber = 81;
let sumOddNumber = 0;
while (oddNumber <= 131) {
  if (oddNumber % 2 === 1) {
    sumOddNumber = sumOddNumber + oddNumber;
    console.log(sumOddNumber);
  }
  oddNumber++;
}

let evenNumber = 206;
let sumEvenNumber = 0;
while (evenNumber <= 311) {
  if (evenNumber % 2 === 0) {
    sumEvenNumber += evenNumber;
    console.log(sumEvenNumber);
  }
  evenNumber++;
}
/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

/*programming hero*/

let multiplicationNumber = 5;
let i = 1;
while (i <= 10) {
  console.log(`${multiplicationNumber}x${i}=${multiplicationNumber * i}`);
  i++;
}
/***

Implement a countdown timer that counts down from 21 to 15.

 */

/*programming hero*/
let timer = 21;
while (timer >= 15) {
  console.log(timer);
  timer--;
}
