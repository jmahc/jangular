(function() {
  'use strict';

  angular
    .module('jmac')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController(weatherForm, $scope, $log) {
    var vm = this;
    vm.weather = {};

    $scope.$on('QuerySet', function() {
      $log.debug("Is this the issue?");
      return weatherForm.getWeatherFormLocation().then(function(data) {
        vm.weather = data;
        $log.debug("returned... " + vm.weather)
        return weatherBroadcast();
      });
    });

    function weatherBroadcast() {
      $scope.$broadcast('AnimateWeather', function() {
        $log.debug("SHOUT THROW YOUR HANDS UP AND SHOUT!!");
        return vm.weather;
      });
    }
  }
})();
