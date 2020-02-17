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

// Show Game
const onShowGame = function () {

  api.showGame()
    .then(ui.onShowGameSuccess)
    .catch(ui.onShowGameFailure)
}

$('#password-button').click(function () {
  $('#message').removeClass()
  $('#message').text('Change your password in the form below!')
  $('#change-password').trigger('reset')
  $('#change-password').show()
  $('#gameboard').hide()
  $('#show-game').hide()
})

// The Event parameter is the response from the event handler.
// It says that the gameboard is clicked.
// And it has information on exactly where the click was.
// Event.target is how we get information from the event.
// The information we want from event.target is the player and the cell clicked.
// Then we will use this information to create some json data for AJAX call.
// this is how we want the data to look once we're sending it to api.updateGame():

// Need to reset the counter when you reset the gameboard.
let currentPlayer = 'X'
let winner = false
store.board = ['', '', '', '', '', '', '', '', '']

$(() => {
  $('.box').on('click', function (event) {
    // console.log('clickbox', store.board)

    // if game is not over then play
    if (winner === false && $(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      // const board = store.gameData.cells
      const index = event.target.id
      // console.log(index)
      store.board[index] = currentPlayer
      // console.log(store.board)
      // check for top row winner
      if (store.board[0] === store.board[1] && store.board[0] === store.board[2] && store.board[0] !== '') {
        winner = true
      // check for middle row win
      } else if (store.board[3] === store.board[4] && store.board[3] === store.board[5] && store.board[3] !== '') {
        winner = true
      // check for bottom row win
      } else if (store.board[6] === store.board[7] && store.board[6] === store.board[8] && store.board[6] !== '') {
        winner = true
      // check for left column win
      } else if (store.board[0] === store.board[3] && store.board[0] === store.board[6] && store.board[0] !== '') {
        winner = true
      // check for middle column win
      } else if (store.board[1] === store.board[4] && store.board[1] === store.board[7] && store.board[1] !== '') {
        winner = true
      // check for right column win
      } else if (store.board[2] === store.board[5] && store.board[2] === store.board[8] && store.board[2] !== '') {
        winner = true
      // check for left diagnal win
      } else if (store.board[0] === store.board[4] && store.board[0] === store.board[8] && store.board[0] !== '') {
        winner = true
      // check for right diagnal win
      } else if (store.board[2] === store.board[4] && store.board[2] === store.board[6] && store.board[2] !== '') {
        winner = true
      } else {
        winner = false
      }
      const data = {
        'game': {
          'cell': {
            'index': `${event.target.id}`,
            'value': `${currentPlayer}`
          },
          'over': winner
        }
      }

      // console.log(data)
      api.updateGame(data)
        .then(ui.onUpdateGameSuccess)
        .catch(ui.onUpdateGameFailure)

      const boardFull = index => index !== ''

      // console.log(board + 'after the checkWin')
      if (winner === true) {
        $('#message').removeClass()
        $('#message').addClass('success-message')
        $('#message').text(currentPlayer + ' is the winner!!!')
      } else if ((winner === false) && ((store.board).every(boardFull) === true)) {
        $('#message').removeClass()
        $('#message').addClass('failure-message')
        $('#message').text("It's a tie. Please start a new game.")
      } else {
        currentPlayer = currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O'
        $('#message').text('It is ' + currentPlayer + "'s turn.")
      }

      // console.log(store)
    } else {
      $('#message').removeClass()
      $('#message').addClass('failure-message')
      $('#message').text('Invalid move! Please start a new game!')
    }
  })
})

module.exports = {
  onNewGame,
  onShowGame,
  currentPlayer
}
