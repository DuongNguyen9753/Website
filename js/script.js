//login input
$(document).ready(function(){
    $(".login").click(function(){
      $(".inputlogin").slideToggle("slow");      
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

$('.phobien-slider').flickity({
  // options
  cellAlign: 'center',
  contain: true
});