angular.module("karbonPrint").controller("mainCtrl", function($scope, $state) {
 $scope.searchGames = function() {
   $state.go("list", {id: $scope.gameLists})
 }
	$scope.$on("$viewContentLoaded", function(){
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
			$("#carousel-input-field").focus();
	  })
	  $('#carousel-input-field').blur(function(e){
	      $("#carousel-input-field").hide();
	      $('#carousel-button').show()
    })
  });
});
