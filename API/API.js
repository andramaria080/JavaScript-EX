const adviceBtn = document.querySelector("#dice-btn");
const adviceRun = document.querySelector("#advices");
const adviceNum = document.querySelector("#numAdv");

window.onload = () => {
  getAdvice();
};

function randomAdvice(advice) {
  adviceRun.textContent = advice;
}
function randomNumber(number) {
  adviceNum.textContent = "#" + number;
}

async function getAdvice() {
  const url = "https://api.adviceslip.com/advice";

  try {
    const response = await fetch(url);
    const data = await response.json();

    let advice = data.slip.advice;
    let number = data.slip.id;
    randomAdvice(advice);
    randomNumber(number);
  } catch (error) {
    console.log(error);
  }
}
adviceBtn.addEventListener("click", getAdvice);
