// Ex-1:
const findSquare = (a) => {
  return (a*a)
}
const square = findSquare;
console.log(square(4));

/////Altceva
const findSquare = [1, 2, 3, 4, 9, -12];
const mapSquare = findSquare.map((n) => n * n);
console.log(mapSquare);

//Ex-2: Function

function randomNumber(start, end) {
  return Math.floor(Math.random() * (start - end) + end);
}
console.log(randomNumber(1, 7));

//Ex-3:

let str = "My mother came from home";
low = str.toLowerCase();
let letter = "m";
const count = [...low].filter((x) => x === letter).length;
console.log(count);

//Ex-4: Function

function sumOfArray(...array) {
  const sum = array.reduce((total, num) => total + num);
  console.log(sum);
  return sum;
}

sumOfArray(2, -4, 1, 5, -4);

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

