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
// console.log(document.write(result));
