var myButton = document.getElementById("open");
var myDiv = document.getElementById("hamburger");

myButton.addEventListener("click", function() {
  myDiv.style.display = "block";
});
var myButton = document.getElementById("close");
var myDiv = document.getElementById("hamburger");

myButton.addEventListener("click", function() {
  myDiv.style.display = "none";
});

var myDiv = document.getElementById("hamburger");
var mediaQuery = window.matchMedia("(min-width: 768px)");

function handleScreenSizeChange(mediaQuery) {
  if (mediaQuery.matches) {
    myDiv.style.display = "none";
  } else {
    myDiv.style.display = "none";
  }
}

handleScreenSizeChange(mediaQuery);
mediaQuery.addListener(handleScreenSizeChange);
