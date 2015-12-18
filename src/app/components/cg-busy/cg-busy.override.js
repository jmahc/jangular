(function() {
  'use strict';

  angular.module('jmac')
    .value('cgBusyDefaults', {
      message: null,
      backdrop: true,
      templateUrl: 'app/components/cg-busy/cg-busy.html',
      delay: 0,
      minDuration: 0
    });
})();
