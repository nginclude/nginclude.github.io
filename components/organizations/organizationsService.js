angular.module('ng-include-directory').factory('Organizations', function ($http) {
  var organizations = {};

  organizations.get = function () {
    return $http.get('data/organizations.json').then( function (response) {
      if (Array.isArray(response.data)) {
        return response.data;
      }
      return [];
    });
  };

  return organizations;
});

