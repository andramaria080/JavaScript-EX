// Ex-1:

const findSquer1 = [];
const mapSquer1 = findSquer.map((num) => num * num);
const num = findSquer1;
console.log(num[-12]);
console.log(mapSquer);

/////Altceva
const findSquer = [1, 2, 3, 4, 9, -12];
const mapSquer = findSquer.map((n) => n * n);
console.log(mapSquer);

//Ex-2:

function randomNumber(start, end) {
  start = Math.ceil(start);
  return Math.floor(Math.random() * (start - end) + end);
}
console.log(randomNumber(3, 5));

//Ex-3:

let str = "My mother came from home";
low = str.toLowerCase();
let letter = "m";
const count = [...low].filter((x) => x === letter).length;
console.log(count);

//Ex-4:

function sumOfArray(array) {
  const sum = array.reduce((total, num) => total + num);
  console.log(sum);
  return sum;
}

sumOfArray([2, -4, 1, 5, -4]);

/////////Altceva
let array = [1, 2, 3, 4];
let sum = array.reduce(function (a, b) {
  return a + b;
}, 0);

console.log(sum);
////
let array2 = [5, 4, 3, 2, 1];
let sum2 = 0;
array2.forEach((x) => {
  sum2 += x;
});
console.log(sum2);
////
