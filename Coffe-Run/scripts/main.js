var $form = $('[data-coffee-order="form"]');
var $coffeeOrder =$('[data-role="order"]');
var $emailAddress =$('[data-role="email"]');
var $coffeeSize =$('[data-role="size"]');
var $shotFlavor =$('[data-role="flavor"]');
var $strengthLevel=$('[data-role="strengthLevel"]');

$form.on('submit', function (event){
    event.preventDefault();
    localStorage.setItem('coffeeOrder', $coffeeOrder.val());
    localStorage.setItem('emailAddress', $emailAddress.val());
    localStorage.setItem('coffeeSize', $coffeeSize.val());
    localStorage.setItem('shotFlavor', $shotFlavor.val());
    localStorage.setItem('strengthLevel', $strengthLevel.val());
});


$form.on('load', function (event) {
    $coffeeOrder.val(localStorage.getItem('coffeeOrder'));
    $emailAddress.val(localStorage.getItem('emialAddress'));
    $coffeeSize.val(localStorage.getItem('coffeeSize'));
    $shotFlavor.val(localStorage.getItem('shotFlavor'));
    $strengthLevel.val(localStorage.getItem('strengthLevel'));
});