class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        return Math.round((this.minValue + this.maxValue)/2) 
    }

    lower() {
        this.maxValue = Math.round((this.maxValue + this.minValue)/2)
    }

    greater() {
        this.minValue = Math.round((this.maxValue + this.minValue)/2)
    }
}

module.exports = GuessingGame;
