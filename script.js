// definisikan 3 variable untuk menyimpan 2 angka dan 1 operator
let prevNumber = "";
let calculationOperator = "";
let currentNumber = "0";

// membuat agar layar dapat menampilkan angka menggunakan method querySelector
const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
  calculatorScreen.value = number;
};

// mengambil element menggunakan querySelectorAll
const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  });
});

// definisikan function “inputNumber”
const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
  });
});

// definisikan function “inputOperator”
const inputOperator = (operator) => {
  if (calculationOperator === "") {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

// mengambil element menggunakan querySelector
const equalSign = document.querySelector(".equal-sign");
equalSign.addEventListener("click", () => {
  calculate(); // Jalankan Function calculate saat = diclick
  updateScreen(currentNumber);
});

// definisikan function “calculate”
const calculate = () => {
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
};

// Definisikan function “clearAll”
const clearAll = () => {
  prevNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

// mengambil element menggunakan querySelector
const clearBtn = document.querySelector(".all-clear");
clearBtn.addEventListener("click", () => {
  clearAll(); // Jalankan Function clearAll saat tombol AC diclick
  updateScreen(currentNumber);
});

const decimal = document.querySelector(".decimal");
decimal.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});

inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

const percentage = document.querySelector(".percentage");
percentage.addEventListener("click", (event) => {
  inputPercentage(event.target.value);
  updateScreen(currentNumber);
});

inputPercentage = (percentage) => {
  if (currentNumber.includes("%")) {
    return;
  }
  currentNumber = currentNumber / 100;
};
