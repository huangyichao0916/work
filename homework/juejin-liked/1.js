const wrapper = document.querySelector('.wrapper');

let createElementByString = function (DOMString) {
    let ele = document.createElement('div');
    ele.innerHTML = DOMString;
    return ele;
}

class likeButton {
    constructor() {
        this.state = {
            likedNum: 0,
            isLiked: false
        }
    }
    render() {
        this.ele = createElementByString(`
        <button class="like-btn">
            <span class="like-text iconfont">&#xe696;${this.state.likedNum}</span>
        </button>
        `);
        this.ele.addEventListener('click', this.changeLikedState.bind(this), false);
        return this.ele;
    }
    changeLikedState() {
        if (this.state.isLiked) {
            this.cancel();
        }
        else {
            this.liked();
        }
        // this.state.isLiked = !this.state.isLiked;
    }
    liked() {
        this.state.likedNum++;
        this.ele.querySelector('.like-text').innerHTML = `&#xe696;${this.state.likedNum}`;
    }
    // cancel() {
    //     this.statelikedNum--;
    //     this.ele.querySelector('.like-text').innerHTML = `&#xe696;${this.state.likedNum}`;
    // }
}

let lB = new likeButton();
wrapper.appendChild(lB.render());