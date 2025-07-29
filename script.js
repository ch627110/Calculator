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
// create basic HTML calculator with buttons
const container = document.querySelector('#container')
// display
const display = document.createElement('div')
createDisplay()
// button container
const buttonContainer = document.createElement('div')
createButtonContainer()
// number grid
const numberGrid = document.createElement('div')
createNumberGrid()
// operation column
const operationColumn = document.createElement('div')
createOperationColumn()
// enter button
const enterButton = document.createElement('div')
createEnterButton()

function createDisplay() {
    display.classList.add('display')
    container.appendChild(display)
}

function createNumberGrid() {
    numberGrid.classList.add('number-grid')
    let num = -2
    for(let rows = 0; rows < 4; rows++) { 
        // create a horizontal flex box
        const row = document.createElement('div')
        row.classList.add('row')
        numberGrid.appendChild(row)
        for(let cols = 0; cols < 3; cols++) {
            // insert circles
            const circle = document.createElement('div')
            circle.classList.add('circle')
            circle.textContent=num
            num++
            circle.addEventListener('click', (event => {
            }))
            row.appendChild(circle)
        }
    }
    buttonContainer.appendChild(numberGrid)
}

function createOperationColumn() {
    operationColumn.classList.add('operation-column')
    for(let rows = 0; rows < 4; rows++) { 
        // create a horizontal flex box
        const row = document.createElement('div')
        row.classList.add('row')
        operationColumn.appendChild(row)
        for(let cols = 0; cols < 1; cols++) {
            // insert circles
            const circle = document.createElement('div')
            circle.classList.add('circle')
            circle.addEventListener('click', (event => {
            }))
            row.appendChild(circle)
        }
    }
    buttonContainer.appendChild(operationColumn)
}

function createButtonContainer() {
    buttonContainer.classList.add('button-container')
    container.appendChild(buttonContainer)
}

function createEnterButton() {
    enterButton.classList.add('enter-button')
    container.appendChild(enterButton)
}