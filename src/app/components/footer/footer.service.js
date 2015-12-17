(function() {
  'use strict';

  angular
      .module('jmac')
      .factory('footerContent', footerContent);

    function footerContent($q, $timeout, $http, $log) {
      var service = {
        getFooterItems: getFooterItems
      };

      return service;

      function getFooterItems() {
        return $http.get('./assets/data/footer.json')
          .then(getFooterItemsComplete)
          .catch(getFooterItemsFailed);

        function getFooterItemsComplete(response) {
          return response.data;
        }

        function getFooterItemsFailed(error) {
          $log.error('XHR Failed for getFooterItems.\n' + angular.toJson(error.data, true));
        }
      }
    }
})();
