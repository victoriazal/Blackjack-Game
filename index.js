let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name: "Per",
    chips: 145
}

let playerEl = document.getElementById("player")
playerEl.textContent = player.name + ": $ " + player.chips;
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    console.log(randomNumber)
    let random = randomNumber == 1 ? 11 : randomNumber > 10 ? 10 : randomNumber;
    return random
}

function startGame() {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    let message = ""
    if (sum <= 20) {
        message = "Do you want a new card?🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got a BlackJack!🥳"
        hasBlackJack = true
    } else {
        message = "You are out of the game!😭"
        isAlive = false
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}