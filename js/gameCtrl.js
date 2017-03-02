angular.module("karbonPrint")
.controller("gameCtrl", function($scope, $stateParams, service) {

$scope.games = service.getGames;

     $scope.getGames = function()  {
      service.getGames().then(function(response) {
        console.log(response)
        $scope.games = response.data.results;
      });
    }
    $scope.getGames();

  });
