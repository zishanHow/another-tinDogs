class Feed {
    constructor(data){
        Object.assign(this, data)
    }

    setMatchStatus(bool){
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getFeedHtml(){
        const { name, avatar, age, bio } = this
        return `
            <img class="feed-img" src="${avatar}" alt="">
            <div class="about-dog">
                <p class="date">${name}, ${age}</p>
                <p class="caption">${bio}</p>
            </div>
        `
    }
    getEndMessageHtml(){
        return `
            <div class="end-message">
                <p>Hey you reach the end of dogs in your area</p>
                <p>See how many Dog you like</p>
                <img src="images/logo.png" alt="">
            </div>
        `
    }
}

export default Feed
