export class PortfolioService {
  constructor ($log, $http, getPortfolioItems) {
    'ngInject';

     let service = {
       getPortfolioItems: getPortfolioItems
     };

     return service;
  }

  getPortfolioItems(getPortfolioItemsComplete, getPortfolioItemsFailed, $http) {
    return $http.get('./assets/data/portfolio.json')
      .then(getPortfolioItemsComplete)
      .catch(getPortfolioItemsFailed);
  }

  getPortfolioItemsComplete(response) {
    return response.data;
  }

  getPortfolioItemsFailed(error, $log) {
    $log.error('XHR Failed for getPortfolio.\n' + angular.toJson(error.data, true));
  }
}
