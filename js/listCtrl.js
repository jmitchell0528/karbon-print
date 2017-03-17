angular.module("karbonPrint")
.controller("listCtrl", function($scope, $stateParams, service) {
	$scope.gameFilter = {}
	$scope.gameFilter.name = $stateParams.id
	service.getLists().then(function(response) {
			$scope.lists = response.data.results;
		});
});
