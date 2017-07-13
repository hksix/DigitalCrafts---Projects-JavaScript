/* var i = 10;
while (i >0){
    console.log('i: ' + i);
    i--;
}
var i = 10;
while (i >0){
    console.log('i: ' + --i); this will print 9 to 0 while i-- will print 10 to 1 

for loops!
for (var i=0; i < 10; i = i+1){
    console.log('i: ' + i); 
}

var people = ['alex', 'bard', 'peeps'];
    people.push('ellen');
    people.pop(); 
    people.push('ellen');
var goodOlEllen = peeps.pop();
    people.shift() takes the 0 position away
    people.unshift("alex") adds alex back at 0 
    peeps.join(" is friends with ");
    people.join('\n') makes index of array
    people.indexOf('alex') prints 0 
    people.indexOf('nonexistnat') prints -1 
    people.sort() sorts by alphabetical order 

    people.sort(function (a, b) { this sorts in reverse 
        if (b > a) {
            return 1;
        } else if (b == a) {
            return 0;
        }else {
            return -1;
        });
dictionaries!
var contact1 = {
    name: "tim",
    job: 'spoiler',
    face: 'beardman'
};
contact1['face']; gets beardman
contact1['face'] = 'baby' changes beardman to baby
contact1['lunch'] = 'sandwhcich'; addes a new key and value
contact1.face same as contact1['face']
delete 
nesting array in array!
contact1.coffee = {strength: "strong"
color: 'black'}



loop through object
var keys = Object.keys(contact1)
for(var i = 0; i <keys.length; i++){
    console.log(contact1[keys[i]]);
}
this creates an error message
throw new Error("ya dun messed up")
*/

console.log("hello");
// JavaScript102 exercises

// Print Numbers

function printNumbers(start, end){
    while (Number(start)<= Number(end)){
        console.log(start);
        ++start;
  }
}
function printNumbersFor(start,end){
    for (i = Number(start); i<= Number(end); i++) {
        console.log(i);
    }
}

// Print a Square
function printSquare(number){
    var totalNumber=Number(number);
    var i = 0;
    var star= '*';
    while (i <= totalNumber -1){
        console.log(star.repeat(totalNumber ));
        i = i + 1;
    }
    }

// Print a box
function printBox(width, height){
    nWidth = Number(width);
    nHeight = Number(height);
    var i = 0;
    var star = '*';
    var space = " ";
    console.log(star.repeat(width));
    while (i<=height){
        console.log(star + space.repeat(width-2) + star);
        i = i +2;
    }
    console.log(star.repeat(width));
}
// Print a Banner
function printBanner(word){
    lengthOfWord = word.length;
    console.log("*".repeat(lengthOfWord+4));
    console.log("*" +" "+ word+ " "+ "*");
    console.log("*".repeat(lengthOfWord+4));
}

// Factor a Number
function factorsOfNum(num){
    var i = 0;
    var factorList = [];
    while (i< num){
        if (num % i == 0){
            factorList.push(i);
            i++;
        }else{
            i++;
        }
    }
    console.log(factorList);
}

// Ceaser Cipher 
function cipher(word, offset){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    // var alphabetSliced = alphabet.slice(0,offset);
    // var alphaOffset = alphabet + alphabetSliced;
    // var alphabetOffset = alphaOffset.slice(offset);
    var decodedMessage= [];
    word = word.split('');
    for(var i = 0; i<word.length; i++){
        index = alphabet.indexOf(word[i]);
        decodedMessage[i] = alphabet[index +offset];
    }
    decodedMessage= decodedMessage.join('');
    console.log(decodedMessage);
}

// Leetspeak
function leetSpeak(word){
    var leet= {
        a : '4',
        e : '3',
        g : '6',
        i : '1',
        o : '0',
        s : '5',
        t : '7'
    }
    word = word.split('');
    var leetWord ='';   
    for (var i = 0; i<word.length; i++){
        for (var j = 0; j<Object.keys(leet).length-1; j++){
            if (word[i] in leet){
                leetWord = leetWord + leet[word[i]];
                break;
            } else {
                leetWord = leetWord + word[i];
                break;
            }
        }
    }
    console.log(leetWord);
}
