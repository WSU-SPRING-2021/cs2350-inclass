let guests = []

export function addGuest(e){
  e.preventDefault()
  let guest = {
    fname: document.getElementById('fn').value,
    lname: document.getElementById('ln').value
  }

  if(guest.fname.trim() && guest.lname.trim()){
    if(localStorage.guests === undefined){
      guests.push(guest)
    } else {
      guests = JSON.parse(localStorage.getItem('guests'))
      guests.push(guest)
    }

    localStorage.setItem('guests', JSON.stringify(guests))
    
    let tr = document.createElement('tr')
    tr.innerHTML = `
      <td>${guest.fname}</td>
      <td>${guest.lname}</td>
    `
    document.querySelector('tbody').appendChild(tr)

    document.getElementById('fn').value = ''
    document.getElementById('ln').value = ''
  }

}

export function loadGuests(){
  if(localStorage.guests !== undefined){
    for(let g of JSON.parse(localStorage.guests)){
      let tr = document.createElement('tr')
      tr.innerHTML = `
        <td>${g.fname}</td>
        <td>${g.lname}</td>
      `
      document.querySelector('tbody').appendChild(tr)
    }
  }
}