(function () {
  var template = [
    '  <main class="container">',
    '    <h2>Challenge the status quo! <small>We aim to change the default assumption about what an Angular developer looks like.</small></h2>',
    '    <p>Site currently under construction, if you&apos;d like to collaborate join us in',
    '      <a href="https://github.com/nginclude/nginclude.github.io" target="_blank">github</a>',
    '      and  <a href="https://twitter.com/nginclude" target="_blank">Twitter</a>.',
    '    </p>',
    '  </main>'
  ];
  angular.module('ng-include-directory').component('home', {
    template: template.join(''),
    controller: function () {
    }
  });
})();

