document.write(typeof 8 +"\n"); //Typeof operator determining data type of a number

document.write("11" + 1 + "\n"); //Combining a string and a number

document.write(0/0 + "\n"); //Returns NaN

document.write(isNaN(0/0) + "\n"); //Checks if 0/0 is NaN

document.write(isNaN(4) + "\n"); //Checks if 4 is NaN

document.write(2E310 + "\n"); //Returns infinity

document.write(-3E310 + "\n"); //Returns negative infinity

document.write((66 > 9) + "\n"); //Checks if 66 is greater than 9

document.write((42 < 42) + "\n"); //Checks if 42 is greater than 42

console.log(4 + 7); //Logs a sum in the console

console.log(4 > 7); //Logs a boolean value in the console

document.write((8 == 8) + "\n"); //Checks if 8 is equal to 8

document.write((8 == 3) + "\n"); //Checks if 8 is equal to 3

//Variables for next eight exercises
var a = "1";    //A number
var b = "1";    //The same number as before
var c = "2";    //A different number
var d = 1 ;     //A string with the same 

document.write((a === b) + "\n"); //Compares "1" and "1"

document.write((c === d) + "\n"); //Compares "2" and 1 

document.write((a === d) + "\n"); //Compares "1" and 1

document.write((b === c) + "\n"); //Compares "1" and "2"

document.write((a < c && a == b) + "\n"); //Checks if both a is less than c AND a equals b

document.write((a > c && a == b) + "\n"); //Checks if a is greater than c AND a equals b

document.write((a < c || a > c) + "\n"); //Checks if a is less than c OR a is greater than c

document.write((a > c || b > c) + "\n"); //Checks if a is greater than c OR b is greater than c

function not_Function0() {  //Defines a function to check if 20 is not greater than 10
    document.getElementById("Not0").innerHTML = !(20 > 10); //Returns the result in the element "Not0"
}

function not_Function1() {  //Defines a function to check if 5 is not greater than 10
    document.getElementById("Not1").innerHTML = !(5 > 10);  //Returns the result in the element "Not1"
}