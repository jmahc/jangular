(function() {
  'use strict';

  angular
    .module('jmac')
    .directive('ccPortfolio', ccPortfolio);

  /** @ngInject */
  function ccPortfolio() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/portfolio/portfolio.html',
      scope: {
          creationDate: '='
      },
      controller: PortfolioController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function PortfolioController($log, portfolioContent) {
      var vm = this;

      vm.portfolioItems = [];

      activate();

      function activate() {
        return getPortfolioItems().then(function() {
          $log.info('Activated Portfolio View');
        });
      }

      function getPortfolioItems() {
        return portfolioContent.getPortfolioItems().then(function(data) {
          vm.portfolioItems = data;
          return vm.portfolioItems;
        });
      }
    }
  }

})();
