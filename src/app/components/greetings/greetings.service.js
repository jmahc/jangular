export class GreetingsService {
  constructor ($log, $http, greetingsContent, $q, getGreetingsItems) {
    'ngInject';

    let service = {
      getGreetingsItems: getGreetingsItems
    };

    return service;
  }

  getGreetingsItems(greetingsContent, $http, getGreetingsItemsComplete, getGreetingsItemsFailed) {
    return $http.get('./assets/data/greeting.json')
      .then(getGreetingsItemsComplete)
      .catch(getGreetingsItemsFailed);
  }

  getGreetingsItemsComplete(response) {
    return response.data;
  }

  getGreetingsItemsFailed($log, error) {
    $log.error('XHR Failed for getGreetingsItems.\n' + angular.toJson(error.data, true));
  }
}
