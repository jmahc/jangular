(function() {
  'use strict';

  angular
    .module('jmac')
    .controller('FooterController', FooterController);

  /** @ngInject */
  function FooterController(Footer) {
    var vm = this;

    vm.footerItems = [];

    activate();
    function activate() {
      getFooter();
    }
    function getFooter() {
      vm.footerItems = Footer.query();
      angular.forEach(vm.footerItems, function(footerItem) {
        footerItem.rank = Math.random();
      });
    }
  }
})();
