'use strict'

const store = require('./../store')
const onNewGameSuccess = function (response) {
  // The left dot creates a new variable called gameData and stores it into store.js
  $('#message').removeClass()
  $('#message').text('Success! X will go first. Click on any square on the board to start playing!🤪')
  store.gameData = response.game
  $('#change-password').trigger('reset')
  $('#change-password').hide()
  $('#show-game').show()
  $('#gameboard').show()
  $('#game-count').show()
  $('.box').text('')
  store.board = ['', '', '', '', '', '', '', '', '']
  // console.log('On new game success', store.board)
}

const onNewGameFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('Create New Game Failed 😭')
}

const onUpdateGameSuccess = function (response) {
  store.gameData = response.game
  // console.log(response)
}

const onUpdateGameFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('Update Game Failed 😭')
  // console.log(response)
}

const onShowGameSuccess = function (response) {
  // console.log(response.games.length)
  $('#game-count').text(response.games.length)
}

const onShowGameFailure = function (response) {
  $('#message').removeClass()
  $('#message').addClass('failure-message')
  $('#message').text('Show Game Failed 😭')
  // console.log(response)
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure,
  onUpdateGameSuccess,
  onUpdateGameFailure,
  onShowGameSuccess,
  onShowGameFailure
}
