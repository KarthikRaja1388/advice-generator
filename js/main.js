const advise = document.querySelector(".advise");
const adviseTitle = document.querySelector(".advise-title");
const dice = document.querySelector(".dice");

function loadAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      adviseTitle.innerHTML = "Advice #" + data.slip.id;
      advise.innerHTML = '"' + data.slip.advice + '"';
    });
}

loadAdvice();
dice.addEventListener("click", () => {
  loadAdvice();
});
