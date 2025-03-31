const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const mode = document.getElementById("mode")

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole(){
    
    timerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game Over! Final score: ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)

function onButtonClick(){
    if(mode.textContent == 'Hard'){
        clearInterval(timerId)
        timerId = setInterval(randomSquare, 1000)
        mode.textContent = 'Simple'
    }
    else{
        clearInterval(timerId)
        timerId = setInterval(randomSquare, 500)
        mode.textContent = 'Hard'
    }
}

const button = document.querySelector('button')
button.addEventListener('click', onButtonClick)

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }