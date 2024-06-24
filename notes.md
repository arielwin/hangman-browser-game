# Pseudocode for creating Hangman game in browser

The notes below are layed out in this format in hopes of making coding this browser-based game an easier task

## Logic
    -word bank and a way to randomly grab a word
        - [x] list of words
        - [ ] fuction like pickWord to select from the above wordbank
    -variables
        - [ ] a variable to keep the chosen word
        - [ ] a variable of all possible letters - How to generate an array of the alphabet - https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-the-alphabet
        - [ ] a variable of chosen word/letters
        - [ ] more?
        
    - [ ] remaining attempts
    - [ ] guessed letters
    - [ ] won or lost
## UI
    -large container for the 'place holders' of the chosen word represented by underscores eg: secret word -> bike initial "word" should show '_ _ _ _'
    -input - need to figure out how player will input letters. could be a clickable keyboard or, probably more simple, capture inputs directly from the player
    -a way to show the remaining number of guesses head+arms+body+legs = 6 total guesses. A big display showing "6 GUESSES REMAINING" 
    -display which letters have been guessed. If using the above 'keyboard' could 'x' out letters, or more simply add them to a container labeld "Guessed Letters"
    -maybe: figure out how to display the hang man
      ______
      |   |
      |   0
      |  /|\
    __|__/\
    -something like that but centered so the pieces line up

## Events
    -event listener for letter or word guesses, like above it could be keyboard presses or on screen button clicks
    -update display as letters are input correctly or incorrectly
    -display Winner or Game Over if conditions are met