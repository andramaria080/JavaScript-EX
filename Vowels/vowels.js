let str = "Here is a string!";

let rest = str.match(/[aeiou]/gi).join(Array[str]);
console.log(rest);

function getVowels(str) {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  for (let char of str) {
    if (vowels.includes(char)) {
      vowelsCount++;
    }
  }
  return vowelsCount;
}
console.log(getVowels("Here is a string!"));
