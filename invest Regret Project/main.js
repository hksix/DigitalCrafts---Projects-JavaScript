// api for alpha Vantage 5X4II9G2P5S3BJ05
var apiKey = "5X4II9G2P5S3BJ05";
var URL = "https://www.alphavantage.co/query?"
var $form = $('[data-stock-order="form"]');
var $tickerName = $('[data-role="ticker-name"]');
var $timeInterval = $('[data-role="time-interval"]');
var $dataKeyNameArr = [ ['tickerName', $tickerName], 
                        ['timeInterval' , $timeInterval],
                        ];



// example url https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=5X4II9G2P5S3BJ05
var timeIntervals = ['function=TIME_SERIES_INTRADAY', 'function=TIME_SERIES_DAILY', 'function=TIME_SERIES_WEEKLY', 'function=TIME_SERIES_MONTHLY'];
var ticker = "symbol=MSFT";
var dataReturnType = 'datatype=json';

function getData(){
    var x = $.get("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=60min&apikey=5X4II9G2P5S3BJ05");
    x.then( function (data){
        console.log(data);
        })   
}

$form.on('submit', function (event){
    event.preventDefault();
    setItemToLocal($dataKeyNameArr);
    // dataDict($dataKeyNameArr);
    // // sendDataToServer($dictData);
    // localStorage.setItem("order", $dataKeyNameArr);
    // arrMaker($dataKeyNameArr);
    // appendOrderToHTML($dictData);
    // getOrdersFromAPI();
});

function setItemToLocal(arr){
    for (var i= 0; i<arr.length; i++){
            localStorage.setItem(arr[i][0], arr[i][1].val());
        
    }
}