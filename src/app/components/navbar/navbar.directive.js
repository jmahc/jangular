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
      scope: {
          creationDate: '='
      },
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

      // vm.gotoElement = function (eID){
      //   // set the location.hash to the id of
      //   // the element you wish to scroll to.
      //   $log.debug('was this hit? ' + eID);
      //   $location.hash(eID);
      //
      //   // call $anchorScroll()
      //   anchorSmoothScroll.scrollTo(eID);
      // };
    }
  }

})();
