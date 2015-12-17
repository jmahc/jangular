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
        controllerAs: 'home'
      })
      .state('main', {
        url: '/main',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('weather', {
        url: '/weather',
        templateUrl: 'app/weather/weather.html',
        controller: 'WeatherController',
        controllerAs: 'weather'
      })
      .state('notation', {
        url: '/notation',
        templateUrl: 'app/notation/notation.html',
        controller: 'NotationController',
        controllerAs: 'notation'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
