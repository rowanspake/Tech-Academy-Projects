function validateForm() {
    let x = document.forms["contactForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }

    let y = document.forms["contactForm"]["lname"].value;
    if (y == "") {
        alert("Name must be filled out");
        return false;
    }

    let z = document.forms["contactForm"]["email"].value;
    if (z == "") {
        alert("Email must be filled out");
        return false;
    }
}