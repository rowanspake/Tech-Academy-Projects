function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "changed";
}

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, );


ctx.lineWidth = 5;
ctx.beginPath();
ctx.lineTo(20,220);
ctx.lineTo(20,20);
ctx.lineTo(60,66);
ctx.lineTo(20,132);
ctx.lineTo(60,220);
ctx.stroke();

ctx.beginPath();
ctx.lineTo(66, 132);
ctx.lineTo(99, 66);
ctx.lineTo(132, 132);
ctx.lineTo(99, 220);
ctx.closePath();
ctx.stroke();

ctx.beginPath();
ctx.lineTo(132, 66);
ctx.lineTo(166, 220);
ctx.lineTo(200, 66);
ctx.lineTo(233, 220);
ctx.lineTo(266, 66);
ctx.stroke();

ctx.beginPath();
ctx.lineTo(266, 220);
ctx.lineTo(300, 66);
ctx.lineTo(333, 220);
ctx.lineTo(315, 135);
ctx.lineTo(285, 135);
ctx.stroke();

ctx.beginPath();
ctx.lineTo(345, 220);
ctx.lineTo(345, 66);
ctx.lineTo(390, 220);
ctx.lineTo(390, 66);
ctx.stroke();