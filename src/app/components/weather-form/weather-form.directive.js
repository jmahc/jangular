(function() {
  'use strict';

  angular
    .module('jmac')
    .directive('ccWeatherForm', ccWeatherForm);

  /** @ngInject */
  function ccWeatherForm() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/weather-form/weather-form.html',
      scope: {
          creationDate: '='
      },
      controller: WeatherFormController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function WeatherFormController($scope, $http, $log, weatherForm) {
      var vm = this;
      $scope.search = {};

      vm.weather = {};

      $scope.weatherSubmit = function() {
        var submission = $scope.search.city + ',' + $scope.search.state + ' ' + $scope.search.zip;
        $log.debug("getLocation()" + submission)
        return getLocation(submission);
      }

      function getLocation(query) {
        $log.debug("getLocation()" + query)
        return weatherForm.getWeatherFormLocation(query).then(function(data) {
          vm.weather = data;
          $log.debug("returned... " + vm.weather)

          return vm.greetingItems;
        });
      }
    }
  }

})();
