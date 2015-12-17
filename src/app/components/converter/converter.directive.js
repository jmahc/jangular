(function() {
  'use strict';

  angular
    .module('jmac')
    .directive('ccConverter', ccConverter);

  /** @ngInject */
  function ccConverter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/converter/converter.html',
      controller: ConverterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function ConverterController(moment) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
