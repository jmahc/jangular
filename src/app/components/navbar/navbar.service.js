export class GithubContributorService {
  constructor ($q, $timeout, $http, getNavbarItems) {
    'ngInject';

    let service = {
      getNavbarItems: getNavbarItems
    };

    return service;
  }

  getNavbarItems(getNavbarItemsComplete, getNavbarItemsFailed, $http) {
    return $http.get('./assets/data/navbar.json')
      .then(getNavbarItemsComplete)
      .catch(getNavbarItemsFailed);
  }

  getNavbarItemsComplete(response) {
    return response.data;
  }

  getNavbarItemsFailed(error, $log) {
    $log.error('XHR Failed for getNavbarItems.\n' + angular.toJson(error.data, true));
  }
}
