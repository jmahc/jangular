(function () {
  'use strict';

  angular
  .module('jmac')
  .controller('ModalController', ModalController);

  function ModalController($scope, $uibModal, $log) {
    var vm = this;
    vm.items = ['item1', 'item2', 'item3'];
    vm.animationsEnabled = true;
    vm.open = function (size) {
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'app/components/modal/modal.html',
        controller: 'ModalInstanceController',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
      modalInstance.result.then(function (selectedItem) {
        vm.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
    vm.toggleAnimation = function () {
      vm.animationsEnabled = !vm.animationsEnabled;
    };
  }
})();
