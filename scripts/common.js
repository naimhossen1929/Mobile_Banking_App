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
