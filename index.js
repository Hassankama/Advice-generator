const advice = document.getElementById("advice");
const adviceTitle = document.getElementById("advice-title");
const button = document.querySelector(".but");
getAdvice()
async function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
        advice.innerHTML = `Advice #${data.slip.id} ` ;
        adviceTitle.innerHTML = `"${data.slip.advice}"`;
    })
}

button.addEventListener("click", getAdvice);