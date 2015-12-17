(function() {
  'use strict';

  angular
      .module('jmac')
      .factory('greetingsContent', greetingsContent);

    function greetingsContent($q, $timeout, $http, $log) {
      var service = {
        getGreetingsItems: getGreetingsItems
      };

      return service;

      function getGreetingsItems() {
        return $http.get('./assets/data/greeting.json')
          .then(getGreetingsItemsComplete)
          .catch(getGreetingsItemsFailed);

        function getGreetingsItemsComplete(response) {
          return response.data;
        }

        function getGreetingsItemsFailed(error) {
          $log.error('XHR Failed for getGreetingsItems.\n' + angular.toJson(error.data, true));
        }
      }
    }
})();
