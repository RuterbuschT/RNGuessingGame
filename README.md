RNGuessing Game

RNGuessing Game is a simple web-based number guessing game where you try to guess a randomly generated number between 1 and 100. The game provides feedback on whether your guess is too high or too low, and you have a limited number of lives to make your guesses.
Features

    Guess a number between 1 and 100.
    Receive feedback on your guess (too high or too low).
    Keep track of your remaining lives.
    Win the game by guessing the correct number.

Technologies Used

    HTML
    CSS
    JavaScript

CSS Styling

The game's user interface is styled using CSS for an attractive and user-friendly design. Here are some key style elements:

css

:root{
    --shadow: #e9a965;
}

body{
    margin: 0;
    padding: 0;
    background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
}

h1{
    text-align: center;
    font-size: 100px;
    font-style: italic;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #3f87a6;
    text-shadow: 5px 2px 2px var(--shadow);
}

h2{
    text-align: center;
    font-size: 30px;
    font-style: italic;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: #3f87a6; 
}

.humanInput{
    text-align: center;
}

button{
    border-radius: 20px;
    font-size: 20px;
    padding: 5px;
    background-color: #e9a965;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: italic;
}

input{
    width: 155px;
    height: 20px;
    border-radius: 5px;
    box-shadow: inset 1px 1px 1px #3f87a6,
    inset 1px 2px 2px #e9a965,
    2px 2px 2px #3f87a6;
    border: 1px solid #e9a965;
}

.gameContainer{
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    height: 300px;
}

.flip-card-player, .flip-card-computer{
    border-radius: 20px;
    background-color: #e9a965;
    width: 350px;
    height: 300px;
    perspective: 1000px;
}

.flip-card-inner, .computer-card-inner{
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1s;
    transform-style: preserve-3d;
}

.flipped{
    transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-back {
    background-color: #3f87a6;
    transform: rotateY(180deg);
}

h3{
    margin-top: 100px;
    font-size: 40px;
}

.computerNum, .humanGuess{
    background-color: #e9a965;
    width: 350px;
    margin-right: 100px;
    font-size: 50px;
    text-align: center;
    border-radius: 30px;
}

p{
    margin-top: 100px;
    color: black;
}

Usage

    Clone the repository to your local machine:

    bash

    git clone https://github.com/your-username/RNGuessingGame.git

    Open the index.html file in your web browser.

    Follow the instructions on the screen to start and play the game.

How to Play

    Enter a number between 1 and 100 in the input field.
    Click the "Submit" button to make your guess.
    The game will provide feedback on whether your guess is too high or too low.
    Keep track of your remaining lives.
    Win the game by guessing the correct number.


Contact

If you have any questions or feedback, please feel free to contact the project maintainer:
Tyler Ruterbusch
tylerruterbusch.cod@gmail.com

Roadmap

 Add additional features and levels.
 Implement a high score system.

     Enhance user interface and graphics.

Release History

    1.0.0 (Initial Release)
        Basic number guessing game functionality.

For more information, please refer to our Changelog.
Resources

    HTML, CSS, and JavaScript Resources
    CSS Styling Guide
