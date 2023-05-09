function numbersEven(num) {
  let numbersEven = [];

  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      numbersEven.push(i);
    }
  }

  return numbersEven.length > 1 ? numbersEven : `${num} is not a even number`;
}

let result = numbersEven(prompt(`Add a number:`));
console.log(result);

//Sum of the Arr

let sum = 0;
let i = -1;
while (++i < result.length) {
  sum += result[i];
}
console.log(sum);

//Arr method=SORT
result.sort(function (a, b) {
  return b - a;
});
console.log(result);
