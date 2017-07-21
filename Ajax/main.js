// Ajax, part 1
// It's time to get your feet wet with Ajax!

// For some first steps:

// On the console, call $.get and pass it two arguments:
// the URL http://dc-coffeerun.herokuapp.com/api/coffeeorders
// a function that is ready to receive the data (and prints it with console.log)
// On the console, call $.post and pass it three arguments:
// the URL http://dc-coffeerun.herokuapp.com/api/coffeeorders
// an object with two keys:
// coffee
// emailAddress
// a function that is ready to receive the data (and prints it with console.log)
// Then, call $.get again and confirm that your coffee order appears in the data that is returned.



var URL = 'http://dc-coffeerun.herokuapp.com/api/coffeeorders';
var myData = {
    coffee: 'black',
    emailAddress: 'mh.haseeb@gmail.com'
}
$.get(URL, function (data){
    console.log(data);
});

function postIT(URL, theData){
    $.post(URL,theData, function (resp){
    console.log(resp);
    });

}

function getIt(URL){
    $.get(URL, function (data){
    console.log(data);
});
}