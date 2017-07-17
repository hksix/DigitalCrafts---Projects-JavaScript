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
function isNegative(num){
    return num < 0;
}


function positiveNumPrinter(nums){
    var results = nums.filter(isPositive);
    console.log(results);
    // return nums.filter(function (n){
    //     return n >0;
    // })
}
function makeFilter(fn){
    return function (numArray){
        return numArray.filter(fn);
    }
}

var positive = makeFilter(isPositive);
var negative = makeFilter(isNegative);
var evens = makeFilter(isEven); 
// i would call this but saying console.log(even(nums));
// console.log(positive(nums));


// Even Numbers
function isEven(num){
    return num % 2 === 0;
}

function evenNumPrinter(nums){
    var results = nums.filter(isEven);
    console.log(results);
}

// Square the Numbers
function squareNum(num){
    return num * num;
}

function squareNumPrinter(nums){
    var results = nums.map(squareNum);
    console.log(results);
}
// a better way to do this is below......
function makeSquares(numArray){
    return numArray.map(function (n){
        return n*n;
    });
}

// fancier way to do this
function makeNumberTransformer(fn){
    return function (numArray){
        return numArray.map(fn);
    }
}
var fancierSquare = makeNumberTransformer(squareNum);
// console.log(fancierSquare(nums));

// Cities 1 and 2 
var cities = [
  { name: 'Los Angeles', temperature: 60.0},
  { name: 'Atlanta', temperature: 52.0 },
  { name: 'Detroit', temperature: 48.0 },
  { name: 'New York', temperature: 80.0 }
];

function coolerCities(citiesArray){
    return citiesArray.temperature < 70;
}
function getName(obj){
    return obj.name;
}

function coolerCitiesPrinter(fn){
    console.log (cities.filter(fn).map(getName));
    // console.log(results);
}

// or
function coolCities(cityArray){
    return cityArray.filter(function(city){
        return city.temperature < 70;
    })
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
// or...
function congragulatePeep(peepArray){
    return peepArray.map(function (peep){
        return "Good Job, " + peep + "!" + "\n";
    });
}

// 3 times

function hello(){
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
    // for (var i = 0; i <num; i++){ 
        // fun();
    // }
}

function range(num){
    var arr = []
    for (var i = 0; i<num; i++){
        arr.push(i);
    }
    return arr;
}

// or

// product
function product(set){
    return set.reduce(multipy);

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
    return "$" + priceArray.reduce(addition);
}

// or
function totalFancy(productArray){
    return productArray.reduce(function (tally, current){
        return tally + current['price'];
    }, 0);
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
// or
function strJoinFancy(strs, sep){
    return strs.reduce(function (tally,str){
        return tally + sep +str;
    });
}
//Acronym
function acronym (words){
    var acronymArray = words.map(firstLetter).reduce(reducer,"");
    console.log(acronymArray);
} 

function firstLetter(obj){
    return obj[0].toUpperCase();
}

// Str Multiply
function strMultiply(word, num){
    var arr = []
    for (var i = 0; i<num; i++){
    arr.push(word);
        }
    return arr.reduce(reducer, '');
}

// Generate a Box
function box(width,height){
    var box = ""
    var colmn = ''
    for(var i = 0; i< width; i++){
        box = box + '*';
        }

    return box;
    return colmn;

    }

// sort an Array
function sorter(myArr){
    return myArr.sort();
}

// sort an array 2
function sortByLength(myArr){
    return myArr.sort(function (a,b){
        return a-b
    });
}
function lengthOfWord(obj){
    return word.length;
}    

// Object as Dictionary Exercises
// Exercise 1
var phonebookDict = {
  Alice: '703-493-1834',
  Bob: '857-384-1234',
  Elizabeth: '484-584-2923'
}

// Write code to do the following:

// Print Elizabeth's phone number.
function printNum(name){
    console.log(phonebookDict[name]);
}
// Add a entry to the dictionary: Kareem's number is 938-489-1234.
function addToPhoneBook(name, num){
    phonebookDict[name] = num;
    console.log (phonebookDict);
}
// Delete Alice's phone entry.
function delPhoneNum(name){
    phonebookDict[name] = undefined;
    console.log (phonebookDict);

}
// Change Bob's phone number to '968-345-2345'.
function changePhoneNum(name,num){
    phonebookDict[name] = num;
    console.log(phonebookDict);
}
// Given this code var personName = 'Elizabeth';, use the variable personName to access the dictionary entry.
function findPersonInfo(name){
        console.log (name + ":" + phonebookDict[name]);
    }

// Use a for...in loop to print all the phone entries.
function printAll(){
 for (var i in phonebookDict){
     console.log(i + ":" + phonebookDict[i]);
 }
}

// Letter Histogram
function letterHistogram(word) {
    let obj = {}

    let wordToArr = word.trim().split('')
    wordToArr.forEach(x => {
        if (obj[x]) {
          let currentTally = obj[x]
          obj[x] = currentTally += 1
        } else {
          let count = 1
          obj[x] = count
        }
    })
    return obj
}

var days = Object.keys(stocks);

// days.forEach(function (day) {
//   console.log(stocks[day]);
// });

var dataz = days.map(function (day) {
  return stocks[day];
});

function obtainData(time){
    return dataz.map(function(day){
        return day[time];
    });
}
function Total(dataz,time){
    return dataz.reduce(function (tally, current){
        return (Number(tally) + Number(current[time]));
    },0);
}

function getAverage(arr){
    return arr.reduce(function(a,b){
        return a+b / dataz.length;
    },0);
}
function highestVal(time){
    var data = obtainData(time);
    var max =  data.sort(function (a,b){
        return b-a});
    return max[0];

}

function lowestVal(time){
    var data = obtainData(time);
    var min =  data.sort(function (a,b){
        return a-b});
    return min[0];

}

function dateOpenClose(){
    for (var k in stocks)
        console.log ("Date: " + k + " " +"Open: " + stocks[k]["1. open"] + " " + "Close: " +stocks[k]['4. close']);
        
    }