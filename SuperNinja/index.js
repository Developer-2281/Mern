const Ninja = require("./Ninja.js");

const Sensei = require("./Sensei.js");

var SnakeEyes = new Ninja("SnakeEyes", 100);

var Splinter = new Sensei("Splinter");

SnakeEyes.showStats();
console.log("****************")
Splinter.speakWisdom();
console.log("****************")
Splinter.drinkSake();