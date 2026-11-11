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
    alert(
      `Add ${amount}৳ successful from ${bank} at ${new Date().toString().split(" GMT")[0]}`,
    );
    setBalance(newBalance);

    // add to transactions
    const history = document.getElementById("transactions-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
    <div
          class="rounded-2xl w-full bg-white shadow-sm border-none py-4 px-5 flex justify-around items-center gap-x-5"
        >
          <div class="flex justify-around items-center gap-4">
            <div
              class="h-10 w-10 rounded-full bg-base-200 flex justify-center items-center"
            >
              <img src="assets/opt-6.png" alt="" />
            </div>
            <div class="space-y-1.5">
              <h3 class="text-neutral/70 font-bold">Add Money</h3>
              <p class="text-[12px] text-neutral/60 font-semibold">${new Date().toString().split(" GMT")[0]}</p>
            </div>
          </div>
          <div class="flex-1">
            <p class="text-neutral/70 font-semibold text-sm"> ${amount}৳ From  account number - 
            ${bankAccNumber}  on ${bank} Bank </p>
          </div>
        </div>
    `;
    history.appendChild(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
