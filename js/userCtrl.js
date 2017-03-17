angular.module("karbonPrint")
.controller("userCtrl", function($scope, $stateParams, service) {
	service.getUsers().then(function(response) {
	  $scope.users = response.data;
	});
});
