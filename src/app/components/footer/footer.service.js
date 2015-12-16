(function() {
  'use strict';

  angular
      .module('jmac')
      .service('Footer', Footer);

    function Footer($resource) {
      return $resource('./app/components/footer/footer.json', {}, {
        query: {method:'GET', params:{footerId:'footers'}, isArray:true}
      });
    }
})();
