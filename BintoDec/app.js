// accessing DOM elements
let fromDropdown = document.querySelector("#fromInputField");
let toDropdown = document.querySelector("#toInputField");
let dropdownSelects = document.querySelectorAll(".dropdownSelect");
let fromConversionType = document.querySelectorAll(".from-conversion-type");
let toConversionType = document.querySelectorAll(".to-conversion-type");
let convertButton = document.querySelector("#convertButton");
let resetButton = document.querySelector("#resetButton");
let inputField = document.querySelector("#inputField");
let outputField = document.querySelector("#outputField");
// let inputField.value = document.querySelector("#inputField").value;
// let outputField.value = document.querySelector("#outputField").value;
let errorMsg = document.querySelector(".error-msg");

// Functions

// function for checking if field is empty
let isFieldEmpty = () => {
  if (inputField.value.length == 0) {
    errorMsg.innerHTML = "Error: Input field is required!";
    setTimeout(() => {
      errorMsg.innerHTML = "";
    }, 2000);
    return;
  }
  numConversions();
};

// reset function
let resetFields = () => {
  inputField.value = "";
  outputField.value = "";
};

// update content function
let updateContents = () => {
  //   fromConversionType.innerHTML = fromDropdown.value;
  //   toConversionType.innerHTML = toDropdown.value;
  fromConversionType.forEach((element) => {
    element.innerHTML = fromDropdown.value;
  });
  toConversionType.forEach((element) => {
    element.innerHTML = toDropdown.value;
  });
  inputField.placeholder = fromDropdown.value;
  outputField.placeholder = toDropdown.value;
};

// number conversion function
let numConversions = () => {
  //~ Binary Conversions
  if (fromDropdown.value.toLowerCase() == "binary") {
    // binary to decimal
    if (toDropdown.value.toLowerCase() == "decimal") {
      let dec = binToDec(inputField.value);
      outputField.value = dec;
    }
    // binary to octal
    else if (toDropdown.value.toLowerCase() == "octal") {
      let dec = binToDec(inputField.value);
      let oct = decToOct(dec);
      outputField.value = oct;
    }
    // binary to hexadecimal
    else if (toDropdown.value.toLowerCase() == "hexadecimal") {
      let dec = binToDec(inputField.value);
      let hex = decTohex(dec);
      outputField.value = hex;
    }
    // binary to binary
    else {
      outputField.value = inputField.value;
    }
  }
  //~ Decimal Conversions
  else if (fromDropdown.value.toLowerCase() == "decimal") {
    // decimal to binary
    if (toDropdown.value.toLowerCase() == "binary") {
      let bin = decToBin(inputField.value);
      outputField.value = bin;
    }
    // decimal to octal
    else if (toDropdown.value.toLowerCase() == "octal") {
      let oct = decToOct(inputField.value);
      outputField.value = oct;
    }
    // decimal to hexadecimal
    else if (toDropdown.value.toLowerCase() == "hexadecimal") {
      let hex = decTohex(inputField.value);
      outputField.value = hex;
    }
    // decimal to decimal
    else {
      outputField.value = inputField.value;
    }
  }
  //~ Octal Conversions
  else if (fromDropdown.value.toLowerCase() == "octal") {
    // octal to binary
    if (toDropdown.value.toLowerCase() == "binary") {
      let dec = octToDec(inputField.value);
      let bin = decToBin(dec);
      outputField.value = bin;
    }
    // octal to decimal
    else if (toDropdown.value.toLowerCase() == "decimal") {
      let dec = octToDec(inputField.value);
      outputField.value = dec;
    }
    // octal to hexadecimal
    else if (toDropdown.value.toLowerCase() == "hexadecimal") {
      let dec = octToDec(inputField.value);
      let hex = decTohex(dec);
      outputField.value = hex;
    }
    // octal to octal
    else {
      outputField.value = inputField.value;
    }
  }
  //~ Hexadecimal Conversions
  else {
    // hexadecimal to binary
    if (toDropdown.value.toLowerCase() == "binary") {
      let dec = hexToDec(inputField.value);
      let bin = decToBin(dec);
      outputField.value = bin;
    }
    // hexadecimal to decimal
    else if (toDropdown.value.toLowerCase() == "decimal") {
      let dec = hexToDec(inputField.value);
      let oct = decToOct(dec);
      outputField.value = oct;
    }
    // hexadecimal to octal
    else if (toDropdown.value.toLowerCase() == "octal") {
      let dec = hexToDec(inputField.value);
      outputField.value = dec;
    }
    // hexadecimal to hexadecimal
    else {
      outputField.value = inputField.value;
    }
  }
};

// combine function calling
let combineFunctions = () => {
  updateContents();
  numConversions();
};

// Event Listeners
window.addEventListener("load", updateContents);
convertButton.addEventListener("click", isFieldEmpty);
resetButton.addEventListener("click", resetFields);
// dropdownSelects.addEventListener("change", combineFunctions);
dropdownSelects.forEach((dropdown) => {
  dropdown.addEventListener("change", combineFunctions);
});
