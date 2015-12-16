(function() {
  'use strict';

  angular
    .module('jmac')
    .controller('HomeController', HomeController);

  /** @ngInject */
  function HomeController($timeout, Portfolio, toastr) {
    var vm = this;

    vm.portfolioItems = [];
    vm.classAnimation = '';
    vm.creationDate = 1450215881049;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      getPortfolio();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getPortfolio() {
      vm.portfolioItems = Portfolio.query();

      angular.forEach(vm.portfolioItems, function(portfolioItem) {
        portfolioItem.rank = Math.random();
      });
    }
  }
})();
