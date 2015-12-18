(function() {
  'use strict';

  angular
    .module('jmac')
    .controller('WeatherController', WeatherController);

  /** @ngInject */
  function WeatherController(weatherForm, $scope) {
    var vm = this;
    vm.weather = {};

    $scope.$on('QuerySet', function() {
      vm.weatherPromise = weatherForm.getWeatherFormLocation().then(function(data) {
        vm.weather = data;
        return weatherBroadcast(data);
      });
      return vm.weatherPromise;
    });

    function weatherBroadcast(x) {
      $scope.$broadcast('AnimateWeather', vm.weather);
    }
  }
})();
