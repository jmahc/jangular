(function() {
  'use strict';

  angular
    .module('jmac')
    .directive('ccWelcome', ccWelcome);

  /** @ngInject */
  function ccWelcome() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/welcome/welcome.html',
      scope: {
          creationDate: '='
      },
      controller: WelcomeController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function WelcomeController() {
    }
  }

})();
