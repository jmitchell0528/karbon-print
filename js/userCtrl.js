angular.module("karbonPrint")
.controller("userCtrl", function($scope, $stateParams, service) {

$scope.users = service.getUsers;

    $scope.getUsers = function()  {
      service.getUsers().then(function(response) {
        console.log(response)
        $scope.users = response.data;
      });
    }
    $scope.getUsers();

});
