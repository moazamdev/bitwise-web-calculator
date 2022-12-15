// accessing DOM elements
// dropdown selectors
let fromDropdown = document.querySelector("#fromInputField");
let toDropdown = document.querySelector("#toInputField");
let dropdownSelects = document.querySelectorAll(".dropdownSelect");
// label selectors
let fromConversionType = document.querySelectorAll(".from-conversion-type");
let toConversionType = document.querySelectorAll(".to-conversion-type");
// button selectors
let convertButton = document.querySelector("#convertButton");
let resetButton = document.querySelector("#resetButton");
let swapButton = document.querySelector("#swapButton");
// input field selectors
let inputField = document.querySelector("#inputField");
let outputField = document.querySelector("#outputField");
// error msg selector
let errorMsg = document.querySelector(".error-msg");
// footer year selector
let footerYear = document.querySelector(".year");
// list selectors
let list = document.querySelector(".prdefine-items");
let listItems = document.querySelectorAll("li");

footerYear.textContent = new Date().getFullYear();

// Functions

let isDecimal = (decValueInString) => {

    let decNumber = decNumber % 10
    if (decNumber >= 'A' || decNumber >= 'a')
        return;
    decNumber /= 10;
};

let isHexa = (hexValueInString) => {
    let hexNumber = hexNumber % 16
    if (hexNumber >= 'G' || hexNumber <= 'Z')
        return;
    hexNumber /= 16;
};


// =====================================
// Conversion Functions


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
    let hex = "";
    while (decValue > 0) {
        let rem = decValue % 16;
        hex += arr[rem];
        decValue = Math.floor(decValue / 16);
    }
    hex = hex.split("").reverse().join("");
    return hex;
};

// Decimal to Octal
const decToOct = (decValueInString) => {
    let decValue = parseInt(decValueInString);

    if (decValue == 0) {
        return "0000";
    }

    let oct = "";
    while (decValue > 0) {
        let rem = decValue % 8;
        oct += rem.toString();
        decValue = Math.floor(decValue / 8);
    }
    oct = oct.split("").reverse().join("");
    return oct;
};

// Octal to Decimal
const octToDec = (octValueInString) => {
    let octValue = parseInt(octValueInString);

    let dec = 0,
        rem = 0;
    let base = 1;

    while (octValue > 0) {
        rem = octValue % 10;
        dec = dec + rem * base;
        octValue = Math.floor(octValue / 10);
        base = base * 8;
    }
    dec = dec.toString();
    return dec;
};

// Binary To Decimal
const binToDec = (binValueInString) => {
    let pow = 1,
        dec = 0;
    for (let i = binValueInString.length - 1; i >= 0; i--) {
        dec += binValueInString[i] * pow;
        pow *= 2;
    }
    dec = dec.toString();
    return dec;
};

// Decimal To Binary
const decToBin = (decimalValueInString) => {
    let decValue = parseInt(decimalValueInString);

    let bin = "";
    while (decValue > 0) {
        let rem = decValue % 2;
        bin += rem;
        decValue = Math.floor(decValue / 2);
    }
    bin = bin.split("").reverse().join("");
    return bin;
};

// Hexadecimal To Binary
const hexToBin = (hexValueInString) => {
    let dec = hexToDec(hexValueInString);
    let hexLength = hexValueInString.length * 4;
    let bin = decToBin(dec);
    let outputLength = bin.length;
    let noOfZeros = hexLength - outputLength;
    let result = bin.padStart(outputLength + noOfZeros, "0");
    return result;
};

// =====================================
// Other Functions

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
    fromConversionType.forEach((element) => {
        element.innerHTML = fromDropdown.value;
    });
    toConversionType.forEach((element) => {
        element.innerHTML = toDropdown.value;
    });
    inputField.placeholder = fromDropdown.value;
    outputField.placeholder = toDropdown.value;
};

// update dropdown values function
let updateDropdown = (event) => {
    console.log(event.target.dataset.from);
    fromDropdown.value = event.target.dataset.from;
    toDropdown.value = event.target.dataset.to;
    updateContents();
};

let swapDropdowns = () => {
    let temp = fromDropdown.value;
    fromDropdown.value = toDropdown.value;
    toDropdown.value = temp;
    updateContents();
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
            let hex = decToHex(dec);
            outputField.value = hex;
        }
        // binary to binary
        else {

            // hexadecimal to binary
            if (toDropdown.value.toLowerCase() == "binary") {
                // let dec = hexToDec(inputField.value);
                let bin = hexToBin(inputField.value);
                outputField.value = bin;
            }
            // hexadecimal to decimal
            else if (toDropdown.value.toLowerCase() == "decimal") {
                let dec = hexToDec(inputField.value);
                outputField.value = dec;
                // outputField.value = oct;
            }
            // hexadecimal to octal
            else if (toDropdown.value.toLowerCase() == "octal") {
                let dec = hexToDec(inputField.value);
                let oct = decToOct(dec);
                outputField.value = oct;
            }
            // hexadecimal to hexadecimal
            else {
                outputField.value = inputField.value;
            }

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
            let hex = decToHex(dec);
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
            let bin = hexToBin(inputField.value);
            outputField.value = bin;
        }
        // hexadecimal to decimal
        else if (toDropdown.value.toLowerCase() == "decimal") {
            let dec = hexToDec(inputField.value);
            outputField.value = dec;
            // outputField.value = oct;
        }
        // hexadecimal to octal
        else if (toDropdown.value.toLowerCase() == "octal") {
            let dec = hexToDec(inputField.value);
            let oct = decToOct(dec);
            outputField.value = oct;
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
// window load event listener
window.addEventListener("load", updateContents);
// button event listeners
convertButton.addEventListener("click", isFieldEmpty);
resetButton.addEventListener("click", resetFields);
swapButton.addEventListener("click", swapDropdowns);
// dropdown event listeners
dropdownSelects.forEach((dropdown) => {
    dropdown.addEventListener("change", combineFunctions);
});
// listItem event listeners
listItems.forEach((item) => {
    item.addEventListener("click", updateDropdown);
});