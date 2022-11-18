//js method that helps us look for anything with the class name
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerid = null // null because we need to actually stop this timer interval from moving

function randomSquare() { //want the mole in a radom square
    squares.forEach(square => {
        square.classList.remove('mole') // remove the mole if he exists on any of the squares so we have a fresh slate 2 start with
    } )

    
    //go into square array
    //get a random square
    let randomSquare = squares[Math.floor(Math.random() * 9)] //Math.random gives # between 0-1.Floor rounds down. We x by 9.
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id //getting id of square ex. ids 1-9 & saving it to hitPosition
}

squares.forEach(square => { //for each id in the square
    square.addEventListener('mousedown', () => { //listening to a click of the square. Then add a function here. =>
        if (square.id == hitPosition) { // if square is hit and is the same as hitPosition
            result++                    // then you want get the result and  add one to the result
            console.log(result)
            score.textContent = result  //display it in our score
            hitPosition = null          //clear out hitPosition
        }
    })
})

function moveMole() {
    timerid = setInterval(randomSquare, 600) //generate a random square every 500 milliseconds to move mole
}


moveMole() //can attach to a button and stop mole with timerids

function countDown() {
    currentTime-- //-1 from it
    timeLeft.textContent = currentTime //display the time 

    if (currentTime == 0) {  // 0 means get to the end
        clearInterval(countDownTimerId)
        clearInterval(timerid)
        alert('GAME OVER! Your final score is ' + result) // quote and add the result
    }
}

//countDownTimerId so we can stop it if we want
let countDownTimerId = setInterval(countDown, 1000)// 1000 milliseconds to get current time