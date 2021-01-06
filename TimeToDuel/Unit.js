const Card = require("./Card.js");

class Unit extends Card {
    constructor(name, cost, power, res) { // unit attributes
        super(name, cost); // inherited attributes
        this.power = power;
        this.res = res;
    }

    attack(target){
        target.res -= this.power; //reduce target unit res by power
        console.log(target.name + " has been attacked by " +this.name + " for " + this.power + " damage and has " + target.res + " resiliance remaining")
        console.log("****************")
    }

    showStats() {
        console.log("Name: " + this.name,"|", "Power: " + this.power,"|", "Resiliance: " + this.res);
        console.log("****************")
    }
}


module.exports = Unit;