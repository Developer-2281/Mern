const Card = require("./Card.js"); // do not need to import card as it will never be called

const Unit = require("./Unit.js");

const Effect = require("./Effect.js");

var RedBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);

var BlackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

var HardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilance by 3", "res", +3);

var UnhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "res", -3);

var PairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);

RedBeltNinja.showStats();

BlackBeltNinja.showStats();

HardAlgorithm.play(RedBeltNinja);

UnhandledPromiseRejection.play(RedBeltNinja);

PairProgramming.play(RedBeltNinja);

RedBeltNinja.attack(BlackBeltNinja);



