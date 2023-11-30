var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var isWin = false;
var timer;
var timerCount;

function startGame() {
    isWin = false;
    timerCount = 20;
 
    startButton.disabled = true;
    renderBlanks()
    startTimer()
  }
  
  function startTimer() {

    timer = setInterval(function() {
      timerCount--;
      timerElement.textContent = timerCount;
      if (timerCount >= 0) {
      
        if (isWin && timerCount > 0) {
        
          clearInterval(timer);
          winGame();
        }
      }
     
      if (timerCount === 0) {
       
        clearInterval(timer);
        loseGame();
      }
    }, 1000);
  }

  startButton.addEventListener("click", startGame);