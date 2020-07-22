#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/games" \
  --include \
  --request POST \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{

  }'

echo
