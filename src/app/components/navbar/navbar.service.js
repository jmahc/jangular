(function() {
  'use strict';

  angular
      .module('jmac')
      .factory('navbarContent', navbarContent);

    function navbarContent($q, $timeout, $http, $log) {
      var service = {
        getNavbarItems: getNavbarItems
      };

      return service;

      function getNavbarItems() {
        return $http.get('./assets/data/navbar.json')
          .then(getNavbarItemsComplete)
          .catch(getNavbarItemsFailed);

        function getNavbarItemsComplete(response) {
          return response.data;
        }

        function getNavbarItemsFailed(error) {
          $log.error('XHR Failed for getNavbarItems.\n' + angular.toJson(error.data, true));
        }
      }
    }
})();
