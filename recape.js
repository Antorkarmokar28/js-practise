const numbers = [4, 10, 9, 20, 55, 101];

let i = 0;
let maxNumber = 0;
while (i < numbers.length) {
  if (maxNumber < numbers[i]) {
    maxNumber = numbers[i];
  }
  i++;
}
console.log(maxNumber);

const friends = ["Asif", "Kanon", "Bishow", "Rumon"];

let bigName = "";
for (let i = 0; i < friends.length; i++) {
  if (friends[i].length > bigName.length) {
    bigName = friends[i];
  }
}
console.log(bigName);

const price = [10, 20, 30, 45];
const last = price.slice(-1)[0];
console.log(last);
