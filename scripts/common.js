// Get the Input Value
function getValueFromInput(id) {
  const value = document.getElementById(id).value;
  return value;
}

// Get the Current Balance
function getCurrentBalance() {
  const currentBalance = document.getElementById("balance").innerText;
  return Number(currentBalance);
}

// Set Balance
function setBalance(value) {
  document.getElementById("balance").innerText = value;
}

// Hide the all section and show Only one section

function showOnly(id) {
  const addMoney = document.getElementById("add-money");
  const cashOut = document.getElementById("cashout");

  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");

  const show = document.getElementById(id);
  show.classList.remove("hidden");
}

// transactions
