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
        makeMovieElement(theData);
        moviePoster(theData);
    });
}

function makeMovieElement() {
    var movieElement = document.createElement('div');
    var $theDivs = $('div'); 
    var keys = Object.keys(theData);
    var values = Object.values(theData);
    for (i in keys){
        $('p').append(keys[i] +':' +values[i] + '<br>');
    }
    var poster = theData.Poster;

    
    // document.body.appendChild(movieElement);
}

function moviePoster(data){
    var $makeIMG = $('<img>');
    var posterImg = data.Poster;
    return $('img').attr('src',posterImg);
    $('body').append($makeIMG);
}

