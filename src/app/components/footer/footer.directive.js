(function() {
  'use strict';

  angular
    .module('jmac')
    .directive('ccFooter', ccFooter);

  /** @ngInject */
  function ccFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
          creationDate: '='
      },
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController($log, footerContent) {
      var vm = this;

      vm.footerItems = [];

      activate();

      function activate() {
        return getFooterItems().then(function() {
          $log.info('Activated Footer View');
        });
      }

      function getFooterItems() {
        return footerContent.getFooterItems().then(function(data) {
          vm.footerItems = data;
          return vm.footerItems;
        });
      }
    }
  }

})();
