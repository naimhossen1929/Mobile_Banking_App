document.getElementById("pay-btn").addEventListener("click", function () {
  // get the type and validate
  const payType = getValueFromInput("pay-bill-type");
  if (payType === "Select") {
    alert("Please Select Which Bill you Pay now.");
    return;
  }
  // get the biller account number and validate
  const billerNumber = getValueFromInput("biller-number");
  if (billerNumber.length != 11) {
    alert("Invalid Biller Account Number");
    return;
  }

  // get the amount and calculate new balance

  const payAmount = getValueFromInput("pay-amount");
  if (payAmount <= 0) {
    alert("Please add Amount");
    return;
  }
  const newBalance = getCurrentBalance() - Number(payAmount);

  // get the pin and verify and set the balance

  const pin = getValueFromInput("pay-bill-pin");
  if (pin === "1234") {
    alert(
      `Pay ${payAmount}৳ successful from on ${new Date().toString().split(" GMT")[0]}`,
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
              <h3 class="text-neutral/70 font-bold">${payType}</h3>
              <p class="text-[12px] text-neutral/60 font-semibold">${new Date().toString().split(" GMT")[0]}</p>
            </div>
          </div>
          <div class="flex-1">
            <p class="text-neutral/70 font-semibold text-sm"> Pay ${payAmount}৳ ${payType} From  your Account </p>
          </div>
        </div>
    `;
    history.appendChild(newHistory);
  } else {
    alert("Invalid Pin");
    return;
  }
});
