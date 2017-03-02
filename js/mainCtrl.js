angular.module("karbonPrint").controller("mainCtrl", function($scope, service) {
  //console.log("Working")

  $(document).ready(function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true})
    setInterval(function() {
      $('.carousel.carousel-slider').carousel("next");
    }, 5000);
     $(".button-collapse").sideNav();

   });

});
