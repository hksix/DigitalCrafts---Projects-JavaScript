var OMDbAPI =  "http://www.omdbapi.com/?apikey=1ca32dee&s=";
var PosterAPI = "http://img.omdbapi.com/?i=tt3896198&h=600&apikey=1ca32dee";
var $form = $('[data-search="form"]');
var $search = $('[data-role="search"]');
var info = [];
$form.on('submit', function (event){
    event.preventDefault();
    var x = getInfo();
    x.then( function (data){
        info = (data.Search[0].imdbID);
            // "http://www.omdbapi.com/?apikey=1ca32dee&t=" +(data.Search[0].imdbID) ;
        })

    })



function getInfo(){
    return $.get(OMDbAPI + $search.val());
    

}
function getData(){
    var x = $.get("http://www.omdbapi.com/?apikey=1ca32dee&i=" + info);
    x.then(function (data){
        console.log(data);
    })
}
