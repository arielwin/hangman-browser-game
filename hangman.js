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

// picking the random word from the list using the random word fucntion and making it upper case
const gameWord = randomWord(wordList).toUpperCase()

// selectors for keyboard, keys and the secret word on the webpage
const keys = document.querySelectorAll('.key')
const keyboard = document.querySelector('#keyboard')
const secretWord = document.querySelector('#secret-word')

let guesses = 10
let winner;
let blanks = []

//----------------Functions-------------------------

//gets a random word from the word list
function randomWord(list) {
    const idx = Math.floor(Math.random() * wordList.length)
    return list[idx]
}

//function to reset the game after win/loss
function reset () {
    //chose a new word
    //reset guessed letter list
    //key board colors
    //reset hangman visual

}

function displayUnderscores(word) {

    blanks = (word.split('').map(char => '_'))
    secretWord.textContent = blanks
}

displayUnderscores(gameWord)


function updateBlanks(word, array, letter) {
    for (let i =0; i < word.length; i++)   {
        if(word[i] === letter) {
            array[i] = letter
        }
    }
}


//--------Listeners-------------------------------

//keyboard clicks
console.log(`The game word is ${gameWord}`)

keys.forEach(key => {
    key.addEventListener('click', () => {

        chosenLetter = (key.textContent)

        // if the picked letter is in the secret word do a few things
        if(gameWord.includes(chosenLetter)) {
            
            // update the color of the key
            key.classList.add('in-word')
            // update the underscores
            updateBlanks(gameWord, blanks, chosenLetter)
            console.log(`${chosenLetter} is in the word`)
            secretWord.textContent = blanks

        // if the picked letter is not in the secret word do different things
        }else {

            // change key color to red
            key.classList.add('not-in-word')
            // add a symbol/character to the hangman drawing
            
            //subtract 1 from guesses remaing

            console.log(`${chosenLetter} is not in the word`)
        }
    })
})
