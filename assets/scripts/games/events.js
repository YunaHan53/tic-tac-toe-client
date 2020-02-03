'use strict'
// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// Create New Game
const onNewGame = function (event) {
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// Start Game
const onPlayGame = function (event) {
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

// Play Game
let currentPlayer = 'X'
$(() => {
  $('.box').on('click', function (event) {
    console.log('click')
    $(event.target).text(currentPlayer)
    currentPlayer = currentPlayer === 'O' ? currentPlayer = 'X' : currentPlayer = 'O'
  })
})
// const placeAnX = function (event) {
//   if ($(event.target).hasClass('box')) {
//     $(event.target).text('X')
//   }
// }
//
// const placeAnO = function (event) {
//   if ($(event.target).hasClass('box')) {
//     $(event.target).text('O')
//   }
// }

module.exports = {
  onNewGame,
  onPlayGame,
  currentPlayer
  // placeAnX,
  // placeAnO
}
