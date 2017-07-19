var MAIN_5_BALLS = ['[data-ball-num="5"]', 69];
var LAST_2_BALLS = ['[data-ball-num="2"]', 20];

function randNumGen(ballset){
    var firstFive = document.querySelectorAll(ballset[0]);
    var randoNums = shuffler(ballset[1]);
    var i = 0;
    firstFive.forEach(function (num){
        num.textContent = randoNums[i];
        i++;
        });
}


function arrMaker(num){
    var arr = Array.from(Array(num + 1).keys());
    arr.shift();
    return arr;
}

function shuffler(arrayLength){
    var arr = arrMaker(arrayLength);
    var i = arr.length;
    var j = 0
    var temp;

    while (i--){
        j = Math.floor(Math.random()* (i+1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;

    }
    return arr;
}
function buttonPress(){
    var btn = document.querySelector("button");
    btn.addEventListener('click', function (){
        randNumGen(MAIN_5_BALLS);
        randNumGen(LAST_2_BALLS);
    });
    // console.log("HAPPEN!");
    }
buttonPress();