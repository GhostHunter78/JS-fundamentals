/* 1 - Write a code which can give grades to students according to theirs scores:
	90-100, A
	70-89, B
	60-69, C
	50-59, D
	0-49, F */

let score;
let grade;

if (score >= 90 && score <= 100) {
  console.log("Your grade is A");
} else if (score >= 70 && score <= 89) {
  console.log("Your grade is B");
} else if (score >= 60 && score <= 69) {
  console.log("Your grade is C");
} else if (score >= 50 && score <= 59) {
  console.log("Your grade is D");
} else {
  console.log("Your grade is F");
}

/* 2 - Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
	September, October or November, the season is Autumn.
	December, January or February, the season is Winter.
	March, April or May, the season is Spring
	June, July or August, the season is Summer */

let userInput = "";
userInput = userInput.toLowerCase();

if (
  userInput === "september" ||
  userInput === "november" ||
  userInput === "october"
) {
  console.log("The season is Autumn");
} else if (
  userInput === "december" ||
  userInput === "january" ||
  userInput === "fabruary"
) {
  console.log("The season is Winter");
} else if (
  userInput === "march" ||
  userInput === "april" ||
  userInput === "may"
) {
  console.log("The season is Spring");
} else if (
  userInput === "june" ||
  userInput === "july" ||
  userInput === "august"
) {
  console.log("The season is Summer");
} else {
  console.log(false);
}

/* 3 - Check if a day is weekend day or a working day. Your script will take day as an input.

 	What is the day  today? Saturday
  	Saturday is a weekend.

  	What is the day today? saturDaY
  	Saturday is a weekend.

  	What is the day today? Friday
  	Friday is a working day.

  	What is the day today? FrIDAy
  	Friday is a working day. */

let day = "";
const formattedString =
  day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();

if (
  formattedString === "Monday" ||
  formattedString === "Tuesday" ||
  formattedString === "Wednesday" ||
  formattedString === "Thursday" ||
  formattedString === "Friday"
) {
  console.log(formattedString + " is a working day");
} else if (formattedString === "Saturday" || formattedString === "Sunday") {
  console.log(formattedString + " is a weekend.");
} else {
  console.log(false);
}

/* 4 - Write a program which tells the number of days in a month.

  	Enter a month: January
  	January has 31 days.

  	Enter a month: JANUARY
  	January has 31 day

  	Enter a month: February
  	February has 28 days.

  	Enter a month: FEbruary
  	February has 28 days. */

let month = "";
const formattedMonth =
  month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

if (formattedMonth === "January") {
  console.log("January has 31 days.");
} else if (formattedMonth === "February") {
  console.log("February has 28 days.");
} else {
  console.log(false);
}
