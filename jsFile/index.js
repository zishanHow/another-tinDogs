import dogs from "../jsFile/data.js";
import Feed from "../jsFile/feed.js"

let currentDogIndex = 0
// setting new instance of dogs.
let currentDog = new Feed(dogs[currentDogIndex])

const crossEl = document.getElementById("cross")
const heartEl = document.getElementById("heart")


heartEl.addEventListener('click', yes)
crossEl.addEventListener('click', no)

render()

// render the main function
function render() {
    let feedEl = document.getElementById("feed")

    if (currentDogIndex < dogs.length) {
        feedEl.innerHTML = currentDog.getFeedHtml()
    } else {
        feedEl.innerHTML = currentDog.getEndMessageHtml()
    }

    setTimeout(()=>{
        document.getElementById("like").style.display = "none";
        document.getElementById("nope").style.display = "none"
    }, 100)
}


// give new dogs form the dogs array. each time
function getNewDog() {
    currentDogIndex += 1
    currentDog = new Feed(dogs[currentDogIndex])
    render()
}

function yes() {
    currentDog.setMatchStatus(true)
    document.getElementById("like").style.display = "block";

    setTimeout(()=>{
        getNewDog()
    }, 1000)
}

function no() {
    currentDog.setMatchStatus(false)
    document.getElementById("nope").style.display = "block"
    
    setTimeout(()=>{
        getNewDog()
    }, 1000)

}

