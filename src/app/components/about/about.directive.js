(function() {
  'use strict';

  angular
    .module('jmac')
    .directive('ccAbout', ccAbout);

  /** @ngInject */
  function ccAbout() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/about/about.html',
      scope: {
          creationDate: '='
      },
      controller: AboutController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function AboutController(aboutContent, $log) {
      var vm = this;

      vm.aboutMe = [];

      activate();

      function activate() {
        return getAbout().then(function() {
          $log.info('Activated About Me View');
        });
      }

      function getAbout() {
        return aboutContent.getAboutMe().then(function(data) {
          vm.aboutMe = data;
          return vm.aboutMe;
        });
      }
    }
  }

})();
