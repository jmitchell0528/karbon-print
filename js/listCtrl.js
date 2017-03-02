angular.module("karbonPrint")
.controller("listCtrl", function($scope, $stateParams, service) {

  $scope.lists = service.getLists;

     $scope.getLists = function()  {
      service.getLists().then(function(response) {
        console.log(response)
        $scope.lists = response.data.results;
      });
    }
    $scope.getLists();

  });
