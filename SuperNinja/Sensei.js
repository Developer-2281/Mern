const Ninja = require("./Ninja.js");

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.name = name;
        this.health = 200;
        this.strength = 10;
        this.speed = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }

    drinkSake() {
        super.drinkSake();
    }

}

module.exports = Sensei;