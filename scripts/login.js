console.log("Login connected");

document.getElementById("login-btn").addEventListener("click", function () {
  // 1. get the mobile number
  const inputNumber = document.getElementById("number-input");
  const mobileNumber = inputNumber.value;
  console.log(mobileNumber);
  // 2. get the pin number
  // 3. match the number & pin
  // 3.1 true -> alert -> home page
  // 3.2 false -> alert -> return.
});
