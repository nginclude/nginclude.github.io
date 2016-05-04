(function () {
  var template = [
    '   <main class="container">',
    '     <h1>Organizations</h1>',
    '      <div class="row organization-list">',
    '        <div class="col-sm-6 col-md-4" ng-repeat="organization in vm.list">',
    '          <div class="thumbnail">',
    '            <img ng-src="{{organization.logo}}" alt="{{organization.name}}">',
    '            <div class="caption">',
    '              <h3 ng-bind="organization.name"></h3>',
    '              <p ng-bind="organization.short_description"></p>',
    '              <p>',
    '                <a ng-href="organization.url" ng-disabled="!organization.url"',
    '                  ng-bind="organization.display_url || organization.url"></a>',
    '              </p>',
    '              <p class="contact" ng-if="organization.contact_name">',
    '              <strong>Contact:</strong>',
    '                <a ng-href="organization.contact_data" ng-disabled="!organization.contact_data"',
    '                  ng-bind="organization.contact_name"></a>',
    '              </p>',
    '            </div>',
    '          </div>',
    '        </div>',
    '      </div>',
    '  </main>'
  ];
  angular.module('ng-include-directory').component('organizations', {
    template: template.join(''),
    controllerAs: 'vm',
    controller: function (Organizations) {
      var vm = this;
      vm.list = [];
      vm.$onInit = function () {
        Organizations.get().then( function (data) {
          vm.list = data;
        });
      };
    }
  });
})();


