/* global malarkey:false, moment:false, _:false */
(function() {
  'use strict';

  angular
    .module('jmac')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('_', _);
})();
