function signup(event){
  event.preventDefault();
  var username = document.getElementById("dktk").value;
  var email = document.getElementById("dkemail").value;
  var password = document.getElementById("dkmk").value;

  var user = {
    username: username,
    email: email,
    password: password,
  }

  var json = JSON.stringify(user);
  localStorage.setItem(username, json);
  alert("Đăng ký thành công!!");
}



//login input
$(document).ready(function(){
    $(".login").click(function(){
      $(".inputlogin").slideToggle("slow");      
  })
});

//


// open mobile menu
$(document).ready(function(){
  $(".menu-mobile").click(function(){
    $(".dropdown-menu-mobile").slideToggle("slow");      
  })
});
$(document).ready(function(){
  $(".dropdown-mobile").click(function(){
    $(".dropdown-content-mobile").slideToggle("slow");      
  })
});
// mo filter mobile
$(document).ready(function(){
  $(".filter-icon-btn").click(function(){
    $(".filter-wrapper-mobile").slideToggle("slow");      
  })
});


//mo filter 
$(document).ready(function(){
  $(".mo-filter-tien").click(function(x){
    $(".list-filter-tien").slideToggle("slow");
    $(".mo-filter-tien i").toggleClass("fa-angle-up");
  })
}); 
$(document).ready(function(){
  $(".mo-filter-tgphathanh").click(function(x){
    $(".list-filter-tgphathanh").slideToggle("slow");
    $(".mo-filter-tgphathanh i").toggleClass("fa-angle-up");
  })
});

$(document).ready(function(){
  $(".mo-filter-theloai").click(function(x){
    $(".list-filter-theloai").slideToggle("slow");
    $(".mo-filter-theloai i").toggleClass("fa-angle-up");
  })
});

$(document).ready(function(){
  $(".mo-filter-nentang").click(function(x){
    $(".list-filter-nentang").slideToggle("slow");
    $(".mo-filter-nentang i").toggleClass("fa-angle-up");
  })
});

// Get the button:
let mybutton = document.getElementById("topBtn");

function topFunction() {
  document.documentElement.scrollTop = 0;
}