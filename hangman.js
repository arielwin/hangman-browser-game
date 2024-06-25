// ---------------Constants-----------------

//initiates and splits the alphabet in a list array
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

//car-realted word list
const wordList = ["engine", "transmission", "brake", "accelerator", "clutch", "gearbox",
    "dashboard", "steering", "wheel", "tire", "radiator", "battery", "alternator",
    "exhaust", "muffler", "chassis", "suspension", "axle", "bumper", "hood",
    "trunk", "headlight", "taillight", "windshield", "mirror", "seatbelt",
    "airbag", "speedometer", "odometer", "fuel", "ignition", "gearshift", 
    "cylinder", "sparkplug", "piston", "camshaft", "crankshaft", "carburetor",
    "turbocharger", "supercharger", "differential", "fuelpump", "oilfilter",
    "radiatorhose", "shockabsorber", "transaxle", "valve", "wiper"]


    //ASCII Art courtesy of https://github.com/juliedlevine/Hangman-ascii/blob/master/hangman.js
    hangmanArray = [`
        +---+
        |   |
            |
            |
            |
            |
      =========
      `, `
      +---+
      |   |
      O   |
          |
          |
          |
    =========
    `, `
      +---+
      |   |
      O   |
      |   |
          |
          |
    =========
    `, `
      +---+
      |   |
      O   |
     /|   |
          |
          |
    =========
    `, `
      +---+
      |   |
      O   |
     /|\\\  |
          |
          |
    =========
    `, `
      +---+
      |   |
      O   |
     /|\\\  |
     /    |
          |
    =========
    `, `
      +---+
      |   |
      O   |
     /|\\\  |
     / \\\  |
          |
    =========
    `]

// picking the random word from the list using the random word fucntion and making it upper case
//let gameWord = randomWord(wordList).toUpperCase()

// selectors for keyboard, keys and the secret word on the webpage
const keys = document.querySelectorAll('.key')
const keyboard = document.querySelector('#keyboard')
const secretWord = document.querySelector('#secret-word')
let guesses = document.querySelector('#guesses')
const resetButton = document.querySelector('#reset-bottom') 
const hangedman = document.querySelector('#hangman')
const gameMessage = document.querySelector('#game-message')

let chances = 6
let winner = '';
let blanks = []
let arrayCounter = 0

// display the corresponding underscorees for the first time
//displayUnderscores(gameWord)

//----------------Functions-------------------------

//gets a random word from the word list
function randomWord(list) {
    const idx = Math.floor(Math.random() * wordList.length)
    return list[idx]
}

// function to reset the game after win/loss
function init() {
    console.log('reset clicked')
    gameWord = randomWord(wordList).toUpperCase()
    displayUnderscores(gameWord)
    chances = 6
    winner = ''
    arrayCounter = 0
    keys.forEach(key => {
        key.classList.remove('in-word')
        key.classList.remove('not-in-word')
    })
    hangedman.textContent = hangmanArray[arrayCounter]
    guesses.innerText = chances
    gameMessage.innerText = `You have ${chances} guesses remaining!`
    checkWin()
    console.log(gameWord)
}


// takes the randomly chosen word, splits it to an array and replaces each letter with an underscore
function displayUnderscores(word) {
    blanks = (word.split('').map(char => '_'))
    secretWord.textContent = blanks
}


// replace underscores with a letter if it was guessed correctly
function updateBlanks(word, array, letter) {
    for (let i =0; i < word.length; i++)   {
        if(word[i] === letter) {
            array[i] = letter
        }
    }
}


// check to see if the game has been won and do something based on that state
function checkWin(){
    if(chances <= 0 && blanks.includes('_')){
        gameMessage.innerText = 'Bummer! Game Over.'
        hangedman.textContent = hangmanArray[6]
        return
    } else if(chances >= 0 && blanks.includes('_')){
        console.log('check win: carry on')
    } else if (chances >= 1 && !blanks.includes('_')){
        gameMessage.innerText = 'Nicely Done! You Win!'
        return
    }
}

//--------Listeners-------------------------------

//main game loop

keys.forEach(key => {
    //listen for clicks on each key
    
    key.addEventListener('click', () => {
        //The current letter that was chosen
        chosenLetter = (key.textContent)
        console.log(chosenLetter)
        // if the picked letter is in the secret word do a few things
        if(gameWord.includes(chosenLetter)) {
            // update the color of the key
            key.classList.add('in-word')
            // update the on-screen underscores
            updateBlanks(gameWord, blanks, chosenLetter)
            secretWord.textContent = blanks
            //check to see if the game has been won
            checkWin()
        // if the picked letter is not in the secret word do different things
        }else {
            // change key color to red
            key.classList.add('not-in-word')        
            //subtract 1 from guesses remaing and add 1 to the "hangmanAay" to get to the next ASCII image
            chances -= 1
            arrayCounter += 1
            // Update the remaining guesses number on the webpage
            guesses.innerText = chances
            // updates the image of the hangman
            hangedman.textContent = hangmanArray[arrayCounter]
            gameMessage.innerText = `You have ${chances} guess remaining`
            // check to see if the game was
            checkWin()
        }
    }) 
})

// Initialize the game state using the init function
init()

// display the first [0] hangman array which is the empty gallows
hangedman.textContent = hangmanArray[arrayCounter]

// activate the 'reset' button so that it can be clicked and run the restart function
resetButton.addEventListener('click', init)
