const adviceBtn = document.querySelector("#dice-btn");
const adviceRun = document.querySelector("#advices");
const adviceNum = document.querySelector("#numAdv");

window.onload = () => {
  getAdvice();
};

function getAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((run) => {
      return run.json();
    })
    .then((advData) => {
      const tips = advData.slip;
      adviceRun.innerHTML = `<p>"${tips.advice}"</p>`;
      adviceNum.innerHTML = `<span>#${tips.id}</span>`;
    })

    .catch((error) => {
      console.log(error);
    });
}

adviceBtn.addEventListener("click", () => {
  getAdvice();
});
