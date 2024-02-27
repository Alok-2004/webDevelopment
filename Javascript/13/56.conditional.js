console.log("Hello I am conditional");

let age = 45;
if(age > 18){
    console.log("You can drive");
}else{
    console.log("You cant drive");
}

// if want to compare value then use ==
// if want to compare type also use ===

//3 == "3" is true but 3 === '3' is false 

// nested if else 

// it follows if-esle if-esle   
// it follows same syntax for ternary  operator
// let c = a > b?"yes":"no";

let a = 10;
let b = 5;
let c = (a > b) ? "yes" : "no";
console.log(c);
