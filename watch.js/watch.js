const fs = require('fs');

// function yelp(what){
//     return 'hey that ' +what;
// }

//  the bottom is also creates funciton 
const yelp = (what) => {
    return 'hey that ' +what;
}

// var yelp = (function (what){
//     return 'hey that '+ what;
    
// }).bind(this);
// arrow function is shorthand for .bind(this)


// fs.watch('README.md', function(event){
fs.watch('README.md', (event) => {
    // console.log('ouch');
    console.log(yelp('sup'));
});

// eveytime touch README.md is created 'string' is logged

// arrow functions : optional parens - 
const print = what => {return 'Hey: ' + what;}

fs.watch('README.md', () => {
    print('ouch');
});
// arrow functions: optional curly braces, implicit return - If only returning one thing
const print = what => 'Hey: ' + what;
fs.watch('README.md', () => {
    print('ouch')
});

const isEven = val => (val % 2 == 0);
const evenlyDivBy = (val, div) => (val % div == 0);

[1,2,3,4].filter(isEven);

// make note of this for code organization 
const print = what => (
    'Hey: ' + what
);