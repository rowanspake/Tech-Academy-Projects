function my_Dictionary() { //This function creates the dictionary
    var Noodle = {          //The dictionary KVPs are defined
        Shape:"Cylinder",
        Grain:"Wheat",
        Cuisine:"Italian",
        Gluten:"Yes",
    }
    delete Noodle.Shape;    //Deletes a KVP
    document.getElementById("Dictionary").innerHTML = Noodle.Shape; //Attempts to display a value, but it has been deleted
}