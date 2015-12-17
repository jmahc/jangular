(function() {
  'use strict';

  angular
    .module('jmac')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, $location, $anchorScroll) {

    $log.debug('runBlock end');

    //Lets you jump to an id on the homepage
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute, scope, next, current) {
      if($location.hash()) $anchorScroll();
      $log.debug('rootscope: ' + $rootScope.part);
      $rootScope.part = $route.current.activetab;
      $log.debug('route: ' + $route);
      $log.debug('route current: ' + $route.current);
      $log.debug('route current activetab: ' + $route.current.activetab);
    });
  }

})();
