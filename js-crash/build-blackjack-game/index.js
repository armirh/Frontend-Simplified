// 1.Create two variables, firstCard and secondCard
// Set their values to random betweend 2-11
let cards = [] // cards array - ordered list of items
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Armir",
    chips: 145
}
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randNumber = Math.floor(Math.random() * 13) + 1

    if (randNumber > 10){
        return 10
    } else if (randNumber === 1){
        return 11
    } else {
        return randNumber
    }

}

//another way to get elements from the HTML
// let sumEl = document.querySelector("#sum-el")
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard

function startGame() {
    isAlive = true

    
    // Blackjack logic
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards drawn: "

    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + " "
    }

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
    if (isAlive === true && hasBlackjack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        startGame()
    }
}