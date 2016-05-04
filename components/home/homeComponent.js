(function () {
  var template = [
    '  <main class="container">',
    '    <p>Site currently under construction, if you&apos;d like to collaborate join us in',
    '      <a href="https://github.com/nginclude/nginclude.github.io" target="_blank">github</a>',
    '    </p>',
    '  </main>'
  ];
  angular.module('ng-include-directory').component('home', {
    template: template.join(''),
    controller: function () {
    }
  });
})();

