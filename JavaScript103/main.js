// Scope:

// function Scope 
// Global Scope 

// Hoisting - Variable declarations. Var moves us 
//     assignments stay in their place 
//     keyword "let" sets variables that wont get hoisted 
//     But good practice is to stick all var declarations on the top of the function  

// Function expressions - below is another way to write functions. However the method below doesnt get hoisted 
//     var sumNumbers = function(arr){
//         var results = 0;
//         for (var = 1; i<arr.length; i++){
//             results = results + arr[i];
//         }
//         resturn results;
//     }

// forEach - no more for loops
// var nums = [1,2,3,4,5]:
// function log(what){
//     console.log(what);
// }
// nums.forEach(log); 

// var nums = [1,2,3,4,5];
// nums.forEach(function (what){
//     console.log(what);
// });

// nums.forEach(function callback(currentValue, index, array){
//     //your iterator
// }[, thisArg]);

// nums.forEach(function (what, i, arr){
//     console.log(i + ": " + what + 'is part of ' + arr);
// });

// >>>>array.map
//     function square(n){
//         return n*n;
//     }

//     var squares = nums.map(square);  .map will transform array to a new array. no more .push to empty array var

// >>>>Filtering Data
// var nums = [1,2,3,4,5,6,-12,-323, 83741, -1];
// var results = [];
// for (var i = ; i< nums.length; i++){
//     if (nums[i] >= 0) {
//         results.push(nums[i]);
//     }
// }
// function isPositive(num){
//     reuturn num > 0;
// }
// var reuslts = nums.filter(isPositive);   filter()	Creates a new array with every element in an array that pass a test

// .filter(has('pets'))

// .sort(by('height'))

// function by(propName){
//     return function (a,b){
//         return a[propName] > b[propName];
//     }
// }

// .map(get('name'))
//     function get(propName){
//         return function (obj){
//             return obj[propName];
//         }
//     }

// .typeOf

// reduce()	Reduce the values of an array to a single value (going left-to-right)
// reduceRight()	Reduce the values of an array to a single value (going right-to-left)

// var nums = [1,2,3,4,5,6,7];
// function sum(a,b){
//     return a+b;
// }
// var sums = nums.reduce(sum, 0);

// JavaScript 103 Function Exercises

// Positive Numbers


var nums = [1,2,3,4,5,6,7,-1,-2,-3,-4,-5,-123];

function isPositive(num){
    return num >= 0; 
}


function positiveNumPrinter(nums){
    var results = nums.filter(isPositive);
    console.log(results);
}


// Even Numbers
function isEven(num){
    return num % 2 ==0;
}

function evenNumPrinter(nums){
    var results = nums.filter(isEven);
    console.log(results);
}

// Square the Numbers
function squareNum(num){
    return num * num
}

function squareNumPrinter(nums){
    var results = nums.map(squareNum);
    console.log(results);
}

// Cities 1 and 2 
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function coolerCities(cities){
    return cities.temperature < 70;
}
function getName(obj){
    return obj.name;
}

function coolerCitiesPrinter(fn){
    console.log (cities.filter(fn).map(getName));
    // console.log(results);
}

// Good job
var people = [
  'Dom',
  'Lyn',
  'Kirk',
  'Autumn',
  'Trista',
  'Jesslyn',
  'Kevin',
  'John',
  'Eli',
  'Juan',
  'Robert',
  'Keyur',
  'Jason',
  'Che',
  'Ben'
];

function goodJobName(obj){
    return "goodjob " + obj + "\n";
}
function goodJobNamePrinter(fn){
    var results = people.map(fn);
    console.log (results);
}

// 3 times

function fun(){
    console.log("Hello World");
}

function call3Times(fn){
    fn();
    fn();
    fn();
}

//n times

function callNTimes(num, fn){
    return range(num).forEach(fn);
}

function range(num){
    var arr = []
    for (var i = 0; i<num; i++){
        arr.push(i);
    }
    return arr;
}


// product
function product(set){
    return set.reduce(multipy, 1);

}

function multipy(a,b){
    return a * b;
}

//total price

var products = [
  { name: 'Basketball', price: 12.00 },
  { name: 'Tennis Racquet', price: 66.00 },
  { name: 'Tennis Balls', price: 9.00 },
  { name: 'Tennis Balls', price: 9.00 }
];

function addition(a,b){
    return a+b;
}
function getPrice(obj){
    return obj.price;
}

function total(products){
    var priceArray = products.map(getPrice);
    return priceArray.reduce(addition,1);
}

//Str Join
function strJoin (word, seperator){
    var theWord = word.map(addSeperator).reduce(reducer, "");
    return theWord;


    function addSeperator(item){
    return item + seperator ;
    }
}
function reducer(a,b){
    return a+b;
}

//Acronym
function acronym (words){
    var acronymArray = words.map(firstLetter).reduce(reducer,"");
    console.log(acronymArray);
} 

function firstLetter(obj){
    return obj[0].toUpperCase();
}

