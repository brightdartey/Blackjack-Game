let cards = []
let sum = 0
let message = ""
let isAlive = false
let hasBlackjack = false
let player = {
    name: "Bright",
    score: 245
}

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let infoEl = document.getElementById("info-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.score

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

//fuction to generate random cards for the game
function getRandomCard() {
   let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if ( randomNumber === 1) {
        return 11
    } else if ( randomNumber > 10) {
        return 1
    } else {
        return randomNumber
    }
}



function renderGame() {
    // displaying player's cards
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if(sum < 21) {
        isAlive = true
        hasBlackjack = false
        message = "Do you want to draw a new card?"
    }else if(sum === 21) {
        isAlive = true
        hasBlackjack = true
        message = "Congrats! You've got blackjack"
    }else{
        isAlive = false
        hasBlackjack = false
        message = "Sorry, Game Over!"
    }
    infoEl.textContent = message
};

function newCard() {
    if ( isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        cards.push(card)
        sum += card
        renderGame()
        console.log("newcard clicked")
    }
    
};
