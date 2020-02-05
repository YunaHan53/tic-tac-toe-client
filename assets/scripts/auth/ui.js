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
  $('#new-game').show()
  $('#sign-out').show()
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#home-message').hide()
}

const onSignInFailure = function (response) {
  $('#message').text('Signed in failed. 😭')
  $('#sign-in').trigger('reset')
}

// Change Password
const onChangePasswordSuccess = function (response) {
  $('#message').text('Changed Password Succeeded!')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function (response) {
  $('#message').text('You can not change your password muahahaha!')
}

// Sign Out
const onSignOutSuccess = function (response) {
  $('#message').text('Sign Out Succeeded!')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#gameboard').hide()
  $('#new-game').hide()
  $('#sign-in').show()
  $('#sign-up').show()
  store.user = null
}

const onSignOutFailure = function (response) {
  $('#message').text('Sign Out Failed 😭')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
