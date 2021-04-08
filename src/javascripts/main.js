// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import 'bootstrap'

// JavaScript
import { addGuest, loadGuests } from './guestbook'
import { playTicTacToe } from './tic-tac-toe'
import { showTop10Movies } from './top10'
import { getGitHubUsers } from './github'

if(document.querySelector('#landing')){
  document.getElementById("guestForm").onsubmit = addGuest
  window.onload = loadGuests
}

if(document.querySelector("#tic-tac-toe")){
  playTicTacToe()
}

if(document.querySelector("#top-10-movies")){
  showTop10Movies()
}

if(document.querySelector("#github-users")){
  getGitHubUsers()
}