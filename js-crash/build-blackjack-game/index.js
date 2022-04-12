// 1.Create two variables, firstCard and secondCard
// Set their values to random betweend 2-11
let firstCard = 6
let secondCard = 9
let hasBlackjack = false
let isAlive = true
let message = ""

// 2.Create a variable, sum, and set it to the sum of cards

let sum = firstCard + secondCard
//console.log(sum)
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")

//another way to get elements from the HTML
// let sumEl = document.querySelector("#sum-el")

function startGame() {
    // Blackjack logic
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Yaaay!! You've got BLACKJACK!!"
        hasBlackjack = true
    } else {
        message = "You're out of the game! :("
        isAlive = false
    }

    messageEl.textContent = message
}

