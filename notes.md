#P seudocode for creating Hangman game in browser

## Logic
    -word bank and a way to randomly grab a word
        -should I hard code a list of words or find a way to randomly generate a word
        -possible fuction like pickWord to select from the above wordbank
    -variables
        -a variable to keep the chosen word
        -a variable of all possible letters
        -a variable of chosen letters
        -more?
    -remaining attempts
    -guessed letters
    -won or lost
## UI
 -large container for the 'place holders' of the chosen word represented by underscores eg: secret word -> bike initial "word" should show '_ _ _ _'
 -input - need to figure out how player will input letters. could be a clickable keyboard or, probably more simple, capture inputs directly from the player
 -a way to show the remaining number of guess head+arms+body+legs = 6 total guess. A big display showing "6 GUESS REMAINING" 
 -display which letters have been guessed. If using the above 'keyboard' could 'x' out letters, or more simply add them to a container labeld "Guessed Letters"
 -maybe: figure out how to display the hang man
   0
  /|\
   /\
-something like that but centered so the pieces line up

## Events
-event listener for letter or word guesses, like above it could be keyboard presses or on screen button clicks
-update display as letters are input correctly or incorrectly
-display Winner or Game Over if conditions are met

