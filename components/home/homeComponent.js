(function () {
  var template = [
    '  <main class="container">',
    '    <h2>Challenge the status quo! <small>Making the angular community more inclusive and welcoming for underrepresented groups</small></h2>',
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

