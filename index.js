let homePoints = 0;
let guestPoints = 0;

let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

// home-team

function addhomethree() {
    homePoints += 3
    homeScore.textContent = homePoints
    console.log(homeScore)
}
function addhomefive() {
    homePoints += 5
    homeScore.textContent = homePoints
}
function addhomeseven() {
    homePoints += 7
    homeScore.textContent = homePoints
}

//guest-team

function addguestthree() {
    guestPoints += 3
    guestScore.textContent = guestPoints
}

function addguestfive() {
    guestPoints += 5
    guestScore.textContent = guestPoints
}    

function addguestseven() {
    guestPoints += 7
    guestScore.textContent = guestPoints
}