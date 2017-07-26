var OMDbAPI =  "http://www.omdbapi.com/?apikey=1ca32dee&s=";
var PosterAPI = "http://img.omdbapi.com/?i=tt3896198&h=600&apikey=1ca32dee";
var $form = $('[data-search="form"]');
var $search = $('[data-role="search"]');
var info = [];
var theData;

$(document).on('submit', function (event){
    event.preventDefault();
    var x = getInfo();
    x.then( function (data){
        info = (data.Search[0].imdbID);
        getData(info);
        })   
    })


function getInfo(){
    return $.get(OMDbAPI + $search.val());
    
}
function getData(info){
    var x = $.get("http://www.omdbapi.com/?apikey=1ca32dee&i=" + info);
    x.then(function (data){
        theData = data;
        divMaker(theData);
        moviePoster(theData);
    });
}


function moviePoster(data){
    var posterSrc = data.Poster;
    return posterSrc;

}


function divMaker(data){

    var movieTitle = data.Title;
    movieTitle = movieTitle.replace(/\s+/g, '');
    var divId = "#"+movieTitle;
    divId = divId.replace(/\s+/g, '');
    var mainDataRole = "[data-role-main='"+movieTitle+"']"
    var $div = $("<div>", {"class": "Container", "data-role-main":movieTitle});
    $div.css({"display":"flex","flex-direction":"column","position":'relative'});
    $('body').append($div);
    movieInfo(data,divId,movieTitle);
    imgMaker(moviePoster(data),mainDataRole);
}

function imgMaker(imgSrc,id){
    var $img = $('<img>' ,{"src": imgSrc});
    $img.css({'width': "10%", 'height':'10%','transition': 'height 3s', 'transition-delay':'1s'});
    $img.click(function (){
        $(this).animate({width:"40%"});
        });
    $(id).append($img);
}

function movieInfo(data,name,movieTitle){
    var $h2 = $("<h2>", {"title": "movie"});
    $h2.text(data.Title);

    var $buttonInfo = $('<a>',{"class":"btn btn-info","data-role-button":movieTitle, "data-toggle":"collapse"});
    $buttonInfo.attr('href', name); 
    $buttonInfo.text(data.Released);
    $buttonInfo.css({"display:":"inline-block",'width': "40%", 'height':'40%','float':'right'});

    var $collapseContent = $("<div>", {"id": movieTitle, "class":"collapse","data-role-collapse": movieTitle});
    $collapseContent.css({'white-space':"normal"});
    var $para =$("<p>");
    $para.text(dataExtractor(data));

    $("[data-role-main='"+movieTitle+"']").append($h2);
    $("[data-role-main='"+movieTitle+"']").append("<p>Click on the button to toggle between showing and hiding content.</p>");
    $("[data-role-main='"+movieTitle+"']").append($buttonInfo);
    $("[data-role-button='"+movieTitle+"']").append($collapseContent);
    $("[data-role-collapse='"+movieTitle+"']").append($para);
}


function dataExtractor(data){
    var info;
    var keys = Object.keys(theData);
    var values = Object.values(theData);
    for (i in keys){
       info +=("\n")+keys[i] +("\n")+': ' +values[i] +("\n");
        }
    return info;
}