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