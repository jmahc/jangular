(function() {
  'use strict';

  angular
    .module('jmac')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController() {
    var vm = this;

    function preload(arrayOfImages) {
      angular.element(arrayOfImages).each(function() {
      angular.element('<img/>')[0].src = vm;
      });
    }

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
