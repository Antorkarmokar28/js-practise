/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

const burger = 500;
if (burger > 500) {
  console.log("You take a free coke");
} else {
  console.log("You must pay 30tk for coke drinks");
}
/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/
const weight = 70;
const height = 4.75;
const bmi = weight / (height * height);
if (bmi < 18.5) {
  console.log("you are underweight");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log("you are normal");
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log("you are overweight");
} else {
  console.log("You are obese");
}
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const score = 90;
if (score >= 90 && score <= 100) {
  console.log("Grade: A");
} else if (score >= 80 && score <= 89) {
  console.log("Grade: B");
} else if (score >= 70 && score <= 79) {
  console.log("Grade: C");
} else if (score >= 60 && score <= 69) {
  console.log("Grade: D");
} else if (score <= 59) {
  console.log("Grade: F");
}
/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/
const myScore = 79;
const friendScore = 79;
if (myScore > 80) {
  if (friendScore > 80) {
    console.log("We go to resturent for lunch");
  } else if (friendScore < 80 && friendScore >= 60) {
    console.log("Good luck next time");
  } else if (friendScore < 60 && friendScore >= 40) {
    console.log("Message unseen");
  } else {
    console.log("Block your friend");
  }
} else {
  console.log("Go to home and sleep and act sad");
}
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
const number1 = 44;
const number2 = 45;
const result = number1 > number2 ? number1 * 2 : number1 + number2;
console.log(result);
/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let tickerFare = 800;
const isStudent = false;
const age = 60;
if (age < 10) {
  const discount = (tickerFare * 100) / 100;
  tickerFare -= discount;
  console.log("Bus rent free:", tickerFare, "tk");
} else if (isStudent) {
  const discount = (tickerFare * 50) / 100;
  console.log((tickerFare -= discount));
} else if (age >= 60) {
  const discount = (tickerFare * 15) / 100;
  console.log((tickerFare -= discount));
} else {
  console.log(tickerFare);
}
