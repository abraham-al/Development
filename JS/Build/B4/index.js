let val1 = 8;
let val2 = 2;
let result = document.getElementById("result");
console.log(val1)
function add() {
    let val = val1 + val2;
    result.innerText  = val;
}

function subtract() {
    let val = val1 - val2;
    result.innerText  = val;
}

function multiply() {
    let val = val1 * val2;
    result.innerText  = val;
}

function divide() {
    let val = val1 / val2;
    result.innerText  = val;
}