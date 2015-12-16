(function() {
  'use strict';

  angular
    .module('jmac')
    .directive('ccFooter', ccFooter);

  /** @ngInject */
    function ccFooter() {
      return {
        restrict: 'E',
        template: 'app/components/footer/footer.html',
        controller: FooterController
      };
    }
    return directive;
})();
