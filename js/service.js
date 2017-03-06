angular.module('karbonPrint').service('service', function($http) {

  this.getGames = function() {

    return $http ({
      method: 'GET',
      url: 'http://www.giantbomb.com/api/games/?format=json&api_key=563aad4a614fdba9564c15cd4902547f599ba8dc'
    })
  }

  this.getLists = function() {

    return $http ({
      method: 'GET',
      url: 'http://www.giantbomb.com/api/games/?format=json&api_key=563aad4a614fdba9564c15cd4902547f599ba8dc'
    })
  }

  this.getUsers = function() {

    return $http ({
      method: 'GET',
      url: 'json/user.json'
    })
  }
});
