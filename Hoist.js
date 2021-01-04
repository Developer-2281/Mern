// (1)

console.log(hello);                                   
var hello = 'world';

// var hello;
// console.log(hello); // logs undefined
// hello = 'world';


// (2)

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
// var needle
// function test() {
//     var needle;
//     needle = 'magnet';
//     console.log(needle); // magnet is outputted
// }
// test()
// needle = 'haystack';


// (3)

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


// var brendan;
// function print(){ // function is defined but not called
//     var brendan;
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool'
// console.log(brendan); // 'super cool'

// (4)

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food;
// food = 'chicken;
// console.log(food); // 'chicken'
// function eat() {
//     var food;
//     food = 'half-chicken';
//     console.log(food);// 'half-chicken'
//     var food;
//     food = 'gone'
// }
// food = chicken;

// (5)

// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//the code will crash attempting to find the mean function

// (6)

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre;
// console.log(genre); // undefined
// function rewind() {
//     var genre;
//     genre = 'rock';
//     console.log(genre); // will output rock when called
//     genre = 'r&b';
//     console.log('r&b'); // will output r&b when called
// }
// rewind()
// console.log(genre); 'disco'

// (7)

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// var dojo;
// dojo = "san jose";
// console.log(dojo); // san jose
// function learn() {
//     var dojo;
//     dojo = "seattle";
//     console.log(dojo); // when called will output seattle
//     dojo = "burbank";
//     console.log(dojo); // when called will output burbank
// }
// learn();
// dojo = "san jose";
// console.log(dojo); // san jose
