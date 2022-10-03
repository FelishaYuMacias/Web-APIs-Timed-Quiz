var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start")
var secondsLeft = 60;
//TODO:Create timed quiz that stores high scores

// write quiz questions-reference questions.js


//TODO: WHEN I click the start button
    //create a function to start the game
    function gameStart() {
        // THEN a timer starts 
            // Sets interval in variable
            var timerInterval = setInterval( function() {
              secondsLeft--;
              timerEl.textContent = secondsLeft + " Seconds until you lose!";
          
            //   if(secondsLeft === 0) {
            //     // ends game at 0 seconds
            //     endGame;
            //     // Calls function to create and append image
            //     alert("No Points for You!");
            //   }
          
            }, 1000);
        }  
    
    startBtn.addEventListener("click", gameStart)
    
        // and I am presented with a question
            
             //hide questions then reveal first and hide start when start is selected

//TODO: WHEN I answer a question
        //THEN I am presented with another question
        //reveal subsequent qustions when answer is selected 

//TODO: WHEN I answer a question incorrectly
        //THEN time is subtracted from the clock

//TODO: WHEN all questions are answered or the timer reaches 0
        //THEN the game is over

//TODO: WHEN the game is over
        // THEN I can save my initials and my score