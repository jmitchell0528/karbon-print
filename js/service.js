angular.module('karbonPrint').service('service', function($http, $stateParams) {

  this.getGames = function() {
    return $http.get('http://www.giantbomb.com/api/games/?format=json&api_key=563aad4a614fdba9564c15cd4902547f599ba8dc')
					.then(function(response){
						var games = response.data.results;
						for (var i = 0; i < games.length; i++) {
							if (games[i].id == $stateParams.id) {
								return games[i]
							}
						}
					})
  }

  this.getLists = function() {
    return $http.get('http://www.giantbomb.com/api/games/?format=json&api_key=563aad4a614fdba9564c15cd4902547f599ba8dc')
  }

  this.getUsers = function() {
    return $http.get('json/user.json')
  }
});
