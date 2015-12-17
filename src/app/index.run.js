(function() {
  'use strict';

  angular
    .module('jmac')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $log.debug('runBlock end');

    //Lets you jump to an id on the homepage
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
      if($location.hash()) $anchorScroll();
    });
  }

})();
