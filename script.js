// definisikan 3 variable untuk menyimpan 2 angka dan 1 operator
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

// membuat agar layar dapat menampilkan angka menggunakan method querySelector
const calculatorScreen = document.querySelector(".calculator-screen");
function updateScreen(number) {
  calculatorScreen.value = number;
}

// mengambil element menggunakan querySelectorAll
const numbers = document.querySelectorAll(".number");
numbers.forEach(function (number) {
  number.addEventListener("click", function (event) {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

// definisikan function “inputNumber”
function inputNumber(number) {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
}

const operators = document.querySelectorAll(".operator");
operators.forEach(function (operator) {
  operator.addEventListener("click", function (event) {
    inputOperator(event.target.value);
  });
});

// definisikan function “inputOperator”
function inputOperator(operator) {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
}

// mengambil element menggunakan querySelector
const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", function () {
  calculate(); // Jalankan Function calculate saat = diclick
  updateScreen(currentNumber);
});

// definisikan function “calculate”
function calculate() {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(prevNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(prevNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(prevNumber) / parseFloat(currentNumber);
      break;
    default:
      break;
  }
  currentNumber = result;
  calculationOperator = "";
}

// Definisikan function “clearAll”
function clearAll() {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
}

// mengambil element menggunakan querySelector
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", function () {
  clearAll(); // Jalankan Function clearAll saat tombol AC diclick
  updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", function (event) {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inputDecimal = function (dot) {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", function (event) {
  inputPercentage(event.target.value);
  updateScreen(currentNumber);
});

inputPercentage = function (percentage) {
  if (currentNumber.includes("%")) {
    return;
  }
  currentNumber = currentNumber / 100;
};
