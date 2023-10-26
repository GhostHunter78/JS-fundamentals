// 1 - Iterate 0 to 10 using for loop, do the same using while and do while loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

// 2 - Iterate 10 to 0 using for loop, do the same using while and do while loop
for (let i = 10; i >= 0; i--) {
  console.log(i);
}

let k = 10;
while (k >= 0) {
  console.log(k);
  k--;
}

// 3 - Iterate 0 to n using for loop
let n;
for (let i = 0; i <= n; i++) {
  console.log(i);
}

// 4 - Use for loop to iterate from 0 to 100 and print only even numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 5 - Use for loop to iterate from 0 to 100 and print only odd numbers
for (let i = 0; i <= 100; i++) {
  if (i % 2 > 0) {
    console.log(i);
  }
}

// 6 - Use for loop to iterate from 0 to 100 and print the sum of all numbers. The sum of all numbers from 0 to 100 is 5050.
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(sum);

// 7 - Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
let sumOfAllEvenes = 0;
let sumOfAllOdds = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    sumOfAllEvenes += i;
  }
  if (i % 2 > 0) {
    sumOfAllOdds += i;
  }
}

console.log(sumOfAllEvenes);
console.log(sumOfAllOdds);

// 8 - Develop a small script which generate array of 5 random numbers
function generateRandomArray(length) {
  const randomArray = [];

  for (let i = 0; i < length; i++) {
    let randomNumber = Math.floor(Math.random() * 10); // Generates a random number between 0 and 99
    randomArray.push(randomNumber);
  }

  return randomArray;
}

console.log(generateRandomArray(5));

// 9 - Write a script which generates a random hexadecimal number. ex: '#ee33df'
function randomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

console.log(randomHexColor());

// 10 - Write a script which generates a random rgb color number. rgb(240,180,80)
function generateRandomRGBColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
}

console.log(generateRandomRGBColor());
