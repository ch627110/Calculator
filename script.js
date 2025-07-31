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
let operator = ''
let number1 = 0
let number2 = 0
// function that takes variable and calls functions
function operate(operator, number1, number2) {
    if(operator == 'add') {
        return add(number1, number2)
    } else if(operator == 'subtract') {
        return subtract(number1, number2)
    } else if(operator == 'multiply') {
        return multiply(number1, number2)
    } else {
        return divide(number1, number2)
    }
}

const container = document.getElementById('container')

const numberGrid = document.getElementById('one-nine')
for(let i = 1; i <= 9; i++) {
    const button = document.createElement('button')
    
    button.textContent = i;
    
    button.addEventListener('click', () => {
        console.log(button.textContent)
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
}

function buttonClick(button) {
    if(button.textContent == '+') {

    } else if(button.textContent == '—') {
        
    } else if(button.textContent == '×') {
        
    } else if(button.textContent == '/') {
        
    } else if(button.textContent == '=') {
        
    } else {

    }
}