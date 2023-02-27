class GuessingGame {
    constructor() {
        this.center ;
        this.left  ;
        this.right ;
    }


    setRange(min, max) {
this.left = min;
this.right = max
    }

    guess() {
return this.center = Math.round((this.left+this.right)/2);
    }

    lower() {
    return this.right = this.center
    }

    greater() {
        return this.left = this.center
    }
}

module.exports = GuessingGame;
