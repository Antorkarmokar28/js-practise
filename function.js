// Task-1
// Take four parameters. Multiply the four numbers and then return the result

function multiplyNumber(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}

const result = multiplyNumber(2, 4, 6, 2);
console.log(result);
// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function numbers(num) {
  if (num % 2 !== 0) {
    const multiplyNumber = num * 2;
    return multiplyNumber;
  }
  const dividedNumber = num / 2;
  return dividedNumber;
}
const output = numbers(41);
console.log(output);
// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function averageNumber(numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum / numbers.length;
}
const numbers = [4, 51, 60, 36, 8];
const output1 = averageNumber(numbers);
console.log(output1);
// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function count_zero(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "0") {
      count++;
    }
  }
  return count;
}

const string = "010101";
const output2 = count_zero(string);
console.log(output2);
// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(number) {
  if (number % 2 === 0) {
    return "even";
  }
  return "odd";
}
const number = 44;
const output3 = odd_even(number);
console.log(output3);
