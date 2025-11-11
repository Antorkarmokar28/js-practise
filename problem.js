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
// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
function calculateElectronicsBudget(
  laptopQuantity,
  tabletQuantity,
  mobileQuantity
) {
  const laptop = 35000;
  const tablet = 15000;
  const mobile = 20000;

  const totalLaptopPrice = laptop * laptopQuantity;
  const totalTabletPrice = tablet * tabletQuantity;
  const totalMobilePrice = mobile * mobileQuantity;
  const totalPrice = totalLaptopPrice + totalTabletPrice + totalMobilePrice;
  return totalPrice;
}
const budget = calculateElectronicsBudget(2, 0, 1);
console.log(budget);
// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(phones) {
  let price = 0;
  for (const phone of phones) {
    price = price + phone.price;
  }
  const averagePrice = price / phones.length;
  return averagePrice;
}
const output2 = findAveragePhonePrice(phones);
console.log(output2);
