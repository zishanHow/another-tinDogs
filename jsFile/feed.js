class Feed {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = true
    }

    getFeedHtml() {
        const { name, avatar, age, bio } = this
        return `
            <img class="feed-img" src="${avatar}" alt="">
            <div class="about-dog">
                <p class="date">${name}, ${age}</p>
                <p class="caption">${bio}</p>
            </div>
        `
    }
    getEndMessageHtml(count) {
        return `
            <div class="end-message">
                <p>Hey you reach the end of dogs in your <span>Area</span>😥</p>
                <p>You have ❤️ ( ${count} ), Dogs!</p>
                <a href="index.html"><img src="images/logo.png" alt=""></a>
            </div>
        `
    }
}

export default Feed
