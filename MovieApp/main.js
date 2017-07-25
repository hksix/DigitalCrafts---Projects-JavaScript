var OMDbAPI =  "http://www.omdbapi.com/?apikey=1ca32dee&s=";
var PosterAPI = "http://img.omdbapi.com/?i=tt3896198&h=600&apikey=1ca32dee";
var $form = $('[data-search="form"]');
var $search = $('[data-role="search"]');
var info = [];
var theData;
$form.on('submit', function (event){
    event.preventDefault();
    var x = getInfo();
    x.then( function (data){
        info = (data.Search[0].imdbID);
        getData(info);
        })   
    })

function main(){
    getData();
        }

function getInfo(){
    return $.get(OMDbAPI + $search.val());
    
}
function getData(info){
    var x = $.get("http://www.omdbapi.com/?apikey=1ca32dee&i=" + info);
    x.then(function (data){
        theData = data;
        collaspsibleButton(theData);
        moviePoster(theData);
    });
}


function moviePoster(data){
    var posterSrc = data.Poster;
    imgMaker(posterSrc);
}

function divMaker(){
    var $div = $("<div>", {"class": "moviePoster"});
    $div.click(function( event){
        event.preventDefault;
    });
    
    $('#box').append($div);
}

function imgMaker(imgSrc){
    var $img = $('<img>' ,{"src": imgSrc});
    $img.css({'width': "10%", 'height':'10%','transition': 'height 3s', 'transition-delay':'1s'});
    $img.click(function (){
        $(this).animate({width:"40%"});
        });
    // $img.click(function (){
    //     $(this).animate({width:"10%"});
    //     });
    
    $(".Container").append($img);

}

function collaspsibleButton(data){
    var $divC = $("<div>", {"class": "Container"});
    $divC.css({"display":"flex","flex-direction":"column"});
    var $h2 = $("<h2>", {"title": "movie"});
    $h2.text(data.Title);

    var $buttonInfo = $('<a>',{"class":"btn btn-info", "data-toggle":"collapse"});
    $buttonInfo.attr('href', "#demo"); 
    $buttonInfo.text(data.Released);
    $buttonInfo.css({"display:":"inline-block",'width': "40%", 'height':'40%','float':'right'});

    var $collapseContent = $("<div>", {"id": "demo", "class":"collapse"});
    // $collapseContent.text(dataExtractor(data));
    $collapseContent.css({'white-space':"normal"/*'width': "100%", 'height':'100%'*/});
    var $para =$("<p>");
    $para.text(dataExtractor(data));
    $para.css({});

    $('#box').append($divC);
    $('.Container').append($h2);
    $('.Container').append("<p>Click on the button to toggle between showing and hiding content.</p>");
    $('.Container').append($buttonInfo);
    $('.btn-info').append($collapseContent);
    $('.collapse').append($para);

}


function dataExtractor(data){
    var info;
    var $lineBr = $("<br>");
    var $para =$("<p>");
    var keys = Object.keys(theData);
    var values = Object.values(theData);
    for (i in keys){
        // $para.text((keys[i] +': ' +values[i]) +("\n") +("\n"));
       info +=("\n")+keys[i] +("\n")+': ' +values[i] +("\n");
}return info;
}