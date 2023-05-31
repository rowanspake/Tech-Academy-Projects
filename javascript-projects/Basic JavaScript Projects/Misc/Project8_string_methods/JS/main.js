function combine_Words() {  //function using .concat() method
    var pt1 = "Let's ";     //defining words to concatenate
    var pt2 = "combine ";
    var pt3 = "these ";
    var pt4 = "words!";
    var words_combined = pt1.concat(pt2, pt3, pt4); //using the .concat method to concatenate our words
    document.getElementById("Concatenate").innerHTML = words_combined; //outputting concatenated words
}

function slice_Method() { //function using .slice() method
    var Sentence = "The quick brown fox jumps over the lazy dog"; //sentence to be sliced from
    var Section = Sentence.slice(15,19); //takes the slice "fox" out
    document.getElementById("Slice").innerHTML = Section; //displays the slice
}

function make_Uppercase() { // function using toUpperCase() method
    var text = "uppercase"; // text to be made uppercase
    var newtext = text.toUpperCase(); //makes the text upprcase
    document.getElementById("uppercase").innerHTML = newtext; //displays the result
}

function search_Function() { // function using search() method
    let text = "The quick brown fox jumps over the lazy dog" //string to be searched
    let position = text.search("fox"); //searches for the string "fox"
    document.getElementById("output").innerHTML = "Position: " + position; //displays the output
}

function string_Method() { //function using toString() method
    var Z = 42; //defines a number to make into string
    document.getElementById("Numbers_to_string").innerHTML = Z.toString(); //converts to string and displays result
}

function precision_Method() { //function using toPrecision() method
    var Y = 3478.972397; //long number to be formated
    document.getElementById("Precision").innerHTML = Y.toPrecision(7); //formats the previous number to 7 digits
}

function fixed_Method() { //function using toFixed() method
    var A = 68.8675739; //defines number to be rounded
    var A3 = A.toFixed(3); //rounds to three decimal places
    document.getElementById("Fixed").innerHTML = A3; //displays result
}

function value_Method() { //function using valueOf() method
    var B = "bababooey"; //string
    var Bvalue = B.valueOf(); //gets primitive value of string
    document.getElementById("Value").innerHTML = Bvalue; //displays result
}