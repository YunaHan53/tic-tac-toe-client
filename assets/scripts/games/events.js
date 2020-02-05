'use strict'
// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Create New Game
const onNewGame = function () {
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// The Event parameter is the response from the event handler.
// It says that the gameboard is clicked.
// And it has information on exactly where the click was.
// Event.target is how we get information from the event.
// The information we want from event.target is the player and the cell clicked.
// Then we will use this information to create some json data for AJAX call.
// this is how we want the data to look once we're sending it to api.updateGame():
// {
//   "game": {
//     "cell": {
//       "index": 0,
//       "value": "x"
//     },
//     "over": false
//   }
// }
// Update Game
// const onUpdateGame = event => {
//   const boxIndex = event.target
//   const player = ['', '', '', '', '', '', '', '', '']

// api.updateGame()
//   .then(ui.onUpdateGameSuccess)
//   .catch(ui.onUpdateGameFailure)
// }

// Start Game
const onPlayGame = function (event) {
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// Play Game

// need to reset the counter when you reset the gameboard.
let counter = 0
let currentPlayer = 'X'
$(() => {
  $('.box').one('click', function (event) {
    $(event.target).text(currentPlayer)

    counter++
    // Array of winning rows
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    // Create an empty array and pushing the id value of the clicked box into the array
    const clickedBox = []
    clickedBox.push(Number(event.target.id))

    // Checking the Row to see if X won or if O won
    function checkRow (a, b, c) {
      if (a === 'X' && b === 'X' && c === 'X') {
        return 1
      } else if (a === 'O' && b === 'O' && c === 'O') {
        return -1
      } else {
        return 0
      }
    }

    const checkWin = function () {
      if (checkRow > 0) {
        console.log('X wins!')
        return true
      } else if (checkRow < 0) {
        console.log('O Wins!')
        return false
      } else if (counter === 9) {
        console.log('It is a tie!')
        return false
      }
    }

    // Looping through the lines array
    for (let i = 0; i < lines.length; i++) {
      const a = lines[i][0]
      const b = lines[i][1]
      const c = lines[i][2]

      checkRow(a, b, c)

      // Assigning 3 variables to find the numbers in the clickbox to the lines array.
      const one = clickedBox.find(x => (a === x))
      const two = clickedBox.find(x => (b === x))
      const three = clickedBox.find(x => (c === x))

      console.log(one, two, three)

      if (clickedBox.length > 2) {
        checkRow()
      }
    }
    const eventNum = Number(event.target.id)

    const data = {
      'game': {
        'cell': {
          'index': `${eventNum}`,
          'value': `${currentPlayer}`
        },
        'over': checkWin()
      }
    }
    currentPlayer = currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O'

    console.log(data)
    api.updateGame(data)
      .then(ui.onUpdateGameSuccess)
      .catch(ui.onUpdateGameFailure)
  })
})

module.exports = {
  onNewGame,
  // onUpdateGame,
  onPlayGame,
  currentPlayer
}
