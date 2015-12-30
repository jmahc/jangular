export function WeatherAnimationDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/weather-animation/weather-animation.html',
    controller: WeatherAnimationController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class WeatherAnimationController {
  constructor ($scope) {
    'ngInject';

    var vm = this;
    vm.tod = "day",
    vm.$userLocation = angular.element('.weather-location'),
    vm.currentW,
    vm.$currentText,
    vm.$light,
    vm.$sky,
    vm.$squig,
    vm.$cloud,
    vm.cloudDiv;
    vm.weather = {};
    vm.showAnimation = false,
    vm.nightTime = "19:20",
    vm.morningTime = "06:20";

    vm.getSelectors = function() {
      vm.$currentText = angular.element('.weather-current'),
      vm.$light = angular.element('.light'),
      vm.$sky = angular.element('.sky'),
      vm.$squig = angular.element('.squiggle-container'),
      vm.$cloud = angular.element('.clouds'),
      vm.cloudDiv = "<div class='cloud'></div>";
    }

    Date.prototype.timeNow = function() {
      return ((this.getHours() < 10) ? "0" : "") + this.getHours() + ":" + ((this.getMinutes() < 10) ? "0" : "") + this.getMinutes();
    }

    $scope.$on('AnimateWeather', function (e, object) {
      vm.weather = object[0];
      vm.showAnimation = true;
      vm.populate(vm.$userLocation);
    });
  }

  populate($userLocation, $currentText, tod, currentW) {
    this.$userLocation.text('Current weather for ' + this.weather.location.name);
    this.getSelectors();
    this.getWeatherWithTime($currentText, tod, currentW);
  }

  getWeatherWithTime($currentText, tod, $log, _) {
    this.$currentText.text(this.weather.current.condition.text + ' during the ' + this.tod);
    this.currentW = this.weather.current.condition.text;

    var xuCode = _.where(this.weather, function(e) {
      return e.code == this.weather.current.condition.code;
    });

    var code = {};
    code = xuCode[0];

    var t = this.isDay();
    this.cloudAmount();

    if (t === true) {
      $log.debug('Yes, it ISDAY');
      return code.day;
    } else {
      $log.debug('NO, it IS NOT DAY');
      tod = "night";
      return code.night;
    }
  }

  isDay($light, $sky, $squig) {
    var localTime = this.weather.location.localtime.split(' ')[1];
    angular.element('.centered.animation').show();
    if (localTime.length === 4) {
      localTime = "0" + localTime;
    }

    if (localTime >= this.nightTime) {
      $light.addClass('moon');
      $sky.addClass('night');
      return false;
    } else if (localTime <= this.morningTime) {
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

  cloudAmount(currentW, $cloud, $sky, cloudDiv) {
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
