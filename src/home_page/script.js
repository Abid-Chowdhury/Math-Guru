function redirect(difficulty) {
    location.href = '../game_page/game.html?' + difficulty
}

function redirect_To_Home_Page() {
    window.location.href = "index.html"
}

var image = document.getElementById('github-image')

function hover() {
    image.setAttribute('src', "../images/github_active.svg")
}

function unhover() {
  image.setAttribute('src', "../images/github.svg")
}