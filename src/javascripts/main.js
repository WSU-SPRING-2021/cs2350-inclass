// Required by Webpack - do not touch
require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

import 'bootstrap'

// JavaScript
import { addGuest } from './guestbook'
import { playTicTacToe } from './tic-tac-toe'

if(document.querySelector('#landing')){
  document.getElementById("guestForm").onsubmit = addGuest
}

if(document.querySelector("#tic-tac-toe")){
  playTicTacToe()
}