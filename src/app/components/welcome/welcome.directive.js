export function WelcomeDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/welcome/welcome.html',
    scope: {},
    controller: WelcomeController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class WelcomeController {
  constructor () {
    'ngInject';
  }
}
