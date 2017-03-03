angular.module("karbonPrint")
    .controller("gameCtrl", function($scope, $stateParams, service) {

          $scope.getGames = function() {
            service.getGames().then(function(response) {
              console.log("response",response)
                $scope.games = response.data.results;

                $scope.getGame = function() {

                    console.log($scope.games, 'this is bad');

                    for (var i = 0; i < $scope.games.length; i++) {
                      console.log("idinAction",$scope.games[i].id )
                      console.log("stateparamsid",$stateParams.id )

                        if ($scope.games[i].id == $stateParams.id) {
                            $scope.game = $scope.games[i];
                            console.log("scope.game",$scope.game)
                            console.log($scope.games, 'bye')
                        }
                    }
                }

                $scope.getGame()

                console.log($scope.game,' yup');
            });
        }

        $scope.getGames();

        console.log($scope.game, 'hello!');
    });




    // var listId = $stateParams.id
    //   $scope.games = service.getGames.find(function(list) {
    //     return list.id.toString() === listId
    //   });
    //
    //   console.log($scope.games)


    // $scope.games = service.getGames;
