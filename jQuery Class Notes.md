jQuery Notes

What is it used for?
    DOM access/creating/manip
    event handling
    forms
    Ajax (Asynchornous Js and XML)
    Css maniplation 
    animation and special effects But you used use Velocity.js

document.getElementsByTagName('a');
document.querySelector('a');
jQuery is $('a')

DOM selection class name 
$('.nav-items')

$ is a function 
    works just like .querySelectorAll and .querySelector
    always returns a collection of elements that match the selector 

Advice: prefix your variables in js
    var $mainNav = $('[data-ui-role="main-nav"]');
    var $thumbnaikl = $('[data-image-role="trigger"]');

creating/Adding/removing elements
    var $anchor = $('<a></a>');
    short hand is below but can be confusing.
    var $anchor = $('<a>');

    var $anchor = $('<a>',{
        'class': 'nav-item',
        'data-image': 'trigger',
        'text': 'click me!'
    });

appending elelments 
var $image = $('<img>',{
    'src':'images/otter1.jpg',
    'alt':'a pround man'
})
$anchor.append($image);  **** note that this doesnt add to the DOM. You still need to do that step.

$anchor.addClass('active');
$anchor.removeClass('active');
$anchor.toggleClass('active');

handlind events in jQuery
$anchor.on('click',function(event){
    //Do stuff
})

.on() with a filtering selector
var $thumbnailContainer = $('.nav-container')
$thumbnailContainer.on('click", 'a', function(event){    ***** note that click will work if the thumbnailContainer has the parent <a> this is called event delegation. This can also be a class name or direct child '>'
    //do stuff
})

.each()
is the jQuery version of .forEach()
.each(funcion(integer index or i , Element){
    console.log(link.href);
});


.text () is .textContent()

Ajax
"Single page application"

HTTP status code ranges
2xx Sucess
3xx redirection
4xx Client error
5xx Server error

HTTP verbs REST(ful) services
GET - Read  
POST - Create
PUT- Update
DELETE - Delete
PATCH - Update

JSON API and GraphQL

Ajax and jQuery
$.get
var URL = 'http://apiserver.com/whatever
$.get(URL)

$.get(callback)
$.get(URL, function (data){
    console.log(data);
});

function storeData(orders){
    localStorage.setItem('coffeeOrder', JSON.stringify(orders));
}

$.post(data)
var myData = {
    coffeeOrder: 'espresso",
    emial: "my@emial.com'
}
$.post(URL, myData);


Stripe.com is a API database and api.data.GOV 


Promises, Promises

function getData(fn){
    $.get(URL, Function (theData){
        if (theData){
            fn(theData);
        }else{
            $.get(other_URL, functon (theData){

            }
        }
    }
} this is pyramid of doom

Use promises instead! This is apart of the asynchoruons tool kit

represent a future value
standardizes error handling 

        var req = $.getData();
        req
            .then(drawSomeData);
            .then(addEventListeners);
            .then(animateNewData);
        
        function getData(){    this is the wrapper function 
            retrun $.get(URL);
        }
put this under main fuction
    function main(){
        getData()
            .then(drawSomeData);
            .then(addEventListeners);
            .then(animateNewData);
    }

handling errors
function main(){
        getData()
            .catch(retryRequest)  This is for errors
            .then(drawSomeData)
            .then(addEventListeners)
            .then(animateNewData)
            .catch(showError)
    }

 $.ajax
 function deleteData(id){
     return $.ajax( {
         url: URL = '/' +id,
         method: "DELETE"
     });
 }   