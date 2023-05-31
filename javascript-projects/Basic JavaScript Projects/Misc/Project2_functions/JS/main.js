

function whyDo0() {
    var x = "Please don't do it again!";
    var y = "Why did you do that?!";
    document.getElementById("doNot").innerHTML = x;
    document.getElementById("pushMe").innerHTML = "Why not?";
    window.alert(y);
}

function whyDo1() {
    var sentence = "Just kidding, ";
    sentence += "nice try though";
    document.getElementById("notAgain").innerHTML = sentence;
}