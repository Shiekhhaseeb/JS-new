let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;
//r u available to plaay game
if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault(); //server pe mat bhejo value
    const guess = parent(userInput.value);
    console.log(guess);
    //no is passed now ,ab isko validate karo
    validateGuess(guess);
  });
}

function validateGuess(guess) {//mostyl used in DB
  //checks if no. is b/w 1-100
if (isNaN(guess)) {
    alert('plz enter a valid number')
}
else if(guess < 1) {
    alert('plz enter a number more than 1')
}
else if(guess > 100) {
    alert('plz enter a  number less than 100')
}
else{
    //kahi game over toh nahi hua

    prevGuess.push(guess)
    if(numGuess === 11){
        displayGuess(guess)
        checkGuess(guess)
        displayMessage(`Game over, Random number was ${randomNumber}`)
        endGame()
    }
    else{
        //display karo or check karo guess ko
        displayGuess(guess)
        checkGuess(guess)
    }
}

}

function checkGuess(guess) {
  //write message
  //is it equal,higher ,lower to random no.
  //if yes ,tell user u won the game
if (guess === randomNumber) {
    displayMessage(`You guessed it right`)
    endGame()
}
else if (guess < randomNumber){
    displayMessage(`The number is TOOO low`)
endGame()
}

else if (guess > randomNumber){
    displayMessage(`The number is TOOO high`)
    endGame()
}
   
}

function displayGuess(guess) {
  //clean values
  //update arrays
  userInput.value = ''
  guessSlot.innerHTML += `${guess},   `;
  numGuess++;
  remaining.innerHTML =`${11-numGuess} `;
}

function DisplayGuess(message) {
  //print and pass message
  lowOrHi.innerHTML =`<h2>${message}</h2>`
}

function endGame() {
  //make a button for end game
//clear all input fields
userInput.value = ''
//take or values set na karpai
userInput.setAttribute('disabled','')
//start button
p.classList.add('button');
//add innerHTML in p
p.innerHTML= `<h2 id ="newGame">Start new Game</h2>`
startOver.appendChild(p);
playGame = false;
newGame()
}

function newGame() {
  //take ref of button
  const newGameButton=document.querySelector('#newGame')
newGameButton.addEventListener('click',function(e){
    //set all variables
    randomNumber = parseInt(Math.random() * 100 + 1);
    //reset previous guess
    prevGuess = []
    numGuess =1;
    guessSlot.innerHTML =''
  remaining.innerHTML = `${11-numGuess} ` 
  userInput.removeAttribute('disabled')
  startOver.removeChild(p)
  
    playGame = true;
})

}
