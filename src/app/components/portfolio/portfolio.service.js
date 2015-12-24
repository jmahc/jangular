(function() {
  'use strict';

  angular
    .module('jmac')
    .service('portfolioContent', portfolioContent);

    function portfolioContent($q, $timeout, $http, $log) {
      var service = {
        getPortfolioItems: getPortfolioItems
      };

      return service;

      function getPortfolioItems() {
        return $http.get('./assets/data/portfolio.json')
          .then(getPortfolioItemsComplete)
          .catch(getPortfolioItemsFailed);

        function getPortfolioItemsComplete(response) {
          return response.data;
        }

        function getPortfolioItemsFailed(error) {
          $log.error('XHR Failed for getPortfolio.\n' + angular.toJson(error.data, true));
        }
      }
    }
})();
