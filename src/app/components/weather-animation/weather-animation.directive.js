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
    function WeatherAnimationController($log) {
      var vm = this;
    }
  }

})();
