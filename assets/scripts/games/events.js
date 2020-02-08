'use strict'
// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')

// Create New Game
const onNewGame = function () {
  currentPlayer = 'X'
  winner = false
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
//
// api.updateGame()
//   .then(ui.onUpdateGameSuccess)
//   .catch(ui.onUpdateGameFailure)
// }

// Need to reset the counter when you reset the gameboard.
let currentPlayer = 'X'
let winner = false
const board = ['', '', '', '', '', '', '', '', '']

$(() => {
  $('.box').on('click', function (event) {
    currentPlayer = currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O'

    // if game is not over then play
    if (winner === false && $(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      // const board = store.gameData.cells
      const index = event.target.id
      // console.log(index)
      board[index] = currentPlayer
      console.log(board)
      // check for top row winner
      if (board[0] === board[1] && board[0] === board[2] && board[0] !== '') {
        winner = true
      // check for middle row win
      } else if (board[3] === board[4] && board[3] === board[5] && board[3] !== '') {
        winner = true
      // check for bottom row win
      } else if (board[6] === board[7] && board[6] === board[8] && board[6] !== '') {
        winner = true
      // check for left column win
      } else if (board[0] === board[3] && board[0] === board[6] && board[0] !== '') {
        winner = true
      // check for middle column win
      } else if (board[1] === board[4] && board[1] === board[7] && board[1] !== '') {
        winner = true
      // check for right column win
      } else if (board[2] === board[5] && board[2] === board[8] && board[2] !== '') {
        winner = true
      // check for left diagnal win
      } else if (board[0] === board[4] && board[0] === board[8] && board[0] !== '') {
        winner = true
      // check for right diagnal win
      } else if (board[2] === board[4] && board[2] === board[6] && board[2] !== '') {
        winner = true
      } else {
        winner = false
      }
      store.board = board
      console.log(store)
      // console.log(board + 'after the checkWin')
      if (winner === true) {
        $('#message').text(currentPlayer + ' is the winner!!!')
      } else if (winner === false) {
        $('#message').text('Sorry, it is a tie.')
      }
      // const data = {
      //   'game': {
      //     'cell': {
      //       'index': `${eventNum}`,
      //       'value': `${currentPlayer}`
      //     },
      //     'over': winner
      //   }
      // }

      // console.log(data)
      // api.updateGame(data)
        // .then(ui.onUpdateGameSuccess)
        // .catch(ui.onUpdateGameFailure)
    } else {
      $('#message').text('Invalid move')
    }
  })
})

module.exports = {
  onNewGame,
  currentPlayer
}
