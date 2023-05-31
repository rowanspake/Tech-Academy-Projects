var x = 4 //Defining global variables x and y
var y = 8

function add_Function() {
    document.getElementById("mathReturn0").innerHTML = x + y; //Implementing global variables
}

function subtract_Function() {
    var z = 16 //Defining local variables
    var q = 64
    document.getElementById("mathReturn1").innerHTML = z + q; //Implementing local variables
}

function multiply_Function() {
    document.getElementById("mathReturn2").innerHTML = x * z; //Attempting to use a global variable and a local variable definied within a different function
}

function get_Date() {   //get_Date exercise
    const d = new Date()
    if (new Date().getHours() < 18) {
        document.getElementById("WhatHourIsIt").innerHTML = "It is " + d.getHours();
    }
}

if(x < y) {  //if function
    document.write("x is less than y")
}

function Hot_Dog_Function() { //else function exercise
    hot_dog = document.getElementById("hot_dog").value;
    if (hot_dog >= 3) {  //if function
        how_many = "That's a lot of hot dogs!";
    }
    else {  //else function
        how_many = "That's a reasonable amount of hot dogs";
    }
    document.getElementById("how_many_hot_dogs").innerHTML = how_many; //output in html page

}

function Time_function() {  //Time_function() exercise
    var Time = new Date().getHours(); //defining variables, using time functions
    var Reply;
    if (Time < 12 == Time > 0) {  
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18){  //else if method
        Reply = "It is afternoon."
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}