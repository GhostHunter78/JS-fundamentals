// 1 - Declare an empty array
let emptyArray = [];

// 2 - Declare an array with more than 5 number of elements
let newArray = [1, 2, ".", " ", "Luka"];
console.log(newArray);

// 3 - Find the length of your array
console.log(newArray.length);

// 4 - Get the first item, the middle item and the last item of the array
let firstItem = newArray[0];
let lastItem = newArray[newArray.length - 1];
let middleItem = newArray[Math.floor(newArray.length / 2)];
console.log(firstItem, lastItem, middleItem);

// 5 - Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [
  1,
  "string",
  true,
  null,
  { name: "Luka" },
  ["apple", "banana", "cherry"],
];

console.log(mixedDataTypes.length);

// 6 - Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7 - Print the array using console.log()
console.log(itCompanies);

// 8 - Print the number of companies in the array
console.log(itCompanies.length);

// 9 - Print the first company, middle and last company
let firstCompany = itCompanies[0];
let middleCompany = itCompanies[Math.floor(itCompanies.length / 2)];
let lastCompany = itCompanies[itCompanies.length - 1];

console.log(firstCompany, middleCompany, lastCompany);

// 10 - Print out each company
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

// 11 - Change each company name to uppercase one by one and print them out
for (let i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i].toUpperCase());
}

// 12 - Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.
// (?)

// 13 - Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let company = "";
const formattedCompany =
  company.charAt(0).toUpperCase() + company.slice(1).toLowerCase();
if (itCompanies.includes(formattedCompany)) {
  console.log(formattedCompany);
} else {
  console.log("Company not found");
}

// 14 - Filter out companies which have more than one 'o' without the filter method
let doubleOCompanies = [];

for (let i = 0; i < itCompanies.length; i++) {
  let company = itCompanies[i];
  let countO = 0;

  for (let k = 0; k < company.length; k++) {
    if (company[k].toLowerCase() === "o") {
      countO++;
    }
  }

  if (countO > 1) {
    doubleOCompanies.push(company);
  }
}
console.log('Companies with more than one "o":', doubleOCompanies);

// 15 - Sort the array using sort() method
console.log(itCompanies.sort());

// 16 - Reverse the array using reverse() method
console.log(itCompanies.reverse());

// 17 - Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// 18 - Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));

// 19 - Slice out the middle IT company or companies from the array
let middleCompanies = [];

if (itCompanies.length % 2 === 0) {
  let middleIndex1 = itCompanies.length / 2 - 1;
  let middleIndex2 = itCompanies.length / 2;
  middleCompanies = itCompanies.slice(middleIndex1, middleIndex2);
} else {
  let middleIndex = Math.floor(itCompanies.length / 2);
  middleCompanies = itCompanies.slice(middleIndex, middleIndex + 1);
}

console.log("Middle company(s):", middleCompanies);

// 20 - Remove the first IT company from the array
console.log(itCompanies.shift());

// 21 - Remove the middle IT company or companies from the array
let removedMiddleCompany = itCompanies.splice(
  Math.floor(itCompanies.length / 2)
);
console.log("Removed middle company is:", removedMiddleCompany);

// 22 - Remove the last IT company from the array
console.log(itCompanies.pop());

// 23 - Remove all IT companies
let itCompanyNames = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

let deletedItCompanies = itCompanies.filter(function (company) {
  return !itCompanyNames.includes(company);
});
console.log("Array after removing its all elements:", deletedItCompanies);

console.log("Countries:", countries);
console.log("Web Techs:", webTechs);

// 24 - const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'] add 'Meat' in the beginning of your shopping cart if it has not been already added
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
shoppingCart.unshift("Meat");
console.log(shoppingCart);

// 25 - add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.shift("Meat");
shoppingCart.push("Meat");
console.log(shoppingCart);

// 26 - remove 'Honey' if you are allergic to honey
let alergic = true;
if (alergic) {
  const honeyIndex = shoppingCart.indexOf("Honey");
  if (honeyIndex !== -1) {
    shoppingCart.splice(honeyIndex, 1);
  }
}
console.log(shoppingCart);

// 27 - modify Tea to 'Green Tea'
let teaIndex = shoppingCart.indexOf("Tea");

if (teaIndex !== -1) {
  shoppingCart[teaIndex] = "Green Tea";
}
console.log(shoppingCart);

// 28 - In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
const ethiopiaIndex = countries.indexOf("Ethiopia");
if (ethiopiaIndex === -1) {
  countries.push("Ethiopia");
} else {
  console.log("ETHIOPIA");
}
console.log(countries);

// 29 - In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const sassIndex = webTechs.indexOf("Sass");
if (sassIndex === -1) {
  webTechs.push("Sass");
} else {
  console.log("Sass is a CSS preprocess");
}
console.log(webTechs);
