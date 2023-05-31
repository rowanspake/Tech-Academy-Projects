function Ride_Function() {  //Ternary operator example
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}   //End ternary operator example

function Age_Function() {   //Ternary operator exercise
    var Age, Can_vote;      //Sets variables for operation; 
    Age = document.getElementById("Age").value;     //Age is pulled from input on webpage
    Can_vote = (Age >= 18) ? "You are old enough":"You are too young";  //Implementation of ternary operator; determines if input is greater than or equal to 18
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."; //Returns output of ternary operation
}

function Vehicle(Make, Model, Year, Color) {    //Constructor example
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
     " manufactured in " + Erik.Vehicle_Year; //End constructor example
}

function Animal(Order, Family, Genus, Species) {    //Constructor exercise. function Animal() is our constructor 
    this.Animal_Order = Order;  //These next lines define the attributes that the constructor assigns to new instances of the class
    this.Animal_Family = Family;
    this.Animal_Genus = Genus;
    this.Animal_Species = Species;
}

var Dog = new Animal("Carnivora", "Canidae", "Canis", "familiaris"); //Three new instances of class Animal
var Cat = new Animal("Felidae", "Felinae", "Felis", "catus");
var Horse = new Animal("Perissodactyla", "Equidae", "Equus", "ferus");

//The next three functions are functionally identical
function dogFunction() { //This function returns values of the named instance (var Dog) in the associated element (i.e. dogfacts)
    document.getElementById("dogfacts").innerHTML = 
    "Dogs are in the order " + Dog.Animal_Order + " and the family " + Dog.Animal_Family + 
    ". The binominal name is " + Dog.Animal_Genus + " " + Dog.Animal_Species + ".";
}

function catFunction() {
    document.getElementById("catfacts").innerHTML = 
    "Cats are in the order " + Cat.Animal_Order + " and the family " + Cat.Animal_Family + 
    ". The binominal name is " + Cat.Animal_Genus + " " + Cat.Animal_Species + ".";
}

function horseFunction() {
    document.getElementById("horsefacts").innerHTML = 
    "Horses are in the order " + Horse.Animal_Order + " and the family " + Horse.Animal_Family + 
    ". The binominal name is " + Horse.Animal_Genus + " " + Horse.Animal_Species + ".";
}

function count_Function() {     //Nested function example
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}

function nested_Function() {    //Nested function exercise
    document.getElementById("Nested_Function").innerHTML = Multiply()  //Returns output of the function Multiply() in element "Nested_Function"
    function Multiply() {
        var Initial_value = 4; //Sets the value of variable Initial_value to 4
        function Times_two() {Initial_value *= 2;} //Defines another function that multiplies Initial_value by 2
        Times_two(); //Calls function Times_two
        return Initial_value; //Returns the new value of Initial_value
    }

}