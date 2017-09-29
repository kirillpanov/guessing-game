class GuessingGame {
    constructor(number) {
        this.range = [];
        this.number = number;
    }

    setRange(min, max) {
        let numberOfElementsToDelete;
        for (let i = min; i <= max; i++) {
            this.range.push(i);
        };
    };

    guess() {
        let sumOfArr = this.range.reduce(function(a, b) {
            return a + b;
        });
        return Math.round (sumOfArr / this.range.length);
    }
    
    lower() {
        let breakPoint,
            numberOfElementsToDelete;
        breakPoint = Math.round ( (this.range.length + 1 ) / 2 );
        if (this.range.length % 2) {
            numberOfElementsToDelete = (this.range.length - 1) / 2;
        } else {
            numberOfElementsToDelete = this.range.length / 2;
        };
        this.range.splice( breakPoint , numberOfElementsToDelete  );
    }

    greater() {
        let numberOfElementsToDelete;
        if (this.range.length % 2) {
            numberOfElementsToDelete = (this.range.length - 1) / 2;
        } else {
            numberOfElementsToDelete = this.range.length / 2;
        };
        this.range.splice( 0 , numberOfElementsToDelete  );
    }

}

module.exports = GuessingGame;
