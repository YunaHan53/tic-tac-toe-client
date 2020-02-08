'use strict'

const store = require('./../store')
const onNewGameSuccess = function (response) {
  // The left dot creates a new variable called gameData and stores it into store.js
  store.gameData = response.game
  $('#gameboard').show()
  $('.box').text('')
  store.board = ['', '', '', '', '', '', '', '', '']
}

const onNewGameFailure = function (response) {
  $('#message').text('Create New Game Failed 😭')
}

const onUpdateGameSuccess = function (response) {
  // console.log(response)
  store.gameData = response.game
}

const onUpdateGameFailure = function (response) {
  $('#message').text('Update Game Failed 😭')
  // console.log(response)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure
}
