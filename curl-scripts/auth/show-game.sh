#!/bin/bash

curl "https://tic-tac-toe-api-development.herokuapp.com/games/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-type: application/json" \
  --data '{

  }'

echo
