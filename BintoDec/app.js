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
let errorMsg = document.querySelector(".error-msg");

// Functions

// Hexadecimal to Decimal
let hexToDec = (hexValueInString) => {
    let hexValue = hexValueInString.toUpperCase();
    let length = hexValue.length;
    let base = 1;
    let dec = 0;
    for (let i = length - 1; i >= 0; i--) {
        if (hexValue[i] >= "0" && hexValue[i] <= "9") {
            dec += (hexValue[i].charCodeAt(0) - 48) * base;
            base = base * 16;
        } else if (hexValue[i] >= "A" && hexValue[i] <= "F") {
            console.log(hexValue[i]);
            dec += (hexValue[i].charCodeAt(0) - 55) * base;
            base = base * 16;
        }
    }
    dec = dec.toString();
    return dec;
};

// Decimal To Hexadecimal
const decToHex = (decValueInString) => {
    let decValue = parseInt(decValueInString);
    const arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let hex = "";
    while (decValue > 0) {
        let rem = decValue % 16;
        hex += arr[rem];
        decValue = Math.floor(decValue / 16);
    }
    hex = hex.split("").reverse().join("");
    return hex;
};

// Binary To Decimal

const binToDec = (binValueInString) => {
    let binValue = parseInt(binValueInString);
    if (binValue.length == 0) {
        alert("Field is empty!");
        result.innerHTML = null;
        return;
    }
    let pow = 1,
        dec = 0;
    for (let i = binValue.length - 1; i >= 0; i--) {
        dec += binValue[i] * pow;
        pow *= 2;
    }
    return dec;

};

// Decimal To Binary

const DecToBin = (decimalValueInString) => {
    let dtbValue = parseInt(decimalValueInString);
    if (dtbValueInString.length == 0) {
        alert("Field is empty!");
        result.innerHTML = null;
        return;
    }
    if (dtbValue == 0) {
        result.innerHTML = "0000";
        return;
    }

    let bin = "";
    while (dtbValue > 0) {
        let rem = dtbValue % 2;
        bin += rem;
        dtbValue = Math.floor(dtbValue / 2);
    }
    bin = bin.split("").reverse().join("");
    return bin;
};

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
            let hex = decToHex(inputField.value);
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
            console.log(typeof inputField.value);
            console.log(inputField.value);
            let dec = hexToDec(inputField.value);
            outputField.value = dec;
            // outputField.value = oct;
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