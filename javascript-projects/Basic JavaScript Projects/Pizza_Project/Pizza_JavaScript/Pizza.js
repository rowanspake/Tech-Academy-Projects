function getReciept() {
    //this initializes our string so it can get passed from
    //function to function, growing line by line into a full reciept
    var text1 = "<h3>You Ordered:</h3>"; 
    var runningTotal= 0; 
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); //Declares an array  containing all of the size options
    for (var i = 0; i < sizeArray.length; i++) {    //Do this if the number of items in the array of size options is less than variable i; goes through the sizes to see which is checked
        if (sizeArray[i].checked) { //If the element at index i is checked, do the following
            var selectedSize = sizeArray[i].value;  //Defines a variable using the value from the selected pizza size
            text1 = text1+selectedSize+"<br>";  //Forms a string using the selected size and our previously defined text
        }
    }
    
    if (selectedSize === "Personal Pizza") {    //These assign number values to the pizza sizes
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;   //Adds the cost of the pizza size to our running total
    console.log(selectedSize+" = $"+sizeTotal+".00"); //Logs the price of the pizza size
    console.log("subtotal: $"+runningTotal+".00");  //Logs our current subtotal
    //these variables will get passed on to each function
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings"); //Declares an array consisting of all of the toppings
    for (var j = 0; j < toppingArray.length; j++) { //Do this as long as j is less than the number of items in the array; goes through the toppings to see if they're checked
        if (toppingArray[j].checked) {  //Do this if the topping at hand has been checked
            selectedTopping.push(toppingArray[j].value);    //Pushes the value (name of topping) to the initially empty selectedTopping array
            console.log("selected topping item: ("+toppingArray[j].value+")");  //Logs which topping has been selected
            text1 = text1+toppingArray[j].value+"<br>"; //Adds the topping to the text1 output which tells us what's been ordered
        }
    }
    var toppingCount = selectedTopping.length; //Checks how many toppings we've selected
    if (toppingCount > 1) { //Do if more than one topping is selected
        toppingTotal = (toppingCount - 1); //You get a free topping so let's knock one off of the count
    } else {
        toppingTotal = 0; //Otherwise, no toppings
    }
    runningTotal = (runningTotal + toppingTotal); //Add the toppings to our subtotal
    console.log("total selected topping items: "+toppingCount); //Log how many toppings we want to add
    console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00");    //You get one free topping
    console.log("topping text1: "+text1);   //Logs what our text1 output is
    console.log("Purchase Total: "+"$"+runningTotal+".00"); //Logs our total cost for the pizza
    document.getElementById("showText").innerHTML=text1;    //Displays what has been ordered
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";   //Displays the total cost
};

function validateForm() {
    let x = document.forms["contactForm"]["phoneNumber"].value;
    if (x == "") {
        alert("Don't forget your phone number!");
        return false;
    }
};

function openForm() {
    document.getElementById("dealsForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("dealsForm").style.display = "none";
};

function openStickyForm() {
    document.getElementById("contactPopup").style.display = "block";
}

function closeStickyForm() {
    document.getElementById("contactPopup").style.display = "none";
}

$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);