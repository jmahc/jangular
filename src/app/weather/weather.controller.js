export class WeatherController {
  constructor (weatherForm, $scope, weatherBroadcast) {
    'ngInject';
    var vm = this;
    vm.weather = [];

    $scope.$on('QuerySet', function() {
      vm.weatherPromise = weatherForm.getWeatherFormLocation().then(function(data) {
        vm.weather = data;
        return weatherBroadcast(data);
      });
      return vm.weatherPromise;
    });
  }

  weatherBroadcast($scope) {
    $scope.$broadcast('AnimateWeather', this.weather);
  }
}
