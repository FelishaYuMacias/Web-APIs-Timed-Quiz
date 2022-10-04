var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var startPage = document.querySelector("#start-page");
var quizPage = document.querySelector ("#quiz")
var quizQuestion = document.querySelector ("#questions")
var quizOptions = document.querySelector ("#options")
var quizCorrect = document.querySelector ("right")

var secondsLeft = questions.length*5;
var index = 0
//TODO:Create timed quiz that stores high scores

// write quiz questions-reference questions.js


//TODO: WHEN I click the start button
//create a function to start the game
function gameStart() {
    //hide start screen
    startPage.setAttribute("class", "hide");
    //show question page
    quizPage.setAttribute ("class", "show")
    
    // THEN a timer starts 
    // Sets interval in variable
    var timerInterval = setInterval( function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft + " Seconds until you lose!";
        
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // ends game at 0 seconds
            // endGame;
            alert("No Points for You!");
        }
        // and I am presented with a question
        
        //hide questions then reveal first and hide start when start is selected
        
    }, 1000);
    loadQuestion() 
} 

function loadQuestion( ) {
    //choose question and options from array
    var currentQuestion = questions[index];
    //put question on screen
    quizQuestion.textContent= currentQuestion.question;

    // remove previous question options
    quizOptions.innerHTML = "";
  
    // loop over question options
    currentQuestion.options.forEach(function(options, i) {
      // create new button for each choice
      var optionBtn = document.createElement("button");
      optionBtn.setAttribute("class", "answers");
      optionBtn.setAttribute("value", options);
  
      optionBtn.textContent = i + 1 + ". " + options;
  
      // attach click event listener to each choice
    //   optionBtn.onclick = questionClick;
  
      // display on the page
      quizOptions.appendChild(optionBtn);
    });
}
        

startBtn.addEventListener("click", gameStart)
        
       

//TODO: WHEN I answer a question
        //THEN I am presented with another question
        //reveal subsequent qustions when answer is selected 

//TODO: WHEN I answer a question incorrectly
        //THEN time is subtracted from the clock

//TODO: WHEN all questions are answered or the timer reaches 0
        //THEN the game is over

//TODO: WHEN the game is over
        // THEN I can save my initials and my score