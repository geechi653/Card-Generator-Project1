// Add your code here

const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "K", "Q", "A"];
const suits = ["♥", "♦", "♠", "♣"];

function randomGenerate(array) {
  return Math.floor(Math.random() * array.length);
}

const topLeftNumbers = document.querySelector(".number-topleft");
const cardSuits = document.querySelector(".shape");
const bottomRightNumbers = document.querySelector(".number-bottomright");

function generateCard() {
  const randomNumber = values[randomGenerate(values)];
  const randomSuits = suits[randomGenerate(suits)];

  topLeftNumbers.textContent = randomNumber;
  cardSuits.textContent = randomSuits;
  bottomRightNumbers.textContent = randomNumber;
  cardColor(randomSuits);
}
// function to change the coloring
function cardColor(suits) {
  if (suits === "♥" || suits === "♦") {
    topLeftNumbers.style.color = "red";
    cardSuits.style.color = "red";
    bottomRightNumbers.style.color = "red";
  } else {
    topLeftNumbers.style.color = "black";
    cardSuits.style.color = "black";
    bottomRightNumbers.style.color = "black";
  }
}
// instead of generateCard(); added an interactive button
document
  .querySelector(".generate-button")
  .addEventListener("click", generateCard);
