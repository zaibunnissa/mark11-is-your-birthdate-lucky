const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box")
function compareValues(sum, luckyNumber) {
  console.log(sum, luckyNumber)
  if (sum % luckyNumber === 0) {
    outputBox.innerText = "Your birthday is lucky";
  } else
    outputBox.innerText = "your birthday is not lucky";
}

function checkBirthdayIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  if (sum && dob)
    compareValues(sum, luckyNumber.value);
  else
    outputBox.innerText = "Enter both the values";
}

function calculateSum(dob) {

  dob = dob.replaceAll("-", "");
  let sum = 0;
  for (let index = 0; index < dob.length; index++) {
    sum = sum + Number(dob.charAt(index));
  }
  return sum;
}

checkNumber.addEventListener("click", checkBirthdayIsLucky)