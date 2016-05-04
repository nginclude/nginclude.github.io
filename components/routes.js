angular.module('ng-include-directory').config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
  .state('home', {
    url: "/",
    template: '<home></home>'
  })
  .state('organizations', {
    url: "/organizations",
    template: '<organizations></organizations>'
  });
});

