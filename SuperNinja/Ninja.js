class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.strength = 3;
        this.speed = 3;
    }

    drinkSake() {
        this.health += 10;
        console.log("You regained 10 health");
        console.log("Health is now " + this.health);
    }

    sayName() {
        console.log("The ninja's name is: " + this.name);
    }

    showStats() {
        console.log("Name: " + this.name,"|", "Health: " + this.health,"|", "Strength: " + this.strength,"|", "Speed: " + this.speed);
    }
}

module.exports = Ninja;