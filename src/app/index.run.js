(function() {
  'use strict';

  angular
    .module('jmac')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
