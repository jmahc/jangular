export class VideoService {
  constructor ($q, $timeout, $http, getVideoItems) {
    'ngInject';

    let service = {
      getVideoItems: getVideoItems
    }

    return service;
  }

  getAboutMe(getVideoItemsComplete, getVideoItemsFailed, $http) {
    return $http.get('./assets/data/video.json')
      .then(getVideoItemsComplete)
      .catch(getVideoItemsFailed);
  }

  getVideoItemsComplete(response) {
    return response.data;
  }

  getVideoItemsFailed(error, $log) {
    $log.error('XHR Failed for getPortfolio.\n' + angular.toJson(error.data, true));
  }
}
