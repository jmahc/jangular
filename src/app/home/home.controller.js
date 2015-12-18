(function() {
  'use strict';

  angular
    .module('jmac')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($scope, $location, $log, duScroll) {
    var vm = this;

    function preload(arrayOfImages) {
      angular.element(arrayOfImages).each(function() {
      angular.element('<img/>')[0].src = vm;
      });
    }

    var container = angular.element(document.getElementById('container'));
    var section2 = angular.element(document.getElementById('section-2'));
    vm.toTheTop = function() {
      $log.debug("I was hit toTheTop")
     container.scrollTop(0, 5000);
    }
    vm.toHome = function() {
      $log.debug("I was hit toHome")
     container.scrollTo(home, 0, 1000);
    }
    // vm.gotoElement = function (eID){
    //   // set the location.hash to the id of
    //   // the element you wish to scroll to.
    //   $log.debug('was this hit?');
    //   $location.hash('bottom');
    //
    //   // call $anchorScroll()
    //   anchorSmoothScroll.scrollTo(eID);
    // };

    preload([
      'assets/img/web/2-com.png',
      'assets/img/web/bulwark.png',
      'assets/img/web/columbia.png',
      'assets/img/web/cub.png',
      'assets/img/web/horace.png',
      'assets/img/web/red.png',
      'assets/img/web/vf.png',
      'assets/img/web/yanmar.png'
    ]);
  }
})();
