//js method that helps us look for anything with the class name
const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0

function randomSquare() { //want the mole in a radom square
    squares.forEach(square => {
        square.classList.remove('mole') // remove the mole if he exists on any of the squares so we have a fresh slate 2 start with
    } )

    
    //go into square array
    let randomPosition = squares[Math.floor(Math.random() * 9)]
    console.log(randomPosition)
}

randomSquare() //calling function