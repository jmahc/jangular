export function runBlock ($log, $rootScope, $location, $anchorScroll) {
  'ngInject';
  $log.debug('runBlock end');

  var vm = this;

  var on = vm.$rootScope.$on;

  on('$routeChangeSuccess', function() {
    if($location.hash()) $anchorScroll();
  });
}
