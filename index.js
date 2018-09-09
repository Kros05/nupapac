const readlineSync = require('readline-sync');
const numerology = require('./numerology.js');

const name = readlineSync.question('What is your name? ');

const patron = numerology.calculatePatron(name);

console.log(name + ', your planetary patron is ' + patron);