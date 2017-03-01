angular.module("someModule").directive("someDirective", function() {
  return {
    template: `<nav></nav>`,
    scope: {
      someValue: "="
    },
    controller: function() {
      //do something
    }
  }
})


angular.module("someModule").directive("searchDirective", function() {
  return {
    template: `<input type='text' ng-model='searchTerm'>`
    scope: {
      searchTerm: "="
    }
  }
})

angular.module("someModule").controller("mainCtrl", function() {
  $scope.searchTerm = ""
})

/*
index.html
<search-directive search-term="searchTerm"></search-term>
<div ng-repeat="game in games | filter: searchTerm">

*/
