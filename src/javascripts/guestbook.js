let guests = []

export function addGuest(e){
  e.preventDefault()
  let guest = {
    fname: document.getElementById('fn').value,
    lname: document.getElementById('ln').value
  }

  if(guest.fname.trim() && guest.lname.trim()){
    guests.push(guest)
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