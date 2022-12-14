// // Hexadecimal to Decimal
// export const hexToDec = (hexValueInString) => {
//   let hexValue = hexValueInString.toUpperCase();
//   let length = hexValue.length;
//   let base = 1;
//   let dec = 0;
//   for (let i = length - 1; i >= 0; i--) {
//     if (hexValue[i] >= "0" && hexValue[i] <= "9") {
//       dec += (hexValue[i].charCodeAt(0) - 48) * base;
//       base = base * 16;
//     } else if (hexValue[i] >= "A" && hexValue[i] <= "F") {
//       console.log(hexValue[i]);
//       dec += (hexValue[i].charCodeAt(0) - 55) * base;
//       base = base * 16;
//     }
//   }
//   dec = dec.toString();
//   return dec;
// };

// // Decimal To Hexadecimal
// export const decToHex = (decValueInString) => {
//   let decValue = parseInt(decValueInString);
//   const arr = [
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//   ];
//   let hex = "";
//   while (decValue > 0) {
//     let rem = decValue % 16;
//     hex += arr[rem];
//     decValue = Math.floor(decValue / 16);
//   }
//   hex = hex.split("").reverse().join("");
//   return hex;
// };

// // Decimal to Octal
// export const decToOct = (decValueInString) => {
//   let decValue = parseInt(decValueInString);
//   let result = document.querySelector(".dtoResult");

//   if (decValue == 0) {
//     result.innerHTML = "0000";
//     return;
//   }

//   let oct = "";
//   while (decValue > 0) {
//     let rem = decValue % 8;
//     oct += rem.toString();
//     decValue = Math.floor(decValue / 8);
//   }
//   oct = oct.split("").reverse().join("");
//   return oct;
// };

// // Octal to Decimal
// export const octToDec = (octValueInString) => {
//   let octValue = parseInt(octValueInString);

//   let dec = 0,
//     rem = 0;
//   let base = 1;

//   while (octValue > 0) {
//     rem = octValue % 10;
//     dec = dec + rem * base;
//     octValue = Math.floor(octValue / 10);
//     base = base * 8;
//   }
//   dec = dec.toString();
//   return dec;
// };

// // Binary To Decimal
// export const binToDec = (binValueInString) => {
//   let pow = 1,
//     dec = 0;
//   for (let i = binValueInString.length - 1; i >= 0; i--) {
//     dec += binValueInString[i] * pow;
//     pow *= 2;
//   }
//   dec = dec.toString();
//   return dec;
// };

// // Decimal To Binary
// export const decToBin = (decimalValueInString) => {
//   let decValue = parseInt(decimalValueInString);
//   if (decValue == 0) {
//     result.innerHTML = "0000";
//     return;
//   }

//   let bin = "";
//   while (decValue > 0) {
//     let rem = decValue % 2;
//     bin += rem;
//     decValue = Math.floor(decValue / 2);
//   }
//   bin = bin.split("").reverse().join("");
//   return bin;
// };
