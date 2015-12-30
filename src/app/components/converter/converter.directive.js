export function AboutDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/converter/converter.html',
    controller: NotationConverterController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NotationConverterController {
  constructor () {
    'ngInject';

    var vm = this;

    vm.x = "";
  }
}
