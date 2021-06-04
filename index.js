let player = {
    name: "Clay",
    total: 0,
    isAlive: false,
    hasBlackJack: false,
    cards: [],
    score: 0,
    hasAce: false
}

let cpu = {
    name: "CPU",
    total: 0,
    isAlive: false,
    hasBlackJack: false,
    cards: [],
    score: 0,
    hasAce: false
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

let playerScoreEl = document.getElementById("player-score")
let cpuScoreEl = document.getElementById("cpu-score")

// BUTTONS
const startBtn = document.getElementById("start-game")
const newCardBtn = document.getElementById("new-card")
const stayBtn = document.getElementById("stay")

// add below code to code at end of deal
playerScoreEl.textContent = player.name + ": " + player.score 
cpuScoreEl.textContent = cpu.name + ": " + cpu.score 

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
    //activate "new card" and "stay buttons"
    newCardBtn.style.display = "inline-block"
    stayBtn.style.display = "inline-block"
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
    // display cards and sum of cards
    playerCardsEl.innerText = player.cards[0] + " " + player.cards[1]
    cpuCardsEl.innerText = cpu.cards[0] + " " + "[?]"
    // run getScore()
    getScore()
}

function newCard() {
    //if player has busted, move on
    if (player.score >= 21) { 
        computerTurn() 
    }
    // run getRandomCard
    let newCard = getRandomCard()
    //display new card
    playerCardsEl.innerText += " " + newCard
    //add new card to player cards
    player.cards.push(newCard)
    // run getScore()
    getScore()
}

function getScore() {
    let playerScore = 0
    for (let i=0; i < player.cards.length; i++) {
        let cardValue
        //determine numeric value based on player.cards[i] value
        isNaN(player.cards[i].charAt(0)) ? cardValue = 10 
        : player.cards[i].charAt(0) == "A" ? cardValue = 11
        : cardValue = parseFloat(player.cards[i])
        //set playerScore to += value
        playerScore += cardValue
        console.log(cardValue)
    }
    
    // check if player has ace
    player.hasAce ? player.score = playerScore + " or " + playerScore - 11 
    : player.score = playerScore
    console.log(player.score)
    //display score
    playerScoreEl.textContent = player.name + ": " + player.score 
    //set cpu score equal to first card value + ? hidden card
}

function getComputerScore() {
    let cpuScore
    for(let i=0; i < cpu.cards.length; i++) {
        //determine numberic value based on cpu.cards[i] value
        //set cpuScore to += value
    }
}

function stay() {
    // run computerTurn()
}

function computerTurn() {
    // reveal hidden card
    // getComputerScore()
    // get new card if < 17
    // stay if >= 17
    // run displayResults()
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

function displayResults() {
    // show who won hand, then give option startGame()
    // do not reset scoring
}