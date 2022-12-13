//~ Binary to ... Conversations
//! Binary to Decimal

let binToDecButton = document.querySelector("#btdButton");

const binToDec = () => {
  let binValue = document.querySelector("#btdInput").value;
  let result = document.querySelector(".btdResult");
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
  result.innerHTML = dec;
};

binToDecButton.addEventListener("click", binToDec);

//! Binary to Octal

let binToOctButton = document.querySelector("#btoButton");

const binToOct = () => {
  let binValue = document.querySelector("#btoInput").value;
  let result = document.querySelector(".btoResult");
  if (binValue.length == 0) {
    alert("Field is empty!");
    result.innerHTML = null;
    return;
  }
  // binary to decimal
  let pow = 1,
    dec = 0;
  for (let i = binValue.length - 1; i >= 0; i--) {
    dec += binValue[i] * pow;
    pow *= 2;
  }
  // decimal to octal
  let oct = "";
  while (dec > 0) {
    let rem = dec % 8;
    oct += rem.toString();
    dec = Math.floor(dec / 8);
  }
  console.log(typeof oct);
  console.log(oct);
  oct = oct.split("").reverse().join("");
  result.innerHTML = oct;
};

binToOctButton.addEventListener("click", binToOct);

//! Binary to Hexadecimal

let binToHexaButton = document.querySelector("#bthButton");

const binToHexa = () => {
  let binValue = document.querySelector("#bthInput").value;
  let result = document.querySelector(".bthResult");
  if (binValue.length == 0) {
    alert("Field is empty!");
    result.innerHTML = null;
    return;
  }
  // binary to decimal
  let pow = 1,
    dec = 0;
  for (let i = binValue.length - 1; i >= 0; i--) {
    dec += binValue[i] * pow;
    pow *= 2;
  }
  // decimal to hexadecimal
  const arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  let hex = "";
  while (dec > 0) {
    let rem = dec % 16;
    hex += arr[rem];
    dec = Math.floor(dec / 16);
  }
  hex = hex.split("").reverse().join("");
  result.innerHTML = hex;
};

binToHexaButton.addEventListener("click", binToHexa);


//~ Decimal to ... Conversations

//! Decimal to Binary

let decToBinButton = document.querySelector("#dtbButton");

const DecToBin = () => {
  let dtbValueInString = document.querySelector("#dtbInput").value;
  let dtbValue = parseInt(dtbValueInString);
  let result = document.querySelector(".dtbResult");

  if (dtbValueInString.length == 0) {
    alert("Field is empty!");
    result.innerHTML = null;
    return;
  }
  if (dtbValue == 0) 
  {
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
  result.innerHTML = bin;
};

decToBinButton.addEventListener("click", DecToBin);


//! Decimal To Hexadecimal

let decToHexaButton = document.querySelector("#dthButton");

const dectoHex = () => {
  let dthInString = document.querySelector("#dthInput").value;
  let decValue = parseInt(dthInString);
  let result = document.querySelector(".dthResult");
  if (dthInString.length == 0) {
    alert("Field is empty!");
    result.innerHTML = null;
    return;
  }
  const arr = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
  let hex = "";
  while (decValue > 0) {
    let rem = decValue % 16;
    hex += arr[rem];
    decValue = Math.floor(decValue / 16);
  }
  hex = hex.split("").reverse().join("");
  result.innerHTML = hex;
};
decToHexaButton.addEventListener("click", dectoHex);

//! Decimal to Octal

let decToOctButton = document.querySelector("#dtoButton");

const DecToOct = () => {
  let dtoValueInString = document.querySelector("#dtoInput").value;
  let dtoValue = parseInt(dtoValueInString);
  let result = document.querySelector(".dtoResult");

  if (dtoValueInString.length == 0) {
    alert("Field is empty!");
    result.innerHTML = null;
    return;
  }
  if (dtoValue == 0) 
  {
    result.innerHTML = "0000";
    return;
  }

  let oct = "";
  while (dtoValue > 0) {
    let rem = dtoValue % 8;
    oct += rem.toString();
    dtoValue = Math.floor(dtoValue / 8);
  }
  console.log(oct)
  console.log(typeof oct)
  oct = oct.split("").reverse().join("");
  result.innerHTML = oct;
};

decToOctButton.addEventListener("click", DecToOct);


//~ Octal to ... Conversations

//~ Hexadecimal to ... Conversations
