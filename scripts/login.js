console.log("Login connected");

document.getElementById("login-btn").addEventListener("click", function () {
  // 1. get the mobile number
  const inputNumber = document.getElementById("number-input");
  const mobileNumber = inputNumber.value;
  console.log(mobileNumber);
  // 2. get the pin number
  const inputPin = document.getElementById("input-pin");
  const pin = inputPin.value;
  console.log(pin);
  // 3. match the number & pin
  if (mobileNumber === "01234567899" && pin === "1234") {
    // 3.1 true -> alert -> home page
    alert("Login Successful");
    // window.location.replace("/home.html");
    window.location.assign("/home.html");
  } else {
    // 3.2 false -> alert -> return.
    alert("Incorrect Pin");
    return;
  }
});
