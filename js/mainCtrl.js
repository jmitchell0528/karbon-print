angular.module("karbonPrint").controller("mainCtrl", function($scope, service) {
  //console.log("Working")

  $(document).ready(function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true})
    setInterval(function() {
      $('.carousel.carousel-slider').carousel("next");
    }, 5000);
     $(".button-collapse").sideNav();

  });

  $scope.getGames = function()  {
    service.getGames().then(function(response) {
      console.log(response)
      $scope.games = response.data.results;
    });
  }
  $scope.getGames();


  $scope.getUsers = function()  {
    service.getUsers().then(function(response) {
      console.log(response)
      $scope.users = response.data;
    });
  }
  $scope.getUsers();

});
