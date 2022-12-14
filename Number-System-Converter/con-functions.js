// // Hexadecimal to Decimal
// const hexToDec = (hexValueInString) => {
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
// export default hexToDec(hexValueInString);