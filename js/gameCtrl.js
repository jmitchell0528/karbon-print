angular.module("karbonPrint")
.controller("gameCtrl", function($scope, $stateParams, service) {
  service.getGames().then(function(response) {
          $scope.game = response;
  });
});

    // var listId = $stateParams.id
    //   $scope.games = service.getGames.find(function(list) {
    //     return list.id.toString() === listId
    //   });
    //
    //   console.log($scope.games)
    // $scope.games = service.getGames;
