const inputNameEl = document.getElementById("input-name-surname");
const inputKmEl = document.getElementById("input-km");
const inputAgeEl = document.getElementById("input-eta");
const buttonConfirmEl = document.getElementById("button-confirm");
const formEl = document.getElementById("ticket-form");
const cardEl = document.querySelector(".card");
const nameCardEl = document.getElementById("name-card");
const ageCardEl = document.getElementById("age-card");
const KmCardEl = document.getElementById("km-card");
const finalPriceCardEl = document.getElementById("final-price-card");
const buttonResetEl = document.getElementById("button-reset");

const inputSelect = document.getElementById("input-select");

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = inputNameEl.value;
  const ageStatus = inputSelect.value;
  const numKm = parseInt(inputKmEl.value);

  console.log(numKm);

  if (!name || numKm < 0 || isNaN(numKm)) return;

  const ticketPrice = numKm * 0.21;

  const discount20 = ticketPrice * 0.2;
  console.log(discount20);
  const discount40 = ticketPrice * 0.4;

  let finalPrice = ticketPrice;

  if (ageStatus < 18) {
    finalPrice = ticketPrice - discount20;
  } else if (ageStatus > 65) {
    finalPrice = ticketPrice - discount40;
  }

  nameCardEl.innerHTML = `${name}`;

  KmCardEl.innerHTML = `I km che hai scelto di percorrere ${numKm}Km`;
  finalPriceCardEl.innerHTML = `Prezzo biglietto ${finalPrice.toFixed(2)}€`;

  cardEl.classList.remove("d-none");
});

buttonResetEl.addEventListener("click", function (e) {
  e.preventDefault();
  formEl.reset();
  cardEl.classList.add("d-none");
});
