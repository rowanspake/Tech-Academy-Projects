function Call_Loop() { //Function using a while loop
        var Number = "";
        var Y = 10;
        while (Y >= 0) {    //Counts down from 10 while variable Y is greater than or equal to zero
            Number += "<br>" + Y;
            Y--;
        }
        document.getElementById("Loop").innerHTML = Number; //Output where the countdown happens
    }

function length_Function() {    //.length exercise
    X = document.getElementById("howlong").value;
    WordLength = X.length;

    document.getElementById("outputLength").innerHTML = "It is " + WordLength + " characters long"
}

var Instruments = ["Oud", "Bouzouki", "Oboe", "Xylophone", "Accordion"] //Defining an array of instruments
var Content = "";
var Y;
function for_Loop() {;
    for (Y = 0; Y < Instruments.length; Y++) { //for loop that outputs the contents of the array one at a time
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
    var Dog_Types = []; //Creating an array
    Dog_Types[0] = "Husky";     //Adding elements to the array
    Dog_Types[1] = "Golden Retriever";
    Dog_Types[2] = "Akita";
    Dog_Types[3] = "Basset Hound";
    Dog_Types[4] = "Dachshund";

    document.getElementById("Array").innerHTML = "A " + Dog_Types[4] + " is a type of dog." //Displays a value from the array
}

function constant_function() {
    const Good_Dog = {type: "dachshund", color: "cinnamon", height: "short", age: "3"}; //Creating an object using const
    Good_Dog.age = "4"; //Changing a property
    Good_Dog.length = "long";   //Adding a property
    document.getElementById("Constant").innerHTML = "The color of the " + Good_Dog.type + " is " + Good_Dog.color 
    + ". The age is " + Good_Dog.age + ", and the length is " + Good_Dog.length + "." //Outputting a sentence made up of properties and strings

}

function let_Function() {   //Simple 'let' function
let x = 2
window.alert(x)
}



function return_Function() {    //Nested return function

    function return_Function2() {
        let x = 2;
        let y = 4;
        return x + y;
    }
    document.getElementById("Return").innerHTML = return_Function2();
}

let Jonesy_Cat = {  //Object created using 'let'
    type: "kitty", 
    breed: "American Bobtail ", 
    age: "7 month old ", 
    fur: "medium hair ", 
    description: function() {   //Returning the properties of the object
        return "Jonesy Cat is a " + this.age + this.fur + this.breed + this.type;
    }
}
document.getElementById("Jonesy_Cat_Object").innerHTML = Jonesy_Cat.description();

let stufftwo = "";  //Implementing 'continue'
for (let j = 0; j < 10; j++) {
    if (j === 4) {continue; }
    stufftwo += "The number is " + j + "<br>";
}
document.getElementById("continuetest").innerHTML = stufftwo;



let stuff = ""; //Implementing 'break'
for (let x = 10; x <= 10; x--) {
    if (x === 2)  {break; }
    stuff += "The number is " + x + "<br>";
}
document.getElementById("breaktest").innerHTML = stuff;

