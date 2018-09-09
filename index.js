var readlineSync = require('readline-sync');

var name = readlineSync.question('What is your name? ');

var patron = 'Sun';

console.log(name + ', your planetary patron is ' + patron);