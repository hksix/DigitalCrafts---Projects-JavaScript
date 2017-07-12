// console.log('hello World!');
/* This is the "print" command
You can use "" '' ` ` for strings  (use back quote ` for multiline paragraph)
Concatinating +
Variables start with var. if you dont use "var" a global varibale is created, even from inside a function
Can declare blank var for e.g var shoes; calling blank identifiers will print 'undefined'
Shoes = "addidas"; this is called an assignment statement 
Uncaught reference errors is when you call a var that isnt defined . for e.g shoaws  
Var name can start with "$" cant start with number. 
Can't use reserved words
            abstract  	else  	    instanceof  super  
            boolean  	enum  	    int  	    switch  
            break  	    export      interface  	synchronized  
            byte  	    extends     let  	    this  
            case  	    false  	    long  	    throw  
            catch  	    final  	    native  	throws  
            char  	    finally     new  	    transient  
            class  	    float  	    null  	    true  
            const  	    for  	    package  	try  
            continue  	function    private  	typeof  
            debugger  	goto  	    protected  	var  
            default  	if  	    public  	void  
            delete  	implements  return  	volatile  
            do  	    import  	short  	    while  
            double  	in  	    static  	with  
    this will yield Syntax error: Unexpected token
    Unexpected token also is when you miss a ; () {} etc
Use camelCase not snake_case
string length
    no len fucntion
    use .length property
    var hey = "Hello There";
    hey.length; 
Use .MD files 
string indexing
    var hey= "hello there";
    hey[1]
    prints e

    or
    hey.charAt(1);
    prints e

numbers: all numbers are floats (?)
    numbers will automatically round 

converting strings to numbers 
    Number('5');
    the Number() function will needs to be capitalized 
    Number('5') + 5;
    10
NaN  = not a number
    python equivalent int('blah')
    Number('Blahh') prints NaN

converting number to string
    String(45);

Math.abs Math.pow Math.round
    this is the Math module. 

User Input
    var name = prompt('hey. whats your name '):

If statements
    a condition needs to be in ()
    body needs to be wrapped in {}

    if (age >= 21){
        console.log("party");
    } else if (age >=16){
        console.log ('some shit'); 
    } else {
        console.log ('some shit'); 
    }
true and false are not capitalized 

more boolenas
 logical 'and' is && in JS
    true && 0 && false = 0
    true & 5 = 1 USE two && 
 logical or is ||

*/
// var shoes = 'nike';

// // def is called fucntion

// function printThing(){
//     // console.log('a thing');
//     return 'a thing';

// }

// function greet(whom, what){
//     if (!whom){
//         whom = "Carl Vader";
//     }

//     return 'Hello there,' + whom + ' to ' + what;

//     // can put null or undefined to avoid passing in value 
//     // !null returns true 
//     // ! is saying 'not' something 
// }

// JavaScript 101 Exercises
// Hello, you!

function hello(name){
    console.log("Hello " + name);
}


// Hello, you! Part 2

function hello2(name){
    if (!name){
        console.log("Hello World!");
    }
    console.log("Hello " + name);
}

// Madlib
function madLib(name, subject){
    return name +'\'s favorite subject in school is ' + subject + '.'; 
}

//Tip Calculator
function tipAmount(amount, service){
    intAmount = Number(amount);
    if (service == "good"){
        return tip = (20);
    }else if (service == "fair"){
         return tip = (15);
    }else if (service == "bad"){
         return tip = (10);
    }else{
        console.log("invalid");
    }
    // console.log(tip);

}
// Tip Calculator 2
function totalAmount(amount, service){
       tips = tipAmount(amount, service);
       return total = Number(tips) + Number(amount);
}

// Tip Calculator 3
function splitAmount(amount, service, people){
    total = totalAmount(amount, service)
    return total / Number(people);
}

