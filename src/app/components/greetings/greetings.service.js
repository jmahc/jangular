(function() {
  'use strict';

  angular
      .module('jmac')
      .factory('greetingLanguages', greetingLanguages);

    function greetingLanguages($q, $timeout, $http, $log) {
      var service = {
        getGreetings: getGreetings
      };

      return service;

      function getGreetings() {
        return $http.get('./app/components/greetings/greeting.json')
          .then(getGreetingsComplete)
          .catch(getGreetingsFailed);

        function getGreetingsComplete(response) {
          return response.data;
        }

        function getGreetingsFailed(error) {
          $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
        }
      }
    }
})();
