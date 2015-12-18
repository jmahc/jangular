(function() {
  'use strict';

  angular
    .module('jmac')
    .directive('ccNotationConverter', ccNotationConverter);

  /** @ngInject */
  function ccNotationConverter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/converter/converter.html',
      controller: NotationConverterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NotationConverterController() {
      var vm = this;
    }
  }

})();
