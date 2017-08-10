// Node JS notes
// Basics
//     require
//         var fs = require ('fs'); grab me a thing called fs. Finds module called fs

//     writing a module
        var cat = {
            name: 'Chickoo',
            speak: function() {
                return 'meow'
            }
        };
    module.exports = cat;

// in the terminal and CD into the folder. Type 'node' then var aCat = require('./nodeexample');
// aCat.speak()
// let
// let aCat = require('./cat'); let is the same as var but doesnt hoist. use LET for inside for loops and if's

// const - a third way to declare vars
// var aCat = require('/.cat');
// let aCat = require('/.cat');
// const aCat = require('/.cat'); identifiers that i never want to redefine.
// > const foo = function (){return 'hi';}
//   undefined
//   > foo()
//   'hi'
//   > foo = 'new'
//   TypeError: Assignment to constant variable
    // no rebinding but you can mutate .push
// 

// input/output
const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('filename: ', function(filename){
    rl.close();
    fs.readFile(filename, function(err,buffer){ //buffer is binary data in a file. has to be changed to a string(or other primitive)
        if(err){
            console.log(err.message);
            return;
        }// above is just a way to catch a error
        let content = buffer.toString(); // change binary data to string
        let upcased = content.toUpperCase();
        console.log(upcased);
    });
});

//error first callback pattern
    // if (err){ console.log(err.mesage); return; }
    // Node APIs receive the error arg first!****** get in the habbit on doing this

// streams
    // 
//I/O:reading 

// I/Owriting
