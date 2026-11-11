document.getElementById("add-money-btn").addEventListener("click", function () {
  // get the bank and validate
  const bank = getValueFromInput("add-money-bank");
  if (bank === "Select Bank") {
    alert("Please Select a Bank");
    return;
  }
  // get the bank account number and validate
  const bankAccNumber = getValueFromInput("bank-account-number");
  if (bankAccNumber.length != 11) {
    alert("Invalid Bank Account Number");
    return;
  }

  // get the amount and calculate new balance

  const amount = getValueFromInput("add-money-amount");
  if (amount <= 0) {
    alert("Please increase your Amount");
    return;
  }
  const newBalance = getCurrentBalance() + Number(amount);

  // get the pin and verify and set the balance

  const pin = getValueFromInput("add-money-pin");
  if (pin === "1234") {
    alert(`Add ${amount}৳ successful from ${bank} at ${new Date()}`);
    setBalance(newBalance);
  } else {
    alert("Invalid Pin");
    return;
  }
});
