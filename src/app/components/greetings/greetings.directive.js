(function() {
  'use strict';

  angular
    .module('jmac')
    .directive('ccGreetings', ccGreetings);

  /** @ngInject */
  function ccGreetings(malarkey) {
    var directive = {
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
      var watcher;
      var typist = malarkey(el[0], {
        typeSpeed: 40,
        deleteSpeed: 40,
        pauseDelay: 800,
        loop: true,
        postfix: ' '
      });

      el.addClass('greeting-malarkey');

      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause().delete();
      });

      watcher = scope.$watch('vm.greetingItems', function() {
        angular.forEach(vm.greetingItems, function(greeting) {
          typist.type(greeting.greeting).pause().delete();
        });
      });

      scope.$on('$destroy', function () {
        watcher();
      });
    }

    /** @ngInject */
    function GreetingsController($log, greetingsContent) {
      var vm = this;

      vm.greetingItems = [];

      activate();

      function activate() {
        return getGreetingsItems().then(function() {
          $log.info('Activated Greetings View');
        });
      }

      function getGreetingsItems() {
        return greetingsContent.getGreetingsItems().then(function(data) {
          vm.greetingItems = data;

          angular.forEach(vm.greetingItems, function(greetingItem) {
            greetingItem.rank = Math.random();
          });
          return vm.greetingItems;
        });
      }
    }
  }
})();
