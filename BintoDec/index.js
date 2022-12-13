// Binary to Decimal

let binToDecButton = document.querySelector("#binaryButton");

const binToDec = () => {
  let binaryValue = document.querySelector("#binaryInput").value;
  let result = document.querySelector(".decimalResult");
  if (binaryValue.length == 0) {
    alert("Field is empty!");
    result.innerHTML = null;
    return;
  }
  let pow = 1,
    dec = 0;
  for (let i = binaryValue.length - 1; i >= 0; i--) {
    dec += binaryValue[i] * pow;
    pow *= 2;
  }
  result.innerHTML = dec;
};

binToDecButton.addEventListener("click", binToDec);

// Decimal To Hexadecimal

let decToHexaButton = document.querySelector("#decimalButton");

const dectoHex = () => {
  let decValueInString = document.querySelector("#decimalInput").value;
  let decValue = parseInt(decValueInString);
  let result = document.querySelector(".hexaResult");
  if (decValueInString.length == 0) {
    alert("Field is empty!");
    result.innerHTML = null;
    return;
  }
  const arr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let hex = '';
  while (decValue > 0) {
    let rem = decValue % 16;
    hex += arr[rem];
    decValue = Math.floor(decValue / 16);
  }
  hex = hex.split("").reverse().join("");
  result.innerHTML = hex;

  console.log(typeof hex);
  console.log(hex);
};
decToHexaButton.addEventListener("click", dectoHex);
