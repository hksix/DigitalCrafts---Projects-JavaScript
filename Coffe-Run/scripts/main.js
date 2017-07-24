var URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders';
var $form = $('[data-coffee-order="form"]');
var $coffeeOrder =$('[data-role="order"]');
var $emailAddress =$('[data-role="email"]');
var $shotFlavor =$('[data-role="flavor"]');
var $strengthLevel=$('[data-role="strengthLevel"]');
var $coffeeSize = $('input[data-role="size"]');
var $dataKeyNameArr = [ ['coffee', $coffeeOrder], 
                        ['emailAddress' , $emailAddress],
                        ['coffeeSize'   , $coffeeSize],
                        ['shotFlavor'   , $shotFlavor],
                        ['strengthLevel', $strengthLevel]
                        ];
var $dictData= {};
var $dataArr = [];
$form.on('submit', function (event){
    event.preventDefault();
    setItemToLocal($dataKeyNameArr);
    dataDict($dataKeyNameArr);
    // sendDataToServer($dictData);
    localStorage.setItem("order", $dataKeyNameArr);
});


$(document).ready(function () {
    getItemFromLocal($dataKeyNameArr);
    

});

function setItemToLocal(arr){
    for (var i= 0; i<arr.length; i++){
        if (arr[i][0] === 'coffeeSize'){
            localStorage.setItem('coffeeSize', $('input[data-role="size"]:checked').val());
        }else{
            localStorage.setItem(arr[i][0], arr[i][1].val());
        }
    }
}
function getItemFromLocal(arr){
    for (var i= 0; i<arr.length; i++){
        if (arr[i][0] === 'coffeeSize'){
            $('input:radio[data-role="size"]').filter('[value=' + localStorage.getItem('coffeeSize') + ']').prop('checked', true);
        }else{
        arr[i][1].val(localStorage.getItem(arr[i][0]));
        }
    }
}
function dataDict(arr){
    for (var i = 0; i< arr.length; i++){
        $dictData[arr[i][0]] = arr[i][1].val();
    }
}
function arrMaker(arr){
    for (var i= 0; i<arr.length; i++){
        $dataArr.push(arr[i][0], arr[i][1].val());
} return $dataArr;
}

// Ajax, part 2

// Now it is time to add Ajax functionality to CoffeeRun.

// Add two methods for talking to the CoffeeRun Server (located at http://dc-coffeerun.herokuapp.com/api/coffeeorders)
//      getServerData() - This function should make an Ajax call to the server to retrieve the coffee orders.
//          Additionally, it could accept a callback function that is called when the server response comes in.
//      sendDataToServer() - This function should make an Ajax call to the server, sending it coffee order information.
//          Make sure to inspect the server response and check for error messages. (There will be a property named "errors" if there were any.)
// As a bonus, you could cache your data to localStorage (perhaps using the functions you've already written).

// Then, while you are using CoffeeRun, turn off your wifi and see if you are able to fall back to the data stored in localStorage.

function getServerData(){
    $.get(URL, function (data){
        return (data);
    });
}


function sendDataToServer(theData){
    $.post(URL,theData, function (resp){
    return (resp);
    });
}

function createCell(data){
    return $('<tr>',{
        'class': 'order-cell',
        html: Object.keys(data) + Object.values(data)
    });
}
function drawData(data){
    checkboxIt();
    var $div = $('<div>',{
        text: arrMaker(data)
    });
    $('body').append($div);
}

function dataFormater(data){
}

function checkboxIt() {
    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    document.body.appendChild(x);
}
