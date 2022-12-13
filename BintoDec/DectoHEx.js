let button = document.querySelector("#button");

const dectoHex = () => {
    let hexvlaue = document.querySelector("#Decimal").value;
    let result = document.querySelector(".result");
    if (hexvlaue.length == 0) {
        alert("Field is empty!");
        result.innerHTML = null;
        return;
    }
    const arr = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F');
    var hex;
    while (num > 0) {
        let rem = num % 16;
        hex += arr[rem];
        num /= 16;
    }
    for (let i = hex.length - 1; i >= 0; i--) { //reversing array 
        var hex_number = hex[i];
    }
    result.innerHTML = hex_number
};
button.addEventListener("click", dectoHex);