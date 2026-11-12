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
  const sendMoney = document.getElementById("send-money");
  const bonus = document.getElementById("get-bonus");
  const payBill = document.getElementById("pay-bill");
  const transactions = document.getElementById("transactions");

  addMoney.classList.add("hidden");
  cashOut.classList.add("hidden");
  sendMoney.classList.add("hidden");
  bonus.classList.add("hidden");
  payBill.classList.add("hidden");
  transactions.classList.add("hidden");

  const show = document.getElementById(id);
  show.classList.remove("hidden");
}

// transactions
