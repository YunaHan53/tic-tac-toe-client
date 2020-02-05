'use strict'

const store = require('./../store')
const onNewGameSuccess = function (response) {
  // The left dot creates a new variable called gameData and stores it into store.js
  store.gameData = response.game
  $('#gameboard').show()
  $('#change-password').show()
}

const onNewGameFailure = function (response) {
  $('#message').text('Create New Game Failed 😭')
}

const onUpdateGameSuccess = function (response) {
  console.log(response)
  store.cells = response.game.cells
}

const onUpdateGameFailure = function (response) {
  console.log(response)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
