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

