document.getElementById("cashout-btn").addEventListener("click", function () {
  // 1. get the agent number and validate
  const agentNumber = getValueFromInput("agent-number");
  if (agentNumber.length != 11) {
    alert("Invalid Agent Number");
    return;
  }
  // 2. get the amount and validate

  const amount = getValueFromInput("amount");
  // 3. get the current balance and calculate new balance
  const Balance = getCurrentBalance();
  const newBalance = Balance - Number(amount);
  if (newBalance < 0) {
    alert("Insufficient balance");
    return;
  }
  // 4. get pin number and verify
  const pin = getValueFromInput("cashout-pin");
  if (pin == "1234") {
    // 4.1. true-> alert > set the new balance
    alert("Cashout successful");
    setBalance(newBalance);
  } else {
    // 4.2. false > alert > return
    alert("Invalid Pin");
    return;
  }
});
