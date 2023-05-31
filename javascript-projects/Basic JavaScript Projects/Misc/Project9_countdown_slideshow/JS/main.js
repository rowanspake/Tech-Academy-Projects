function countdown () {     //Countdown function
    var seconds = document.getElementById("seconds").value; //Sets the value of var seconds to the value of the input

    function tick() {   //This function counts us down from the input value
        seconds = seconds - 1; //Starts the count from one less than the input
        timer.innerHTML = seconds; //Displays the output; this is where the countdown is displayed
        var time = setTimeout(tick, 1000); //Calls the tick function after 1 second
        if (seconds == -1) {  //Conditional statement that executes when the countdown passes zero
            alert("Time's up!"); //Displays an alert window
            clearTimeout(time); //Clears the timeout
            timer.innerHTML = ""; //Resets the timer
        }
    }
    tick();
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}