(function() {
  'use strict';

  angular
    .module('jmac')
    .controller('ModalInstanceController', ModalInstanceController);

    function ModalInstanceController($scope, $uibModalInstance, items) {
      var vm = this;
      vm.items = items;
      vm.selected = {
        item: $scope.items[0]
      };

      vm.ok = function () {
        $uibModalInstance.close(vm.selected.item);
      };

      vm.cancel = function () {
        $uibModalInstance.dismiss('cancel');
      };
    }
})();
