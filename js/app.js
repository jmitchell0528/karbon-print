angular.module("karbonPrint", ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/")
    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: "../template/homeTmpl.html",
        controller: "mainCtrl"
      })

      .state('game', {
        url: '/game',
        templateUrl: "../template/gameTmpl.html",
      })

      .state('user', {
        url: '/user',
        templateUrl: "../template/userTmpl.html",
      })



  })
