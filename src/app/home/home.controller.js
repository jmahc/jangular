(function() {
  'use strict';

  angular
    .module('jmac')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController(Portfolio) {
    var vm = this;

    vm.portfolioItems = [];
    activate();

    function activate() {
      getPortfolio();
    }

    function getPortfolio() {
      vm.portfolioItems = Portfolio.query();

      angular.forEach(vm.portfolioItems, function(portfolioItem) {
        portfolioItem.rank = Math.random();
      });
    }
  }
})();
