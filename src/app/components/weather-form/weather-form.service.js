(function() {
  'use strict';

  angular
    .module('jmac')
    .factory('weatherForm', weatherForm);

  /** @ngInject */
  function weatherForm($log, $http) {
    var weatherApiKey = 'a2a0da17d9f548f18e1144117151110';
    var options = {
      host: 'api.apixu.com',
      port: 80,
      path: '/v1/current.json?key=' + weatherApiKey + '&q=',
      method: 'GET',
      final: ''
    };
    var api = 'http://' + options.host + options.path;

    var service = {
      getWeatherFormLocation: getWeatherFormLocation
    };

    return service;

    function getWeatherFormLocation(query) {
      options.final = api + query;
      $log.debug('Get Weather Form Location: ' + options.final)
      return $http.get(options.final)
        .then(getWeatherFormLocationComplete)
        .catch(getWeatherFormLocationFailed);

      function getWeatherFormLocationComplete(response) {
        return response.data;
      }

      function getWeatherFormLocationFailed(error) {
        $log.error('XHR Failed for getWeatherFormLocation.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
