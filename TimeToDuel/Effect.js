const Card = require("./Card.js"); // importing parent class
const Unit = require("./Unit.js"); // importing effected class

class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost);
        this.text = text;
        this.stat = stat; // this is the stat effected and could better be called stat_effected
        this.mag = mag;
    }

    play(target) {
        if(target instanceof Unit) {
            console.log(this.text);
            target[this.stat] += this.mag; // Use [] for dot notation variables on objects
            console.log(target.name +"'s " + this.stat, "has been altered", + this.mag, "by " + this.name, "and is now " + target[this.stat]);
            console.log("****************")

            //console.log(target); //returns target object

            // this is the code you would need for every attribute if you did not use [] above.

            // if(this.stat == "power") {
            //     target.power += this.mag;
            // }

            // if(this.stat == "res") {
            //     target.res += this.mag;
            // }
        }
        else {
            throw new Error( "Target must be a unit!" );
        }
    }
}


module.exports = Effect;

