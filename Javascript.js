let num1 = 0;
let num2 = 0;
let num3 = 0;
let operator = "nu";
document.getElementById("calculatorScreen").textContent = "";

function bootSequence() {
    num1 = 0;
    num2 = 0;
    num3 = 0;
    operator = "nu";
    document.getElementById("calculatorScreen").textContent = "";
    document.getElementsByClassName('placeHolder').style.visibility = 'hidden';
}

function operate() {
    num2 = document.getElementById("calculatorScreen").textContent;

    

    if (operator == "+") {
        num3 = parseFloat(num1) + parseFloat(num2);
    } else if (operator == "-") {
        num3 = parseFloat(num1) - parseFloat(num2);
    } else if (operator == "*") {
        num3 = parseFloat(num1) * parseFloat(num2);
    } else if (operator == "/") {
        if (num2 == '0') {
            num3 = "You can't divide by zero. Press clear.";
        } else
            num3 = parseFloat(num1) / parseFloat(num2);
    }
    document.getElementById("calculatorScreen").textContent = num3;
}


function pressOne() {
    document.getElementById("calculatorScreen").textContent = document.getElementById("calculatorScreen").textContent + "1";
}
function pressTwo() {
    document.getElementById("calculatorScreen").textContent = document.getElementById("calculatorScreen").textContent + "2";
}
function pressThree() {
    document.getElementById("calculatorScreen").textContent = document.getElementById("calculatorScreen").textContent + "3";
}
function pressFour() {
    document.getElementById("calculatorScreen").textContent = document.getElementById("calculatorScreen").textContent + "4";
}
function pressFive() {
    document.getElementById("calculatorScreen").textContent = document.getElementById("calculatorScreen").textContent + "5";
}
function pressSix() {
    document.getElementById("calculatorScreen").textContent = document.getElementById("calculatorScreen").textContent + "6";
}
function pressSeven() {
    document.getElementById("calculatorScreen").textContent = document.getElementById("calculatorScreen").textContent + "7";
}
function pressEight() {
    document.getElementById("calculatorScreen").textContent = document.getElementById("calculatorScreen").textContent + "8";
}
function pressNine() {
    document.getElementById("calculatorScreen").textContent = document.getElementById("calculatorScreen").textContent + "9";
}
function pressZero() {
    document.getElementById("calculatorScreen").textContent = document.getElementById("calculatorScreen").textContent + "0";
}
function pressAdd() {
    operator = "+";
    updateFirstNumber();
    updateOperator(operator);
}
function pressSubtract() {
    operator = "-";
    updateFirstNumber();
    updateOperator(operator);
}
function pressMultiply() {
    operator = "*";
    updateFirstNumber();
    updateOperator(operator);
}
function pressDivide() {
    operator = "/";
    updateFirstNumber();
    updateOperator(operator);
}


function updateFirstNumber() {
    num1 = document.getElementById("calculatorScreen").textContent;
    //document.getElementById("num1Button").textContent = num1;
    document.getElementById("calculatorScreen").textContent = "";
}

function updateOperator(operator) {
    //document.getElementById("operatorButton").textContent = operator;
}