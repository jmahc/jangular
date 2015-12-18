(function() {
  'use strict';

  angular
      .module('jmac')
      .service('aboutContent', aboutContent);

      function aboutContent($q, $timeout, $http, $log) {
        var service = {
          getAboutMe: getAboutMe
        };

        return service;

        function getAboutMe() {
          return $http.get('./assets/data/about.json')
            .then(getAboutMeComplete)
            .catch(getAboutMeFailed);

          function getAboutMeComplete(response) {
            return response.data;
          }

          function getAboutMeFailed(error) {
            $log.error('XHR Failed for getPortfolio.\n' + angular.toJson(error.data, true));
          }
        }
      }
})();
