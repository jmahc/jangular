/* global malarkey:false, moment:false, _:false */

//Index
import { config } from './app/index.config.js';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
//Controllers from pages
import { HomeController } from './home/home.controller';
import { MainController } from './main/main.controller';
import { ModalController } from '../app/components/modal/modal.controller';
import { NotationController } from './notation/notation.controller';
import { WeatherController } from './weather/weather.controller';
//Services
import { AboutService } from '../app/components/about/about.service';
import { ConverterService } from '../app/components/converter/converter.service';
import { FooterService } from '../app/components/footer/footer.service';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { GreetingsService } from '../app/components/greetings/greetings.service';
import { NavbarService } from '../app/components/navbar/navbar.service';
import { PortfolioService } from '../app/components/portfolio/portfolio.service';
import { VideoService } from '../app/components/video/video.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
//Directives
import { AboutDirective } from '../app/components/about/about.directive';
import { ConverterDirective } from '../app/components/converter/converter.directive';
import { FooterDirective } from '../app/components/footer/footer.directive';
import { GreetingsDirective } from '../app/components/greetings/greetings.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { PortfolioDirective } from '../app/components/portfolio/portfolio.directive';
import { VideoDirective } from '../app/components/video/video.directive';
import { WeatherAnimationDirective } from '../app/components/weather-animation/weather-animation.directive';
import { WeatherFormDirective } from '../app/components/weather-form/weather-form.directive';
import { WelcomeDirective } from '../app/components/welcome/welcome.directive';

angular.module('jmac', ['ngAnimate',
                  'ngCookies',
                  'ngTouch',
                  'ngSanitize',
                  'ngMessages',
                  'ngAria',
                  'ngResource',
                  'ui.router',
                  'ui.bootstrap',
                  'toastr'])
  //Constants
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .constant('_', _)
  //Config
  .config(config)
  .config(routerConfig)
  //Run
  .run(runBlock)
  //Services
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('aboutContent', AboutService)
  .service('converterContent', ConverterService)
  .service('footerContent', FooterService)
  .service('greetingsContent', GreetingsService)
  .service('navbarContent', NavbarService)
  .service('portfolioContent', PortfolioService)
  .service('videoContent', VideoService)
  //Controllers
  .controller('HomeController', HomeController)
  .controller('MainController', MainController)
  .controller('ModalController', ModalController)
  .controller('NotationController', NotationController)
  .controller('WeatherController', WeatherController)
  //Directives
  .directive('ccAbout', AboutDirective)
  .directive('ccConverter', ConverterDirective)
  .directive('ccFooter', FooterDirective)
  .directive('ccGreetings', GreetingsDirective)
  .directive('acmeMalarkey', MalarkeyDirective)
  .directive('ccNavbar', NavbarDirective)
  .directive('ccPortfolio', PortfolioDirective)
  .directive('ccVideo', VideoDirective)
  .directive('ccWeatherAnimation', WeatherAnimationDirective)
  .directive('ccWeatherForm', WeatherFormDirective)
  .directive('ccWelcome', WelcomeDirective);
