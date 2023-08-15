const button = document.querySelector(".greenDice");
const title = document.querySelector(".title");
const body = document.querySelector(".body");

button.addEventListener("click", fetchAdvice);
window.addEventListener("load", fetchAdvice);

async function fetchAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice");
    const advice = await response.json();
    title.innerHTML = `ADVICE #${advice.slip.id}`;
    body.innerHTML = `${advice.slip.advice}`;
  } catch (error) {
    console.error("Error fetching advice:", error);
    title.innerHTML = "Error";
    body.innerHTML = "Oops! An error occurred while fetching advice.";
  }
}
