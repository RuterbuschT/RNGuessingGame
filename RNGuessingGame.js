let lives = 5
const computerNum = () => Math.floor(Math.random () * 100) + 1
var humanCard = document.querySelector('.flip-card-inner');
var computerCard = document.querySelector('.computer-card-inner');


function toggleCard(card) {
    card.classList.toggle("flipped");
}

let computerNumber = computerNum();
console.log(computerNumber)

document.querySelector("#submit").addEventListener("click", function (){
    var humanGuess = document.getElementById('humanNumber').value;
    humanCard.classList.add("flipped");
 
    document.querySelector(".humanGuess > p").innerHTML = humanGuess;
    document.getElementById('humanNumber').value = ""; //to clear the input box
  
  
    guessChecker(humanGuess,computerNumber, humanCard, computerCard)
    if(lives === 0){
        console.log("updating Result message");
        document.querySelector("#result").innerHTML = "You are out of lives. Try again";
        document.querySelector('#submit').setAttribute("disabled", true);
    }
    console.log(lives)
})




const guessChecker = (humanGuess, computerNumber, humanCard, computerCard) =>{

    lives--;


    if(parseInt(humanGuess)  > computerNumber){
      setTimeout(() =>toggleCard(humanCard), 1000)
      
        return document.getElementById("result").innerHTML = `${humanGuess}. Too High`
        
    }
    
    else if(parseInt(humanGuess)  < computerNumber){
        setTimeout(() =>toggleCard(humanCard), 1000);
       
        return document.getElementById("result").innerHTML = `${humanGuess}. Too Low`

    }

    else if(parseInt(humanGuess) === computerNumber){
        
        document.querySelector(".computerNum > p").innerHTML = computerNumber;
        setTimeout(() =>toggleCard(computerCard))
        return document.getElementById("result").innerHTML = `${humanGuess} was the right number! You Win!`
    }
    
    else if(isNaN(parseInt(humanGuess))){
        return document.getElementById("result").innerHTML = `Please enter a number`
    }

   
 }

document.querySelector("#reset").addEventListener("click", function(){
    lives = 5;
    computerNumber = computerNum();
    location.reload();

})