//login input
$(document).ready(function(){
    $(".login").click(function(){
        $(".inputlogin").slideToggle("slow");       
  })
});

// Get the button
let mybutton = document.getElementById("topBtn");
mybutton.style.display = "block";

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}