// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

function lowestNumber(numbers) {
  let lowest = numbers[0];
  for (const number of numbers) {
    if (number < lowest) {
      lowest = number;
    }
  }
  return lowest;
}
const numbers = [167, 190, 120, 165, 137];
const output = lowestNumber(numbers);
console.log(output);
// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function smallestName(names) {
  let smallest = names[0];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.length < smallest.length) {
      smallest = name;
    }
  }
  return smallest;
}

const names = ["rahim", "robin", "rafi", "ron", "rashed"];
const output1 = smallestName(names);
console.log(output1);
