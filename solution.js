document
  .getElementById("generate-button")
  .addEventListener("click", function () {
    const digit = fourDigit();
    const digitContainer = document.getElementById("digit-container");
    digitContainer.value = digit;
  });
document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const calcButton = event.target.innerText;
    const displayField = document.getElementById("display-field");
    const displayFieldValue = displayField.value;
    if (isNaN(calcButton)) {
      if (calcButton == "<") {
        const lastNumber = displayFieldValue.split("");
        lastNumber.pop();
        const remainingDigits = lastNumber.join("");
        displayField.value = remainingDigits;
      } else if (calcButton == "C") {
        displayField.value = "";
      }
    } else {
      displayField.value = displayFieldValue + calcButton;
    }
  });
document.getElementById("submit-button").addEventListener("click", function () {
  const digitContainer = document.getElementById("digit-container");
  const result = digitContainer.value;
  const displayField = document.getElementById("display-field");
  const result1 = displayField.value;
  const matchedButton = document.getElementById("matched");
  const didntMatchedButton = document.getElementById("didntMatched");
  if (result === result1) {
    matchedButton.style.display = "block";
    didntMatchedButton.style.display = "none";
  } else {
    didntMatchedButton.style.display = "block";
    matchedButton.style.display = "none";
  }
});

//some common utility
function round() {
  const number = Math.round(Math.random() * 10000);
  return number;
}
function fourDigit() {
  const number2 = round();
  const numberStrng = number2 + "";
  if (numberStrng.length === 4) {
    return number2;
  } else {
    return round();
  }
}
