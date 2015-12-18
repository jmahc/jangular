(function() {
  'use strict';

  angular
    .module('jmac')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      })
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('weather', {
        url: '/weather',
        templateUrl: 'app/weather/weather.html',
        controller: 'WeatherController',
        controllerAs: 'vm'
      })
      .state('notation', {
        url: '/notation',
        templateUrl: 'app/notation/notation.html',
        controller: 'NotationController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
