import dogs from "../jsFile/data.js";
import Feed from "../jsFile/feed.js"

let currentDogIndex = 0
// couldn't abale to add likeCount feature.
let likeCount = []
let isWaiting = false
// setting new instance of dogs.
let currentDog = new Feed(dogs[currentDogIndex])

const crossEl = document.getElementById("cross")
const heartEl = document.getElementById("heart")

heartEl.addEventListener('click', yes)
crossEl.addEventListener('click', no)

render()

// render the main function
function render(e) {
    let feedEl = document.getElementById("feed")

    if (currentDogIndex < dogs.length) {
        feedEl.innerHTML = currentDog.getFeedHtml()
    } else if (currentDogIndex = dogs.length) {
        feedEl.innerHTML = currentDog.getEndMessageHtml(likeCount.length)
    } else {
        location.reload()
    }

    document.getElementById("like").style.display = "none"
    document.getElementById("nope").style.display = "none"
}

// give new dogs form the dogs array. each time
function getNewDog() {
    currentDogIndex += 1
    currentDog = new Feed(dogs[currentDogIndex])
    render()
}

function yes() {
    currentDog.setMatchStatus(true)

    if (currentDogIndex < dogs.length) {
        document.getElementById("like").style.display = "block"
    }
    if (!isWaiting) {
        isWaiting = true
        setTimeout(() => {
            isWaiting = false
            getNewDog()
        }, 1000)
    }
}

function no() {
    currentDog.setMatchStatus(false)

    if (currentDogIndex < dogs.length) {
        document.getElementById("nope").style.display = "block"
    }
    if (!isWaiting) {
        isWaiting = true
        setTimeout(() => {
            isWaiting = false
            getNewDog()
        }, 1000)
    }
}