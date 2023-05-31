function addition_Function() {
    var addition = 4 + 4;
    document.getElementById("Math0").innerHTML = "4 + 4 = " + addition;
}

function subtraction_Function() {
    var subtraction = 4 - 4;
    document.getElementById("Math1").innerHTML = "4 - 4 = " + subtraction;
}

function multiplication_Function() {
    var multiplication = 4 * 4;
    document.getElementById("Math2").innerHTML = "4 * 4 = " + multiplication;
}

function modulus_Function() {
    var modulus = 5%4;
    document.getElementById("Math3").innerHTML = "5 divided by 4 leaves a remainder of " + modulus;
}

function increase_By_One() {
    var increment_Number = 4;
    increment_Number++;
    document.getElementById("Math4").innerHTML = "4++ = " + increment_Number;
}

function decrease_By_One() {
    var decrement_Number = 4;
    decrement_Number--;
    document.getElementById("Math5").innerHTML = "4-- = " + decrement_Number;
}

function random_Number() { 
    var random = Math.random();
    document.getElementById("Math6").innerHTML = random;
}
 