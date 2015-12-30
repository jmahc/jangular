export function WeatherFormDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/weather-form/weather-form.html',
    controller: WeatherFormController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class WeatherFormController {
  constructor ($scope, $http, $log) {
    var vm = this;
    $scope.search = {};
    vm.showForm = true;

    vm.weatherSubmit = function() {
      var formData = $scope.search.city + ',' + $scope.search.state + ' ' + $scope.search.zip;
      $log.debug("getLocation()" + formData);
      return vm.setLocation(formData);
    }
  }

  setLocation(data, weatherForm, $log, $scope) {
    var res = this.weatherForm.setQueryValue(this.data);
    $log.debug("returned... " + res)
    if (res === "success") {
      this.showForm = false;
    }
    $scope.$emit('QuerySet');
  }
}
