(function() {
  'use strict';

  angular
    .module('jmac')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(Portfolio) {
    var vm = this;

    vm.portfolioItems = [];

    function activate() {
      getPortfolio();
    }

    function preload(arrayOfImages) {
      angular.element(arrayOfImages).each(function() {
        console.log('Preloading images..')
        angular.element('<img/>')[0].src = vm;
        // Alternatively you could use:
        // (new Image()).src = this;
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
      'assets/img/web/yanmar.png',
    ]);

    activate();

    function getPortfolio() {
      vm.portfolioItems = Portfolio.query();

      angular.forEach(vm.portfolioItems, function(portfolioItem) {
        portfolioItem.rank = Math.random();
      });
    }
  }
})();
