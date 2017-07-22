var $form = $('[data-coffee-order="form"]');
var $coffeeOrder =$('[data-role="order"]');
var $emailAddress =$('[data-role="email"]');
// var $coffeeSize =$('input[data-role="size"]');
var $shotFlavor =$('[data-role="flavor"]');
var $strengthLevel=$('[data-role="strengthLevel"]');

$form.on('submit', function (event){
    event.preventDefault();
    localStorage.setItem('coffeeOrder', $coffeeOrder.val());
    localStorage.setItem('emailAddress', $emailAddress.val());
    localStorage.setItem('coffeeSize', $('input[data-role="size"]:checked').val());
    localStorage.setItem('shotFlavor', $shotFlavor.val());
    localStorage.setItem('strengthLevel', $strengthLevel.val());
});


$(document).ready(function () {
    console.log("something");
    $coffeeOrder.val(localStorage.getItem('coffeeOrder'));
    $emailAddress.val(localStorage.getItem('emailAddress'));
    $('input:radio[data-role="size"]').filter('[value=' + localStorage.getItem('coffeeSize') + ']').prop('checked', true);
    $shotFlavor.val(localStorage.getItem('shotFlavor'));
    $strengthLevel.val(localStorage.getItem('strengthLevel'));
});

// function getSize(){
//    return $coffeeSize = $('input[data-role="size"]:checked').val();

// }