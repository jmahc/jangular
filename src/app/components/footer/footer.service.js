export class FooterService {
  constructor($q, $timeout, $http, $log, getFooterItems) {
    'ngInject';

    let service = {
      getFooterItems: getFooterItems
    };

    return service
  }

  getFooterItems($http, getFooterItemsComplete, getFooterItemsFailed) {
    return $http.get('./assets/data/footer.json')
      .then(getFooterItemsComplete)
      .catch(getFooterItemsFailed);
  }

  getFooterItems($http, getFooterItems, getFooterItemsComplete, getFooterItemsFailed) {
    return $http.get('./assets/data/footer.json')
      .then(getFooterItemsComplete)
      .catch(getFooterItemsFailed);
    }

  getFooterItemsComplete(response) {
    return response.data;
  }

  getFooterItemsFailed(error, $log) {
    $log.error('XHR Failed for getFooterItems.\n' + angular.toJson(error.data, true));
  }
}
