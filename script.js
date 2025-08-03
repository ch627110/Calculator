// functions for the basic math operators
function add(augend, addend) {
    return augend + addend
}
function subtract(minuend, subtrahend) {
    return minuend - subtrahend
}
function multiply(multiplier, multiplicand) {
    return multiplier * multiplicand
}
function divide(dividend, divisor) {
    return dividend / divisor
}
// variables for each part of an operation
let number1 = ''
let number2 = ''
let operator = ''
let currNumber = 1
let reset = 0;
// function that takes variable and calls functions
function operate() {    
    const num1 = parseInt(number1)
    const num2 = parseInt(number2)
    const oper = operator

    if(oper == '+') {
        return add(num1, num2)
    } else if(oper == '—') {
        return subtract(num1, num2)
    } else if(oper == '×') {
        return multiply(num1, num2)
    } else {
        if(num2 == 0) {
            return 'Divide by 0 error.'
        }
        return divide(num1, num2)
    }
}

const container = document.getElementById('container')
const display = document.getElementById('top')
display.textContent = 0

const numberGrid = document.getElementById('one-nine')
for(let i = 1; i <= 9; i++) {
    const button = document.createElement('button')
    button.textContent = i;
    button.addEventListener('click', () => {
        buttonClick(button);
    });
    numberGrid.appendChild(button)
}

const zeroRow = document.getElementById('zero')
for(let i = 10; i < 13; i++) {
    const button = document.createElement('button')
    if(i == 10) {
        button.textContent = 0;
    } else if (i == 11) {
        button.textContent = '.';
    } else {
        button.textContent = 'C';
    }
    button.addEventListener('click', () => {
        buttonClick(button)
    });
    zeroRow.appendChild(button)
}

const operators = document.getElementById('operators')
for(let i = 13; i < 17; i++) {
    const button = document.createElement('button')
    if(i == 13) {
        button.textContent = '+';
    } else if (i == 14) {
        button.textContent = '—';
    } else if (i == 15) {
        button.textContent = '×';
    } else {
        button.textContent = '/';
    }
    button.addEventListener('click', () => {
        buttonClick(button)
    });
    operators.appendChild(button)
    document.getElementById('equal').addEventListener('click', () => {
        display.textContent = operate()
        reset = 1
    })
}

function buttonClick(button) {
    if(reset) {
        display.textContent = ''
        reset = 0
    }
    if(button.textContent != '+' &&
        button.textContent != '—' && 
        button.textContent != '×' && 
        button.textContent != '/' &&
        button.textContent != 'C' && 
        button.textContent != '=') {
            insertNumber(button.textContent, currNumber)
            if(currNumber == 1) {
                display.textContent = number1
            } else {
                display.textContent = number2
            }
    } else if(button.textContent == '+' ||
        button.textContent == '—' || 
        button.textContent == '×' ||
        button.textContent == '/') {
            if(number1 != '' && number2 != '') {
                number1 = operate()
                display.textContent = number1
                number2 = ''
                currNumber = 2
            } else {
                switchCurrNumber()
            }
            operator = button.textContent
    } else if(button.textContent == 'C') {
        display.textContent = 0
        clearEverything()
    }
}

function clearEverything() {
    operator = ''
    number1 = ''
    number2 = ''
}

function insertNumber(num, currNumber) {
    if(currNumber == 1) {
        number1 += num
    } else {
        number2 += num
    }
}

function populateDisplay(button) {
    if(display.textContent == 0 || display.textContent == '') {
        display.textContent = button.textContent
    } else {
        display.textContent = button.textContent
    }
}

function switchCurrNumber() {
    if(currNumber == 1) {
        currNumber = 2
    } else {
        currNumber = 1
    }
}