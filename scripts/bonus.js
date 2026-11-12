document.getElementById("bonus-btn").addEventListener("click", function () {
  const bonusCoupon = getValueFromInput("coupon");
  if (bonusCoupon === "NH629") {
    const balance = getCurrentBalance();
    const newBalance = balance + Number(500);
    setBalance(newBalance);
    alert("You get 500৳ Bonus");

    // add transactions
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
              <h3 class="text-neutral/70 font-bold">Bonus</h3>
              <p class="text-[12px] text-neutral/60 font-semibold">${new Date().toString().split(" GMT")[0]}</p>
            </div>
          </div>
          <div class="flex-1">
            <p class="text-neutral/70 font-semibold text-sm"> Congratulation, you get 500৳ Bonus from Naim Hoshen. </p>
          </div>
        </div>
    `;
    history.appendChild(newHistory);
  } else {
    alert("Please enter a valid Coupon code");
    return;
  }
});
