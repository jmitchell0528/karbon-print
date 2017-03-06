angular.module("karbonPrint").controller("mainCtrl", function($scope, service, $state) {
  //console.log("Working")
 $scope.test = "this is only a test dont panic!!!"
 $scope.searchGames = function() {
   $state.go("list", {id: $scope.gameLists})
 }
  $(document).ready(function(){

    $('#carousel-input-field').hide()
    $('.carousel.carousel-slider').carousel({fullWidth: true})
    setInterval(function() {
      $('.carousel.carousel-slider').carousel("next");
    }, 5000);
     $(".button-collapse").sideNav();

     $('.modal').modal();

    $('#carousel-button').click(function(){
      $(this).hide()
      $('#carousel-input-field').show()
    })

    $('#carousel-input-field').dblclick(function(e){
        $("#carousel-input-field").hide();
        $('#carousel-button').show()
      })

    // $('#go-to-lists') = function(str) {
    //   $state.go("/lists/" + str)
    // }

  });

});
