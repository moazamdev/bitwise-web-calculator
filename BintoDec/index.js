let button = document.querySelector("#button");

const binToDec = () => {
  let binaryValue = document.querySelector("#binary").value;
  let result = document.querySelector(".result");
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

button.addEventListener("click", binToDec);
