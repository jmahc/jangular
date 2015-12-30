export class AboutService {
  constructor ($q, $timeout, $http, getAboutMe) {
    'ngInject';

    let service = {
      getAboutMe: getAboutMe
    }

    return service;
  }

  getAboutMe(getAboutMeComplete, getAboutMeFailed, $http) {
    return $http.get('./assets/data/about.json')
      .then(getAboutMeComplete)
      .catch(getAboutMeFailed);
  }

  getAboutMeComplete(response) {
    return response.data;
  }

  getAboutMeFailed(error, $log) {
    $log.error('XHR Failed for getPortfolio.\n' + angular.toJson(error.data, true));
  }
}
