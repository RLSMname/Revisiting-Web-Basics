function toggleAnswer(event) {
  if (event.type === "click" || event.key === "Enter") {
    const plusIcon = this.querySelector(".plus");
    const minusIcon = this.querySelector(".minus");
    const answer = this.querySelector(".answer");

    plusIcon.classList.toggle("hidden");
    minusIcon.classList.toggle("hidden");
    answer.classList.toggle("hidden");
  }
}

const questionContainers = document.querySelectorAll(".question-container");

questionContainers.forEach((container, index) => {
  container.tabIndex = index + 1;
  container.addEventListener("click", toggleAnswer);
  container.addEventListener("keydown", toggleAnswer);
});
