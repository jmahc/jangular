(function() {
  'use strict';

  angular
    .module('jmac')
    .directive('ccNavbar', ccNavbar);

  /** @ngInject */
  function ccNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {},
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($log, navbarContent) {
      var vm = this;
      vm.navbarItems = [];

      activate();

      function activate() {
        return getNavbarItems().then(function() {
          $log.info('Activated Navbar View');
        });
      }

      function getNavbarItems() {
        return navbarContent.getNavbarItems().then(function(data) {
          vm.navbarItems = data;
          return vm.navbarItems;
        });
      }
    }
  }

})();
