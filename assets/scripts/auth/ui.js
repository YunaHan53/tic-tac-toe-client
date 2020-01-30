'use strict'

const store = require('./../store')

// Sign Up
const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed up!')
  $('#sign-up').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('success-message')
}

const onSignUpFailure = function (response) {
  $('#message').text('Failed to sign up')
  $('#sign-up').trigger('reset')
  $('#message').removeClass()
  $('#message').addClass('failure-message')
}

// Sign In
const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + ' successfully signed in')
  $('#sign-in').trigger('reset')
  store.user = response.user
  $('#change-password').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
}

const onSignInFailure = function (response) {
  $('#message').text('Signed in failed. 😭')
  $('#sign-in').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure
}
