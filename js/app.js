angular.module("karbonPrint", ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider, $sceProvider) {
    $sceProvider.enabled(false) // <-- makes the html descriptions work
    $urlRouterProvider.otherwise("/")
    $stateProvider

      .state('home', {
        url: '/',
        templateUrl: "../template/homeTmpl.html",
        controller: "mainCtrl"
      })

      .state('game', {
        url: '/game/:id',
        templateUrl: "../template/gameTmpl.html",
        controller: 'gameCtrl'
      })

      .state('user', {
        url: '/user',
        templateUrl: "../template/userTmpl.html",
        controller: 'userCtrl'
      })

      .state('list', {
        url: '/list/:id',
        templateUrl: "../template/listTmpl.html",
        controller: 'listCtrl'
      })



  })
