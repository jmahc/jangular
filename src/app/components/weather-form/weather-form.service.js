// (function() {
//   'use strict';
//
//   angular
//     .module('jmac')
//     .factory('weatherForm', weatherForm);
//
//   /** @ngInject */
//   function weatherForm($log, $http) {
//     var weatherApiKey = 'a2a0da17d9f548f18e1144117151110';
//     var options = {
//       host: 'api.apixu.com',
//       port: 80,
//       path: '/v1/current.json?key=' + weatherApiKey + '&q=',
//       method: 'GET',
//       final: ''
//     };
//     var api = 'http://' + options.host + options.path;
//
//     var service = {
//       getWeatherFormLocation: getWeatherFormLocation
//     };
//
//     return service;
//
//     function getWeatherFormLocation(query) {
//       options.final = api + query;
//       $log.debug('Get Weather Form Location: ' + options.final)
//       return $http.get(options.final)
//         .then(getWeatherFormLocationComplete)
//         .catch(getWeatherFormLocationFailed);
//
//       function getWeatherFormLocationComplete(response) {
//         return response.data;
//       }
//
//       function getWeatherFormLocationFailed(error) {
//         $log.error('XHR Failed for getWeatherFormLocation.\n' + angular.toJson(error.data, true));
//       }
//     }
//   }
// })();



(function() {
  'use strict';

  angular
    .module('jmac')
    .factory('weatherForm', weatherForm);

  /** @ngInject */
  function weatherForm($log, $http) {
    var query = "";
    var service = {
      setQueryValue: setQueryValue,
      getWeatherFormLocation: getWeatherFormLocation
    };

    return service;

    function setQueryValue(setter) {

      var res = "success";
      if (setter != "")
      {
        query = setter;
      } else {
        res = "error";
      }
      return res;
    }

    function getWeatherFormLocation() {
      var x = query;
      $log.debug("Api + query = " + x);
      return $http.get('./assets/data/weather-sample.json')
        .then(getWeatherItemsComplete)
        .catch(getWeatherItemsFailed);

      function getWeatherItemsComplete(response) {
        return response.data;
      }

      function getWeatherItemsFailed(error) {
        $log.error('XHR Failed for getWeatherFormLocation.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
