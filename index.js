let homeScore = 0
let guestScore = 0
let home = document.getElementById("home")
let guest = document.getElementById("guest")

function one(){
    homeScore= homeScore +1
    home.textContent = homeScore
}

function two(){
    homeScore= homeScore +2
    home.textContent = homeScore
}

function three(){
    homeScore= homeScore +3
    home.textContent = homeScore
}

function addOne(){
    guestScore= guestScore +1
    guest.textContent = guestScore
}

function addTwo(){
    guestScore= guestScore +2
    guest.textContent = guestScore
}

function addThree(){
    guestScore= guestScore +3
    guest.textContent = guestScore
}
