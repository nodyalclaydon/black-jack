let player = {
    name: "Clay",
    total: 0,
    isAlive: false,
    hasBlackJack: false,
    cards: []
}

let cpu = {
    name: "CPU",
    total: 0,
    isAlive: false,
    hasBlackJack: false,
    cards: []
}

let deckOfCards = [
    "A-S", "2-S", "3-S", "4-S", "5-S", "6-S", "7-S", "8-S", "9-S", "10-S", "J-S", "Q-S", "K-S",
    "A-C", "2-C", "3-C", "4-C", "5-C", "6-C", "7-C", "8-C", "9-C", "10-C", "J-C", "Q-C", "K-C",
    "A-D", "2-D", "3-D", "4-D", "5-D", "6-D", "7-D", "8-D", "9-D", "10-D", "J-D", "Q-D", "K-D",
    "A-H", "2-H", "3-H", "4-H", "5-H", "6-H", "7-H", "8-H", "9-H", "10-H", "J-H", "Q-H", "K-H"
]

let message = ""
let messageEl = document.getElementById("message-p")

let playerSumEl = document.getElementById("player-sum")
let cpuSumEl = document.getElementById("cpu-sum")

let playerCardsEl = document.getElementById("player-cards")
let cpuCardsEl = document.getElementById("cpu-cards")

let playerScore = 0
let cpuScore = 0
let playerScoreEl = document.getElementById("player-score")
let cpuScoreEl = document.getElementById("cpu-score")

// BUTTONS
const startBtn = document.getElementById("start-game")

// add below code to code at end of hand
// playerScoreEl.textContent = player.name + ": " + playerScore 
// cpuScoreEl.textContent = cpu.name + ": " + cpuScore 

function getRandomCard() {
    // declare randomNumber variable that returns a random number between 1 and deckofCards.length
    let randomNumber = Math.floor(Math.random() * deckOfCards.length)
    // deckOfCards[randomNumber] becomes dealt card
    let dealtCard = deckOfCards[randomNumber]
    // remove deckOfCards[randomNumber] from deckOfCards
    deckOfCards.splice(randomNumber, 1)
    // return dealt card
    return dealtCard
}

function startGame() {
    // set deckOfCards equal to full deck array
    deckOfCards = [
        "A-S", "2-S", "3-S", "4-S", "5-S", "6-S", "7-S", "8-S", "9-S", "10-S", "J-S", "Q-S", "K-S",
        "A-C", "2-C", "3-C", "4-C", "5-C", "6-C", "7-C", "8-C", "9-C", "10-C", "J-C", "Q-C", "K-C",
        "A-D", "2-D", "3-D", "4-D", "5-D", "6-D", "7-D", "8-D", "9-D", "10-D", "J-D", "Q-D", "K-D",
        "A-H", "2-H", "3-H", "4-H", "5-H", "6-H", "7-H", "8-H", "9-H", "10-H", "J-H", "Q-H", "K-H"
    ]
    // set isAlive to true for both players
    player.isAlive = true
    cpu.isAlive = true
    // remove "start game" button
    startBtn.style.display = "none"
    // dealCards()
    dealCards()
}

function dealCards() {
    // declare first and second card variables for player and CPU
    // do not display cpu second card value
    let playerFirstCard = getRandomCard()
    let playerSecondCard = getRandomCard()
    let cpuFirstCard = getRandomCard()
    let cpuSecondCard = getRandomCard()
    // set playerCards equal to [firstCard, secondCard] - same for CPU
    player.cards = [playerFirstCard, playerSecondCard]
    cpu.cards = [cpuFirstCard, cpuSecondCard]
    console.log(player.cards)
    console.log(cpu.cards)
    // display cards and sum of cards
    playerCardsEl.innerText = player.cards[0] + " " + player.cards[1]
    cpuCardsEl.innerText = cpu.cards[0] + " " + player.cards[1]
}

function newCard() {
    // run getRandomCard
    // run computerTurn()
}

function stay() {
    // run computerTurn()
}

function doubleDown() {
    // do something with score...set isDoubledDown to true?
    // run get new card
}

function splitCards() {
    //add second hand...set hasSplitCards to true?
    //do something with scoring
    //run get new card
}

function computerTurn() {
    // get new card if < 17
    // stay if >= 17
    // run displayResults()
}

function displayResults() {
    // show who won hand, then give option startGame()
    // do not reset scoring
}