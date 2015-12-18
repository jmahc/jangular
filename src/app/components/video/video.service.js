(function() {
  'use strict';

  angular
      .module('jmac')
      .factory('videoContent', videoContent);

    function videoContent($q, $timeout, $http, $log) {
      var service = {
        getVideoItems: getVideoItems
      };

      return service;

      function getVideoItems() {
        return $http.get('./assets/data/video.json')
          .then(getVideoItemsComplete)
          .catch(getVideoItemsFailed);

        function getVideoItemsComplete(response) {
          return response.data;
        }

        function getVideoItemsFailed(error) {
          $log.error('XHR Failed for getVideoItems.\n' + angular.toJson(error.data, true));
        }
      }
    }
})();
