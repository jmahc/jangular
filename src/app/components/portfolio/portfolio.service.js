(function() {
  'use strict';

  angular
      .module('jmac')
      .service('Portfolio', Portfolio);

    function Portfolio($resource) {
      return $resource('./app/components/portfolio/portfolio.json', {}, {
        query: {method:'GET', params:{portfolioId:'portfolios'}, isArray:true}
      });
    }
})();
