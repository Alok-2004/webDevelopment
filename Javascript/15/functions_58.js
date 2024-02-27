function nice(name) {
    console.log("Hey " + name + " you are nice!");
}

nice("Alok")
nice("Rohan")

function sum(a, b, c = 3) {

    return a + b
}

hello = sum(3, 5);
console.log("Sum of 3 and 5 is ", hello);

let userInput = prompt("Enter your name:");
console.log("Hello, " + userInput + "!");
