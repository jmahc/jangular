(function() {
  'use strict';

  angular
    .module('jmac')
    .directive('ccWeatherAnimation', ccWeatherAnimation);

  /** @ngInject */
  function ccWeatherAnimation() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/weather-animation/weather-animation.html',
      scope: {
          creationDate: '='
      },
      controller: WeatherAnimationController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function WeatherAnimationController($log, weatherForm, $scope) {
      var vm = this;

      vm.weather = {};
      vm.showAnimation = false;

      $scope.$on('AnimateWeather', function (object) {
        vm.weather = object;
        vm.showAnimation = true;
        $log.debug("Yo we got the object: " + object);
      });
    }
  }

})();
