'use strict'

// const store = require('./../store')

const onNewGameSuccess = function (response) {
  $('#gameboard').show()
}

const onNewGameFailure = function (response) {
  $('#message').text('Create New Game Failed 😭')
}

module.exports = {
  onNewGameSuccess,
  onNewGameFailure
}
