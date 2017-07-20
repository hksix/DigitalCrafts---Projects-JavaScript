var $MAIN_5_BALLS = [$('[data-ball-num="5"]')  , 69];
var $LAST_2_BALLS = [$('[data-ball-num="2"]'), 20];

function randNumGen(ballset){
    var $firstFive = ballset[0];
    var randoNums = shuffler(ballset[1]);
    var j = 0;
    $firstFive.each(function (i,num){
        num.textContent = randoNums[j];
        j++;
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
    var $btn = $("button");
    $btn.on('click', function (){
        event.preventDefault();
        $('[data-ball-num="2"]').addClass('red');
        randNumGen($MAIN_5_BALLS);
        randNumGen($LAST_2_BALLS);
    });

    }
buttonPress();