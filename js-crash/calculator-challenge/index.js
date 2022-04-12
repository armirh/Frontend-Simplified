// create four founctions: add(), subtract(), divide(), multiply()
// correct calculation when the user clicks
// perform the given calculation using num1 and num2
// render the result at the sum-el paragraph

let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumElement = document.getElementById("sum-el")

function add() {
    let sum = num1 + num2
    sumElement.textContent = "Result is: " + sum
}

function subtract() {
    let subtract = num1 - num2
    sumElement.textContent = "Result is: " + subtract
}

function divide() {
    let divide = num1 / num2
    sumElement.textContent = "Result is: " + divide
}

function multiply() {
    let multiply = num1 * num2
    sumElement.textContent = "Result is: " + multiply
}