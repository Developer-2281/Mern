// (1)

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // ['Tesla', 'Mercedes', 'Honda'] // wrong answer, correct is Tesla
console.log(otherRandomCar) // Mercedes


// (2)

// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output
// console.log(name); // will give an error, should say employee.name
// console.log(otherName); // Elon


// (3)

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //12345
console.log(hashedPassword); //12345 // wrong answer, it is undefined. password is not a property of person


// (4)

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
// didnt understand the operation, correct anwsers are false and true


// (5)

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // creates a copy
const { secondKey } = lastTest;  // creates a copy
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // value
console.log(secondKey); // [1,2,3,4,5]
console.log(secondKey[0]); // 1
console.log(willThisWork); // 5