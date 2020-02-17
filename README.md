# Tic-Tac-Toe: Game Description

This is a tic-tac-toe game that allows a player to sign-up, sign-in to play the game. The player will start with 'X' and the turns will alternate from 'X' to 'O'

## Important Links

- [Repo](https://github.com/YunaHan53/tic-tac-toe-client)
- [Deployed Client](https://yunahan53.github.io/tic-tac-toe-client/)

## Planning Story

For the Tic-Tac-Toe game, I planned out what I want my page layout to look like by drawing out the wireframes. I wanted to have one webpage with sign-up and sign-in forms on the homepage, and upon signing in, the player then can choose to change their password, start new game and sign out if they choose. Upon clicking on the new game, the gameboard will show up and the player can click on any box in the gameboard to make the first move. The first player will always be 'X' and the second player will always be 'O'. Upon getting three 'X's or three 'O's in a row, the game will display who won with the option to reset.

### User Stories

As a basic user, I want to be able to play the tic-tac-toe game by myself or with a friend on the same device.
As a basic user, I want to show messages of when a player wins, loses or ties the game.
As a basic user, I want to be able to restart the game whenever I want.
As a moderate user, I want to be able to track the number of games played.
As a moderate user, I want to have user friendly web-based game with cool layout.
As a moderate user, I want to be able to sign up, sign-in and sign out where my game history can be stored.
As an advanced user, I want to animate a strikethrough line through any 3-in-a-row to show who won.
As an advanced user, I want to also animate the box when it is clicked on the gameboard.

### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript

### Unsolved Problems

- Still need to ....
  - Add strikethrough animation when there is 3-in-a-row.
  - Add box animation when it's clicked. (not just the hover)
  - Count the number of wins for each O or X player.
- Would like to eventually ....
  - Get the page to use pop-up windows for sign-up & sign-in & password change.
  - Add strikethrough animation when there is 3-in-a-row.
  - Refactor my code to be more DRY and readable.

## Images

---

#### Wireframe:
          Tic-Tac-Toe
     _____    _____     _____
    |_____|  |_____|   |_____|
      New    ChangePW  SignOut

          |           |
          |           |
          |           |
__________|___________|___________         ________
          |           |                   | # of   |
          |           |                   | Games  |
          |           |                   | Played |
__________|___________|___________        |________|
          |           |
          |           |
          |           |
          |           |
