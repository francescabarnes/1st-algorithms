// Write an algorithms which receives an integers n and prints

//the numbers from 1 to n

const prompt = require("prompt-sync")({ sigint: true });

let n = prompt("Choose a number: ");
let counter = 1;
while (counter <= n) {
  console.log(counter);
  counter++;
}

// the numbers from n to 1 in descending order

const num = parseInt(prompt("Choose another number: "));
for (var i = num; i >= 1; i--) {
  console.log(i);
}

//the numbers from -n to n

const num2 = parseInt(prompt("Choose one more number: "));
for (var o = -num2; o <= num2; o++) {
  console.log(o);
}

//the odd numbers from 1 to n

const num3 = parseInt(prompt("And another number "));
for (var p = 1; p <= num3; p += 2) {
  console.log(p);
}

//Write an algorithm which receives an random integer and prints from 0 to it.

const num4 = parseInt(prompt("And another: "));
for (var o = 0; o <= num4; o++) {
  console.log(o);
}

//Write an algorithm which throws a dice a given number of times and count the number of time a certain number is received.

//Write an algorithm which prints all the even numbers from 0 to a given number.

const num5 = parseInt(prompt("Last number again, promise: "));
for (var a = 0; a <= num5; a += 2) {
  console.log(a);
}

//Write an algorithm which verify if a given positive integer is a perfect number, meaning equal to the sum of his divisors (except himself).
var input = prompt("Very very last number please:");
var v = input;
var count = 0;
for (var s = 1; s < input; s++) {
  if (input % i == 0) {
    count = count + s;
  }
}
if (count == v) {
  console.log(s + " is perfect number");
} else {
  console.log(s + " is not a perfect number");
}
