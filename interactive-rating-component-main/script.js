let selected = null;
const buttons = document.querySelectorAll(".rating__btn");
const submitButton = document.querySelector(".submit");
const ratingCard = document.querySelector(".card");
const thankYouCard = document.querySelector(".card--thank");
const thankYouSpan = document.querySelector(".selected-rating");

submitButton.disabled = true;

function selectButton() {
  if (selected) {
    selected.classList.remove("selected");
  }
  selected = this;
  selected.classList.add("selected");
  submitButton.disabled = false;
}

function submit() {
  if (!selected) {
    alert("Select a rating");
    return;
  }

  //change display
  ratingCard.classList.add("hidden");
  thankYouCard.classList.remove("hidden");
  thankYouSpan.textContent = selected.textContent;
}

buttons.forEach((button) => {
  button.addEventListener("click", selectButton);
});

submitButton.addEventListener("click", submit);
