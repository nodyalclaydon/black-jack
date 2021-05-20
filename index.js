let player = {
    name: "Clay",
    total: 0
}

let cpu = {
    name: "CPU",
    total: 0
}

let deckOfCards = []
let playerCards = []
let cpuCards = []
let playerHasBlackJack = false
let cpuHasBlackJack = false
let playerIsAlive = false
let cpuIsAlive = false
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

playerScoreEl.textContent = player.name + ": " + playerScore 
cpuScoreEl.textContent = cpu.name + ": " + cpuScore 

function getRandomCard() {
    // declare randomNumber variable that returns a random number between 1 and deckofCards.length
    // deckOfCards[randomNumber] becomes dealt card
    // remove deckOfCards[randomNumber] from deckOfCards
}

function startGame() {
    // set deckOfCards equal to full deck array
    // set isAlive to true for both players
    // dealCards()
}

function dealCards() {
    // declare first and second card variables for player and CPU
        // , each run getRandomCard function as value
        // do not display cpu second card value
    // set playerCards equal to [firstCard, secondCard] - same for CPU
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