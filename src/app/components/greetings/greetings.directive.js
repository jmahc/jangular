export function GreetingsDirective(malarkey) {
  'ngInject';

  let directive = {
    restrict: 'E',
    scope: {
      extraValues: '='
    },
    template: '&nbsp;',
    link: linkFunc,
    controller: GreetingsController,
    controllerAs: 'vm'
  };

  return directive;

  function linkFunc(scope, el, attr, vm) {
    let watcher;
    let typist = malarkey(el[0], {
      typeSpeed: 40,
      deleteSpeed: 40,
      pauseDelay: 800,
      loop: true,
      postfix: ' '
    });

    el.addClass('acme-malarkey');

    angular.forEach(scope.extraValues, (value) => {
      typist.type(value).pause().delete();
    });

    watcher = scope.$watch('vm.contributors', () => {
      angular.forEach(vm.contributors, (contributor) => {
        typist.type(contributor.login).pause().delete();
      });
    });

    scope.$on('$destroy', () => {
      watcher();
    });
  }
}

class GreetingsController {
  constructor (greetingsContent) {
    var vm = this;

    vm.greetingItems = [];

    vm.activate(greetingsContent);
  }

  activate(greetingsContent, $log) {
    return greetingsContent.getGreetingsItems().then(function() {
      $log.info('Activated Greetings View');
    });
  }

  getGreetingsItems(greetingsContent) {
    return greetingsContent.getGreetingsItems().then(function(data) {
      this.greetingItems = data;

      angular.forEach(this.greetingItems, function(greetingItem) {
        greetingItem.rank = Math.random();
      });
      return this.greetingItems;
    });
  }
}
