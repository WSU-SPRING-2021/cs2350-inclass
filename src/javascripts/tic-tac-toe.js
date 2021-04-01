export function playTicTacToe(){
  let count = 0
  document.querySelectorAll('td').forEach( el => {
    el.onmouseup = function(e) {
      if(count % 2 == 0){
        e.target.innerHTML = "<h2>X</h2>"
      } else {
        e.target.innerHTML = "<h2>O</h2>"
      }

      count++
    }
  })
}