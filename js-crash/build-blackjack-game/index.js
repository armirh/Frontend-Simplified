// 1.Create two variables, firstCard and secondCard
// Set their values to random betweend 2-11
let firstCard = 6
let secondCard = 9
let cards = [firstCard, secondCard] // cards array - ordered list of items
let hasBlackjack = false
let isAlive = true
let message = ""

// 2.Create a variable, sum, and set it to the sum of cards

let sum = firstCard + secondCard
//console.log(sum)
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

//another way to get elements from the HTML
// let sumEl = document.querySelector("#sum-el")

function startGame() {
    // Blackjack logic
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards drawn: " + cards[0] + " " + cards[1]
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

function newCard() {
    let newCard = 3
    sum += newCard
    cards.push(newCard)
    startGame()
}