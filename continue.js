/* 
Write a loop to print even numbers from 1 to 40. Use continue to skip odd numbers.
*/
for (let i = 1; i <= 40; i++) {
  if (i % 2 === 1) {
    continue;
  } else {
    console.log(i);
  }
}
/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
let number = 55;
while (number <= 85) {
  number++;
  if (number % 5 === 0) {
    continue;
  } else {
    console.log(number);
  }
}
