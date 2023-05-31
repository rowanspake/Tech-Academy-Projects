window.alert("Hey hey hey") //Window alert method

document.write("Ayooo") //Writes "Ayooo" in document

var x = "Bob the Builder"; //Assigns string "Bob the Builder" to variable x
document.write(x);          //Writes "Bob the Builder" in document

var y = "Can we fix it?"; //Assigns string "Can wo do it?" to variable y
window.alert(y);            //Displays alert window displaying string "Can we do it?"

document.write("\"Yes we can!\""); //Writes "Yes we can!" with quotation marks

document.write("Let's concatenate this string" + " with this one"); //Concatenates two strings

var z = "baba" + "booey"; //Assigns two concatenated strigs to the variable "z"
document.write(z); //Writes "bababooey"

var a = 1, b = 2, c = 3; //Assings three seperate viariables
document.write(a); //Writes "1"

3+4; //An expressions with no observable result


var Sent1 = "This is the beginning the string", Sent2 = " and this is the end of the string"; //Assigns two strings to two variables
document.write(Sent1 + Sent2); //Concatenates and writes the two previously assigned variables

function displayDate() {
    document.getElementById("partyTime").innerHTML = "Right now!"
}