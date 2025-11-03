// (bill / number of people) * tipPercent = tipAmount
//  (bill / number of people) + tipAmount = total

let billAmount = 0;
let noOfPeople = 0;
let tipAmount = 0;
let totalAmount = 0;

const billInput = document.querySelector("#bill");
const noOfPeopleInput = document.querySelector("#people");
let selectedBtn = null;
let tipPercent = 0;

const tipBtns = document.querySelectorAll(".btn--tip");
const tipInput = document.querySelector(".button-group__input");

const tipDisplay = document.querySelector("#tip");
const totalDisplay = document.querySelector("#total");
const resetBtn = document.querySelector(".reset");

function activateReset() {
  resetBtn.disabled = false;
  resetBtn.classList.remove("btn--disabled");
}

function deActivateReset() {
  resetBtn.disabled = true;
  resetBtn.classList.add("btn--disabled");
}

function formatNumber(num) {
  return (Math.round(num * 100) / 100).toFixed(2);
}

function recalculateAmounts() {
  //   console.log(
  //     "billAmount=",
  //     billAmount,
  //     "noOfPeople=",
  //     noOfPeople,
  //     "tipPercent=",
  //     tipPercent
  //   );
  if (noOfPeople) {
    const perPerson = billAmount / noOfPeople;
    tipAmount = perPerson * tipPercent;
    totalAmount = perPerson + tipAmount;
  }
}

function updateResults() {
  //   console.log("tipAmount=", tipAmount);
  //   console.log("totalAmount=", totalAmount);

  tipDisplay.textContent = "$" + formatNumber(tipAmount);
  totalDisplay.textContent = "$" + formatNumber(totalAmount);

  if (noOfPeople) {
    activateReset();
  }
}

function updateBill() {
  if (billInput.value) billAmount = billInput.value;
  else billAmount = 0;
  recalculateAmounts();
  updateResults();
}

function updateNoOfPeople() {
  if (noOfPeopleInput.value) noOfPeople = noOfPeopleInput.value;
  else noOfPeople = 0;
  recalculateAmounts();
  updateResults();
}

function updateTip(value) {
  if (value) tipPercent = value / 100;
  else tipPercent = 0;

  recalculateAmounts();
  updateResults();
}

function resetFields() {
  billInput.value = "";
  billAmount = 0;

  noOfPeopleInput.value = "";
  noOfPeople = 0;

  if (selectedBtn) selectedBtn.classList.remove("btn--light");
  selectedBtn = null;

  tipInput.classList.remove("custom--light");
  tipInput.value = "";

  tipDisplay.textContent = "$0.00";
  totalDisplay.textContent = "$0.00";

  deActivateReset();
}

function clickTipBtn() {
  if (selectedBtn) selectedBtn.classList.remove("btn--light");
  tipInput.classList.remove("custom--light");

  selectedBtn = this;
  selectedBtn.classList.add("btn--light");

  updateTip(this.dataset.percent);
}

function manageTipInput() {
  if (selectedBtn) selectedBtn.classList.remove("btn--light");
  selectedBtn = null;

  this.classList.add("custom--light");

  updateTip(this.value);
}

billInput.addEventListener("focusout", updateBill);
noOfPeopleInput.addEventListener("focusout", updateNoOfPeople);
resetBtn.disabled = true;
resetBtn.addEventListener("click", resetFields);

tipBtns.forEach((btn) => {
  btn.addEventListener("click", clickTipBtn);
});

tipInput.addEventListener("focusout", manageTipInput);
