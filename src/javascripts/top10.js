import { movies } from './movies'

export function showTop10Movies(){
  for(let m of movies){
    let cardHTML = `
      <div class="card">
        <img src="${m.poster}" class="card-img-top" alt="${m.title}">
        <div class="card-body">
          <h5 class="card-title">${m.title}</h5>
          <p class="card-text">${m.plot}</p>
          <a href="#" class="btn btn-primary">See more...</a>
        </div>
      </div>
    `

    let cardColumn = document.createElement('div')
    cardColumn.classList.add('col')
    cardColumn.innerHTML = cardHTML
    document.querySelector(".movies").appendChild(cardColumn)
  }
}