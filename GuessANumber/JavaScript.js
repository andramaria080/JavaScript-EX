let secretNum = 5;
let message;
output(guesser("Guess a Number:"));

function guesser(p) {
  let guess = prompt(p);
  guess = Number(guess);
  if (guess === secretNum) {
    message = `You got the ${secretNum}!!!`;
    return message;
  } else {
    message =
      guess < secretNum
        ? `Was higher, guess again?`
        : `Was lower, guess again?`;
    return guesser(`[${guess}]${message}`);
  }
}

function output(mes) {
  document.getElementById("message").innerHTML = message;
}
