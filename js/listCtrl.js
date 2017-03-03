angular.module("karbonPrint")
.controller("listCtrl", function($scope, $stateParams, service) {

$scope.gameFilter = {}
$scope.gameFilter.name = $stateParams.id

  $scope.lists = service.getLists;

     $scope.getLists = function()  {
      service.getLists().then(function(response) {
        $scope.lists = response.data.results;
      });
    }
    $scope.getLists();

  });
