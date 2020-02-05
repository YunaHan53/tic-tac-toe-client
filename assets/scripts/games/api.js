'use strict'

const config = require('./../config')
const store = require('./../store')

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGame = function (moveData) {
  return $.ajax({
    url: config.apiUrl + `/games/` + store.gameData.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: moveData
  })
}

module.exports = {
  newGame,
  updateGame
}
