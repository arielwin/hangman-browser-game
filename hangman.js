// ---------------Constants-----------------

//initiates and splits the alphabet in a list array
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

//car-realted wordl list
const word_list = ["engine", "transmission", "brake", "accelerator", "clutch", "gearbox",
    "dashboard", "steering", "wheel", "tire", "radiator", "battery", "alternator",
    "exhaust", "muffler", "chassis", "suspension", "axle", "bumper", "hood",
    "trunk", "headlight", "taillight", "windshield", "mirror", "seatbelt",
    "airbag", "speedometer", "odometer", "fuel", "ignition", "gearshift", 
    "cylinder", "sparkplug", "piston", "camshaft", "crankshaft", "carburetor",
    "turbocharger", "supercharger", "differential", "fuelpump", "oilfilter",
    "radiatorhose", "shockabsorber", "transaxle", "valve", "wiper"]

//picking the random word from the list using the random word fucntion
const game_word = randomWord(word_list)
var chosenLetter = ''

const keys = document.querySelectorAll('.key')
//----------------Functions-------------------------

//gets a random word from the word list
function randomWord(list) {
    const idx = Math.floor(Math.random() * word_list.length)
    return list[idx]
}

//function to reset the game after win/loss
function reset () {

}

//--------Listeners-------------------------------

//keyboard clicks
keys.forEach(key => {
    key.addEventListener('click', () => {
        chosenLetter = (key.textContent);
        console.log(`You clicked ${chosenLetter}`)
    })
})