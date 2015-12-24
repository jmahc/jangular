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
      controller: WeatherAnimationController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function WeatherAnimationController($log, weatherForm, $scope, _) {
      //Vars
      var vm = this,
          tod = "day",
          $userLocation = angular.element('.weather-location'),
          currentW,
          $currentText,
          $light,
          $sky,
          $squig,
          $cloud,
          cloudDiv;
      vm.weather = {};
      vm.showAnimation = false,
      vm.nightTime = "19:20",
      vm.morningTime = "06:20",

      //Selectors
      vm.getSelectors = function() {
        $currentText = angular.element('.weather-current'),
        $light = angular.element('.light'),
        $sky = angular.element('.sky'),
        $squig = angular.element('.squiggle-container'),
        $cloud = angular.element('.clouds'),
        cloudDiv = "<div class='cloud'></div>";
      }
      //Date object
      Date.prototype.timeNow = function() {
        return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes();
      }

      $scope.$on('AnimateWeather', function (e, object) {
        vm.weather = object[0];
        vm.showAnimation = true;
        populate();
      });

      function populate() {
        $userLocation.text('Current weather for ' + vm.weather.location.name);
        vm.getSelectors();
        getWeatherWithTime();
      }

      //Get weather depending on the time of day
      function getWeatherWithTime() {
        $currentText.text(vm.weather.current.condition.text + ' during the ' + tod);
        currentW = vm.weather.current.condition.text;

        var xuCode = _.where(vm.weather, function(e) {
          return e.code == vm.weather.current.condition.code;
        });

        var code = {};
        code = xuCode[0];

        var t = isDay();
        cloudAmount();

        if (t === true) {
          $log.debug('Yes, it ISDAY');
          return code.day;
        } else {
          $log.debug('NO, it IS NOT DAY');
          tod = "night";
          return code.night;
        }
      }

      //Determine Sky color
      function isDay() {
        var localTime = vm.weather.location.localtime.split(' ')[1];
        angular.element('.centered.animation').show();
        if (localTime.length === 4) {
          localTime = "0" + localTime;
        }

        if (localTime >= vm.nightTime) {
          $light.addClass('moon');
          $sky.addClass('night');
          return false;
        } else if (localTime <= vm.morningTime) {
          $light.addClass('moon');
          $sky.addClass('night');
          return false;
        } else {
          $light.addClass('sun');
          $squig.show();
          $sky.addClass('day');
          return true;
        }
      }

      //Determine the amount of clouds and if overcast
      function cloudAmount() {
        var c = currentW.toLowerCase();
        if ((c.indexOf("overcast") > -1)) {
          $cloud.addClass('cloudy');
          $sky.addClass('overcast');
          for (var i = 1; i < 8; i++) {
            $cloud.append(cloudDiv);
          }
        } else if (c.indexOf("cloudy") > -1) {
          $cloud.addClass('cloudy');
          for (var j = 1; j < 12; j++) {
            $cloud.append(cloudDiv);
          }
        } else if (c.indexOf("partly") > -1) {
          $cloud.addClass('cloudy');
          for (var k = 1; k < 5; k++) {
            $cloud.append(cloudDiv);
          }
        }
      }
    }
  }
})();
