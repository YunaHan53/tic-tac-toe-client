'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#change-password').hide()
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#sign-out').hide()

  $('#new-game').on('click', gameEvents.onNewGame)
  $('#new-game').hide()
  // $('#gameboard').on('click', gameEvents.onPlayGame)
  $('#gameboard').hide()
  $('get-games').hide()
})
