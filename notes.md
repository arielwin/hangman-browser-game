# Pseudocode for creating Hangman game in browser

The notes below are layed out in this format in hopes of making coding this browser-based game an easier task

## Logic
    -word bank and a way to randomly grab a word
        - [X] list of words
        - [X] fuction pickWord to select from the above wordbank
        - [X] function initialize - set game state
        - [X] function reset - reset game
    -variables
        - [X] a variable to keep the chosen word
        - [X] a variable of all possible letters - How to generate an array of the alphabet - https://stackoverflow.com/questions/24597634/how-to-generate-an-array-of-the-alphabet
        - [X] a variable of chosen word/letters
        - [ ] more?
        
    - [X] remaining attempts
    - [X] guessed letters
    - [X] won or lost
## UI
    - [X] large container for the 'place holders' of the chosen word represented by underscores eg: if (secretWord) = bike, numBlankSpaces = 4, "word" should show '_ _ _ _'
    - [X] input - clickable inputs or typed guesses
    - [X] a way to show the remaining number of guesses head+arms+body+legs = 6 total guesses. A big display showing "6 GUESSES REMAINING" 
    - [X] display which letters have been guessed. If using the above 'keyboard' could 'x' out letters, or add them to a container labeld "Guessed Letters" or both -- now shows red for wrong and green for right
    - [X] display the hang man
      ______
      |   |
      |   0
      |  /|\
    __|__/\
    - [X]something like that but centered so the pieces line up

## Events
    - [X]event listener for letter or word guesses, like above it could be keyboard presses or on screen button clicks
    - [X] update display as letters are input correctly or incorrectly
    - [X] display Winner or Game Over if conditions are met


### websites

    - https://www.html.am/tags/html-pre-tag.cfm#:~:text=The%20element%20can%20be,tact%2C%20and%20without%20word%20wrap.

    - https://github.com/juliedlevine/Hangman-ascii/blob/master/hangman.js

    - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

    - https://www.html.am/tags/html-pre-tag.cfm#:~:text=The%20element%20can%20be,tact%2C%20and%20without%20word%20wrap.

    - https://stackoverflow.com/questions/38406941/underscore-js-to-check-if-element-in-array-exists
    
    - https://www.w3schools.com/tags/tag_span.asp

    - https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-examples

    - https://coolors.co/0c120c-2a9d8f-e9c46a-f4a261-e76f51

    - https://www.w3.org/TR/WCAG20/