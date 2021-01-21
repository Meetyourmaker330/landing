$(document).ready(function(){
   $('.slider').slick({
      arrows:false,
      dots:true,
      adaptiveHeight:true,
      speed:1000,
      swipe:true,
      wariableWidth:true,
   });

  let nav = $("#nav");
  let navToggle = $("#navToggle");

navToggle.on("click", function(event) {
   event.preventDefault();

   nav.toggleClass("show");

});

});