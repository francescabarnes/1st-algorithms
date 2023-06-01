const prompt = require("prompt-sync")({ sigint: true });

// Sum of 2 chosen numbers and division and modulo

const num1 = parseInt(prompt("Enter the first number "));
const num2 = parseInt(prompt("Enter the second number "));
const sum = num1 + num2;
const division = num1 / num2;
const modulo = num1 % num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
console.log(`${num1} divided by ${num2} is ${division}`);
console.log(`The modulo of ${num1} and ${num2} is ${modulo}`);

// Concatenate 2 phrases together

var name = prompt("What is your name? ");
var day = prompt("What is the day? ");

console.log("Hi there " + name + " have an amazing " + day);

//Price with and without VAT

const num3 = parseInt(
  prompt("Without VAT: how much does a cup of coffee cost? ")
);
const num4 = num3 * 1.21;
console.log("With VAT: The final price is €" + num4);

// Surface area of a circle

const rad = parseInt(prompt("What is the radius of your circle? "));
const pi = Math.PI;
const sa = rad * rad * pi;
console.log("The surface area of your circle is " + sa);

// Seconds since midnight

const now = new Date();
const midnight = new Date(now).setHours(0, 0, 0, 0);
const elapsed = now - midnight;
console.log("The time in seconds since midnight is " + elapsed / 1000);
