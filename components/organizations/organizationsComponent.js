(function () {
  var template = [
    '  <main class="container">',
    '    <h1>Organizations</h1>',
    '  </main>'
  ];
  angular.module('ng-include-directory').component('organizations', {
    template: template.join(''),
    controller: function (Organizations) {
    }
  });
})();


