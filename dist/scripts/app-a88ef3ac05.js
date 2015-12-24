/******/!function(i){function t(a){if(e[a])return e[a].exports;var n=e[a]={exports:{},id:a,loaded:!1};return i[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}// webpackBootstrap
/******/
var e={};return t.m=i,t.c=e,t.p="",t(0)}([function(i,t){"use strict";!function(){angular.module("jmac",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}()}]),function(){"use strict";angular.module("jmac",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","ui.bootstrap","toastr"])}(),function(){"use strict";function i(){function i(){}var t={restrict:"E",templateUrl:"app/components/welcome/welcome.html",scope:{creationDate:"="},controller:i,controllerAs:"vm",bindToController:!0};return t}angular.module("jmac").directive("ccWelcome",i)}(),function(){"use strict";function i(){function i(){return t}var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"},{key:"jade",title:"Jade",url:"http://jade-lang.com/",description:"Jade is a high performance template engine heavily influenced by Haml and implemented with JavaScript for node.",logo:"jade.png"}];this.getTec=i}angular.module("jmac").service("webDevTec",i)}(),function(){"use strict";function i(i,t){function e(i){var t="success";return""!=i?n=i:t="error",t}function a(){function e(i){return i.data}function a(t){i.error("XHR Failed for getWeatherFormLocation.\n"+angular.toJson(t.data,!0))}var o=n;return i.debug("Api + query = "+o),t.get("./assets/data/weather-sample.json").then(e)["catch"](a)}var n="",o={setQueryValue:e,getWeatherFormLocation:a};return o}angular.module("jmac").factory("weatherForm",i),i.$inject=["$log","$http"]}(),function(){"use strict";function i(){function i(i,t,e,a){function n(t){var n=a.setQueryValue(t);e.debug("returned... "+n),"success"===n&&(o.showForm=!1),i.$emit("QuerySet")}var o=this;i.search={},o.showForm=!0,o.weatherSubmit=function(){var t=i.search.city+","+i.search.state+" "+i.search.zip;return e.debug("getLocation()"+t),n(t)}}var t={restrict:"E",templateUrl:"app/components/weather-form/weather-form.html",controller:i,controllerAs:"vm",bindToController:!0};return i.$inject=["$scope","$http","$log","weatherForm"],t}angular.module("jmac").directive("ccWeatherForm",i)}(),function(){"use strict";function i(){function i(i,t,e,a){function n(){f.text("Current weather for "+g.weather.location.name),g.getSelectors(),o()}function o(){v.text(g.weather.current.condition.text+" during the "+h),s=g.weather.current.condition.text;var t=a.where(g.weather,function(i){return i.code==g.weather.current.condition.code}),e={};e=t[0];var n=d();return r(),n===!0?(i.debug("Yes, it ISDAY"),e.day):(i.debug("NO, it IS NOT DAY"),h="night",e.night)}function d(){var i=g.weather.location.localtime.split(" ")[1];return angular.element(".centered.animation").show(),4===i.length&&(i="0"+i),i>=g.nightTime?(c.addClass("moon"),l.addClass("night"),!1):i<=g.morningTime?(c.addClass("moon"),l.addClass("night"),!1):(c.addClass("sun"),u.show(),l.addClass("day"),!0)}function r(){var i=s.toLowerCase();if(i.indexOf("overcast")>-1){m.addClass("cloudy"),l.addClass("overcast");for(var t=1;8>t;t++)m.append(p)}else if(i.indexOf("cloudy")>-1){m.addClass("cloudy");for(var e=1;12>e;e++)m.append(p)}else if(i.indexOf("partly")>-1){m.addClass("cloudy");for(var a=1;5>a;a++)m.append(p)}}var s,v,c,l,u,m,p,g=this,h="day",f=angular.element(".weather-location");g.weather={},g.showAnimation=!1,g.nightTime="19:20",g.morningTime="06:20",g.getSelectors=function(){v=angular.element(".weather-current"),c=angular.element(".light"),l=angular.element(".sky"),u=angular.element(".squiggle-container"),m=angular.element(".clouds"),p="<div class='cloud'></div>"},Date.prototype.timeNow=function(){return(this.getHours()<10?"0":"")+this.getHours()+":"+(this.getMinutes()<10?"0":"")+this.getMinutes()},e.$on("AnimateWeather",function(i,t){g.weather=t[0],g.showAnimation=!0,n()})}var t={restrict:"E",templateUrl:"app/components/weather-animation/weather-animation.html",controller:i,controllerAs:"vm",bindToController:!0};return i.$inject=["$log","weatherForm","$scope","_"],t}angular.module("jmac").directive("ccWeatherAnimation",i)}(),function(){"use strict";function i(i,t,e,a){function n(){function i(i){return i.data}function t(i){a.error("XHR Failed for getVideoItems.\n"+angular.toJson(i.data,!0))}return e.get("./assets/data/video.json").then(i)["catch"](t)}var o={getVideoItems:n};return o}angular.module("jmac").factory("videoContent",i),i.$inject=["$q","$timeout","$http","$log"]}(),function(){"use strict";function i(){function i(i,t,e,a){function n(){return o().then(function(){i.info("Activated Video View")})}function o(){return t.getVideoItems().then(function(i){return v.videoItems=i,v.videoItems})}function d(){i.debug("scaleVideoContainer function is called.");var t=angular.element(window).height()+5,e=parseInt(t)+"px";angular.element(".homepage-hero-module").css("height",e),i.debug("scaleVideoContainer function's unitHeight: "+e)}function r(t){i.debug("initBannerVideoSize function is called and element is: "+t),angular.element(t).each(function(){angular.element(this).data("height",angular.element(this).height()),angular.element(this).data("width",angular.element(this).width())}),s(t)}function s(t){i.debug("scaleBannerVideoSize function is called and element is: "+t);var e,a,n=angular.element(window).width(),o=angular.element(window).height()+5,d=o/n;angular.element(t).each(function(){var i=angular.element(this).data("height")/angular.element(this).data("width");if(angular.element(this).width(n),1e3>n){if(a=o,e=a/i,angular.element(this).hasClass("no-stretch")){var t=300,r=e+t,s=r*a/e;e=r,a=s,angular.element(this).css({"margin-top":0,"margin-left":-(e-n)/2+"px"})}angular.element(this).width(e).height(a)}else n>1e3&&.8>d&&d>.58&&(a=o,e=a/i,e=a/i+200,angular.element(this).css({"margin-top":0,"margin-left":-(e-n)/2+"px"}),angular.element(this).width(e).height(a));angular.element(".homepage-hero-module .video-container video").addClass("fadeIn animated")})}var v=this;v.videoItems=[],n(),e.refresh=a.debounce(function(){v.initVideo()},0),v.initVideo=function(){d(),r(".video-container .poster img"),r(".video-container .filter"),r(".video-container video")},angular.element(window).on("resize",function(){i.debug("Window resizing..."),d(),s(".video-container .poster img"),s(".video-container .filter"),s(".video-container video")})}var t={restrict:"E",templateUrl:"app/components/video/video.html",controller:i,controllerAs:"vm",bindToController:!0};return i.$inject=["$log","videoContent","$scope","_"],t}angular.module("jmac").directive("ccVideoBanner",i)}(),function(){"use strict";function i(i,t,e,a){function n(){function i(i){return i.data}function t(i){a.error("XHR Failed for getPortfolio.\n"+angular.toJson(i.data,!0))}return e.get("./assets/data/portfolio.json").then(i)["catch"](t)}var o={getPortfolioItems:n};return o}angular.module("jmac").service("portfolioContent",i),i.$inject=["$q","$timeout","$http","$log"]}(),function(){"use strict";function i(){function i(i,t){function e(){return a().then(function(){i.info("Activated Portfolio View")})}function a(){return t.getPortfolioItems().then(function(i){return n.portfolioItems=i,n.portfolioItems})}var n=this;n.portfolioItems=[],e()}var t={restrict:"E",templateUrl:"app/components/portfolio/portfolio.html",scope:{creationDate:"="},controller:i,controllerAs:"vm",bindToController:!0};return i.$inject=["$log","portfolioContent"],t}angular.module("jmac").directive("ccPortfolio",i)}(),function(){"use strict";function i(i,t,e,a){function n(){function i(i){return i.data}function t(i){a.error("XHR Failed for getNavbarItems.\n"+angular.toJson(i.data,!0))}return e.get("./assets/data/navbar.json").then(i)["catch"](t)}var o={getNavbarItems:n};return o}angular.module("jmac").factory("navbarContent",i),i.$inject=["$q","$timeout","$http","$log"]}(),function(){"use strict";function i(){function i(i,t){function e(){return a().then(function(){i.info("Activated Navbar View")})}function a(){return t.getNavbarItems().then(function(i){return n.navbarItems=i,n.navbarItems})}var n=this;n.navbarItems=[],e()}var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{},controller:i,controllerAs:"vm",bindToController:!0};return i.$inject=["$log","navbarContent"],t}angular.module("jmac").directive("ccNavbar",i)}(),function(){"use strict";function i(){var i=this;i.items=["item1","item2","item3"],i.animationsEnabled=!0,i.toggleAnimation=function(){i.animationsEnabled=!i.animationsEnabled}}angular.module("jmac").controller("ModalController",i)}(),function(){"use strict";function i(i){function t(t,e,a,n){var o,d=i(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(i){d.type(i).pause()["delete"]()}),o=t.$watch("vm.contributors",function(){angular.forEach(n.contributors,function(i){d.type(i.login).pause()["delete"]()})}),t.$on("$destroy",function(){o()})}function e(i,t){function e(){return a().then(function(){i.info("Activated Contributors View")})}function a(){return t.getContributors(10).then(function(i){return n.contributors=i,n.contributors})}var n=this;n.contributors=[],e()}var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:e,controllerAs:"vm"};return e.$inject=["$log","githubContributor"],a}angular.module("jmac").directive("acmeMalarkey",i),i.$inject=["malarkey"]}(),function(){"use strict";function i(i,t,e,a){function n(){function i(i){return i.data}function t(i){a.error("XHR Failed for getGreetingsItems.\n"+angular.toJson(i.data,!0))}return e.get("./assets/data/greeting.json").then(i)["catch"](t)}var o={getGreetingsItems:n};return o}angular.module("jmac").factory("greetingsContent",i),i.$inject=["$q","$timeout","$http","$log"]}(),function(){"use strict";function i(i){function t(t,e,a,n){var o,d=i(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("greeting-malarkey"),angular.forEach(t.extraValues,function(i){d.type(i).pause()["delete"]()}),o=t.$watch("vm.greetingItems",function(){angular.forEach(n.greetingItems,function(i){d.type(i.greeting).pause()["delete"]()})}),t.$on("$destroy",function(){o()})}function e(i,t){function e(){return a().then(function(){i.info("Activated Greetings View")})}function a(){return t.getGreetingsItems().then(function(i){return n.greetingItems=i,angular.forEach(n.greetingItems,function(i){i.rank=Math.random()}),n.greetingItems})}var n=this;n.greetingItems=[],e()}var a={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:e,controllerAs:"vm"};return e.$inject=["$log","greetingsContent"],a}angular.module("jmac").directive("ccGreetings",i),i.$inject=["malarkey"]}(),function(){"use strict";function i(i,t){function e(e){function n(i){return i.data}function o(t){i.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return e||(e=30),t.get(a+"/contributors?per_page="+e).then(n)["catch"](o)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",n={apiHost:a,getContributors:e};return n}angular.module("jmac").factory("githubContributor",i),i.$inject=["$log","$http"]}(),function(){"use strict";function i(i,t){function e(e){function n(i){return i.data}function o(t){i.error("XHR Failed for getContributors.\n"+angular.toJson(t.data,!0))}return e||(e=30),t.get(a+"/contributors?per_page="+e).then(n)["catch"](o)}var a="https://api.github.com/repos/Swiip/generator-gulp-angular",n={apiHost:a,getContributors:e};return n}angular.module("jmac").factory("notationConverter",i),i.$inject=["$log","$http"]}(),function(){"use strict";function i(){function i(){var i=this;i.x=""}var t={restrict:"E",templateUrl:"app/components/converter/converter.html",controller:i,controllerAs:"vm",bindToController:!0};return t}angular.module("jmac").directive("ccNotationConverter",i)}(),function(){"use strict";function i(i,t,e,a){function n(){function i(i){return i.data}function t(i){a.error("XHR Failed for getFooterItems.\n"+angular.toJson(i.data,!0))}return e.get("./assets/data/footer.json").then(i)["catch"](t)}var o={getFooterItems:n};return o}angular.module("jmac").factory("footerContent",i),i.$inject=["$q","$timeout","$http","$log"]}(),function(){"use strict";function i(){function i(i,t){function e(){return a().then(function(){i.info("Activated Footer View")})}function a(){return t.getFooterItems().then(function(i){return n.footerItems=i,n.footerItems})}var n=this;n.footerItems=[],e()}var t={restrict:"E",templateUrl:"app/components/footer/footer.html",scope:{creationDate:"="},controller:i,controllerAs:"vm",bindToController:!0};return i.$inject=["$log","footerContent"],t}angular.module("jmac").directive("ccFooter",i)}(),function(){"use strict";angular.module("jmac").value("cgBusyDefaults",{message:null,backdrop:!0,templateUrl:"app/components/cg-busy/cg-busy.html",delay:0,minDuration:0})}(),function(){"use strict";function i(i,t,e,a){function n(){function i(i){return i.data}function t(i){a.error("XHR Failed for getPortfolio.\n"+angular.toJson(i.data,!0))}return e.get("./assets/data/about.json").then(i)["catch"](t)}var o={getAboutMe:n};return o}angular.module("jmac").service("aboutContent",i),i.$inject=["$q","$timeout","$http","$log"]}(),function(){"use strict";function i(){function i(i,t){function e(){return a().then(function(){t.info("Activated About Me View")})}function a(){return i.getAboutMe().then(function(i){return n.aboutMe=i,n.aboutMe})}var n=this;n.aboutMe=[],e()}var t={restrict:"E",templateUrl:"app/components/about/about.html",scope:{creationDate:"="},controller:i,controllerAs:"vm",bindToController:!0};return i.$inject=["aboutContent","$log"],t}angular.module("jmac").directive("ccAbout",i)}(),function(){"use strict";function i(i,t){function e(){t.$broadcast("AnimateWeather",a.weather)}var a=this;a.weather=[],t.$on("QuerySet",function(){return a.weatherPromise=i.getWeatherFormLocation().then(function(i){return a.weather=i,e(i)}),a.weatherPromise})}angular.module("jmac").controller("WeatherController",i),i.$inject=["weatherForm","$scope"]}(),function(){"use strict";function i(){var i=this;i.x=""}angular.module("jmac").controller("NotationController",i)}(),function(){"use strict";function i(i,t,e){function a(){o(),i(function(){d.classAnimation="rubberBand"},4e3)}function n(){e.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),d.classAnimation=""}function o(){d.awesomeThings=t.getTec(),angular.forEach(d.awesomeThings,function(i){i.rank=Math.random()})}var d=this;d.awesomeThings=[],d.classAnimation="",d.creationDate=1450215881049,d.showToastr=n,a()}angular.module("jmac").controller("MainController",i),i.$inject=["$timeout","webDevTec","toastr"]}(),function(){"use strict";function i(){function i(i){angular.element(i).each(function(){angular.element("<img/>")[0].src=t})}var t=this;i(["assets/img/web/2-com.png","assets/img/web/bulwark.png","assets/img/web/columbia.png","assets/img/web/cub.png","assets/img/web/horace.png","assets/img/web/red.png","assets/img/web/vf.png","assets/img/web/yanmar.png"])}angular.module("jmac").controller("HomeController",i)}(),function(){"use strict";function i(i,t,e,a){i.debug("runBlock end"),t.$on("$routeChangeSuccess",function(i,t,n,o,d){e.hash()&&a()})}angular.module("jmac").run(i),i.$inject=["$log","$rootScope","$location","$anchorScroll"]}(),function(){"use strict";function i(i,t){i.state("home",{url:"/",templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"vm"}).state("main",{url:"/main",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"vm"}).state("weather",{url:"/weather",templateUrl:"app/weather/weather.html",controller:"WeatherController",controllerAs:"vm"}).state("notation",{url:"/notation",templateUrl:"app/notation/notation.html",controller:"NotationController",controllerAs:"vm"}),t.otherwise("/")}angular.module("jmac").config(i),i.$inject=["$stateProvider","$urlRouterProvider"]}(),function(){"use strict";angular.module("jmac").constant("malarkey",malarkey).constant("moment",moment).constant("_",_)}(),function(){"use strict";function i(i,t){i.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}angular.module("jmac").config(i),i.$inject=["$logProvider","toastrConfig"]}(),angular.module("jmac").run(["$templateCache",function(i){i.put("app/home/home.html",'<cc-navbar></cc-navbar><div ng-controller="HomeController" id="scroll-container" class="home-page"><cc-video-banner></cc-video-banner><div class="row row-offcanvas row-offcanvas-right"><cc-welcome></cc-welcome><cc-about></cc-about><svg id="bigHalfCircle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewbox="0 0 100 100" preserveaspectratio="none"><path d="M0 100 C40 0 60 0 100 100 Z"></path></svg><cc-portfolio></cc-portfolio></div></div><cc-footer></cc-footer>'),i.put("app/main/main.html",'<div class="container"><div><cc-navbar creation-date="vm.creationDate"></cc-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class="lead"><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p ng-class="vm.classAnimation" class="animated infinite"><button type="button" ng-click="vm.showToastr()" class="btn btn-lg btn-success">Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class="row"><div ng-repeat="awesomeThing in vm.awesomeThings | orderBy:\'rank\'" class="col-sm-6 col-md-4"><div class="thumbnail"><img ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}" class="pull-right"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),i.put("app/notation/notation.html",'<div class="home-page"><cc-navbar></cc-navbar><section id="notation"><div class="container centered ts bs"><h3>Scientific Notation Converter</h3><div class="row centered"><cc-notation-converter></cc-notation-converter></div></div><div class="row"></div></section><cc-footer class="weather-footer"></cc-footer></div>'),i.put("app/weather/weather.html",'<cc-navbar></cc-navbar><div cg-busy="vm.weatherPromise" class="home-page"><section id="weather"><div class="container centered ts bs"><cc-weather-animation></cc-weather-animation></div><div class="row"><cc-weather-form></cc-weather-form><div class="row centered"><button id="input_go" style="display: none;" class="btn btn-primary">Check the weather!</button></div></div></section></div><cc-footer class="other-page-footer"></cc-footer>'),i.put("app/components/cg-busy/cg-busy.html",'<div class="loading-indicator"><div class="loading-indicator-body"><i class="fa fa-circle-o-notch fa-spin"></i></div></div>'),i.put("app/components/about/about.html",'<section id="about" class="ts bs"><div class="container intro"><div class="intro-title centered"><h2 class="bs">Full stack web developer with a passion for frontend and UX.</h2></div><div class="intro-blurb"><div class="row"><div class="col-md-6"><p class="lead">My interest in web development originated at a young age while playing the online video game, <strong>Neopets</strong>, where customizing my pet and store\'s HTML page took priority over the actual game.</p><p class="lead">Since then, I have guided this interest into both a career and hobby. I graduated from the University of Alabama in December 2014 with a degree in Management Information Systems. The following month in January 2015, I began working at a marketing firm, 2-COM, where I serve as lead software developer on client sites.</p><p class="lead"><a href="assets/files/McArdle_Jordan_Resume.pdf" target="_blank" class="resume-link">View my resume.</a></p></div><div class="col-md-6 profile-pic-container"><img src="assets/img/current.png" class="profile-pic"></div></div></div></div></section>'),i.put("app/components/converter/converter.html",'<div class="notation-page ts"><div id="dvImportSegments" class="fileupload"><fieldset><legend>Upload your CSV File</legend><input id="txtFileUpload" type="file" name="File Upload" accept=".csv"></fieldset></div><div class="convertme"><a href="#" class="export">Export to CSV</a><table id="myTable"><thead class="table-head"><tr><th>ROWS</th></tr></thead><tbody class="table-body"><tr></tr></tbody></table></div></div>'),i.put("app/components/footer/footer.html",'<footer class="footer"><div class="container centered"><ul><li ng-repeat="footerItem in vm.footerItems"><a href="{{ footerItem.url }}" target="_blank" class="{{ footerItem.title }}"><span class="fa-stack fa-lg faa-parent animated-hover"><i class="fa fa-square-o fa-stack-2x"></i><i class="{{ footerItem.faa }} fa-{{ footerItem.title }} move-me fa fa-stack-1x"></i></span></a></li></ul></div></footer>'),i.put("app/components/modal/modal.html",'<div id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" ng-controller="ModalController" class="modal fade"><div role="document" class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" data-dismiss="modal" aria-label="Close" class="close"><span aria-hidden="true">&times;</span></button><h4 id="myModalLabel" class="modal-title">Hello</h4></div><div class="modal-body"><img src="" class="modal-image"></div><div class="modal-footer"><span class="fake-nav cl-effect-1"><a href="" class="modal-link">http://</a></span></div></div></div></div>'),i.put("app/components/navbar/navbar.html",'<nav data-spy="affix" data-offset-top="0" class="navbar navbar-inverse navbar-fixed-top"><div class="container"><div class="navbar-header"><button type="button" data-menu="offcanvas" data-toggle="offcanvas" data-target="#navbar" aria-expanded="false" aria-controls="navbar" class="navbar-toggle collapsed"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand">Jordan McArdle</a></div><div id="navbar" class="hidden-nav sidebar-offcanvas"><ul class="nav navbar-nav"><li ng-repeat="navbarItem in vm.navbarItems"><a href="{{ navbarItem.href }}" ng-attr-target="{{ navbarItem.target &amp;&amp; \'_blank\' || \'\' }}">{{ navbarItem.text }}</a></li></ul></div></div></nav>'),i.put("app/components/portfolio/portfolio.html",'<section id="projects" class="bs ts"><div class="container centered"><h2>Take a look at some projects that I have worked on</h2></div><div class="row ts"><ul class="portfolio"><li ng-repeat="portfolioItem in vm.portfolioItems" class="portfolio-item circle {{ portfolioItem.classOne }} {{ portfolioItem.classTwo }}"><div class="item-image"><img src="assets/img/clients/{{ portfolioItem.logo }}" class="logo"></div><div class="item-information"><div class="item-background"></div><div class="item-description"><div class="item-details"><h4 data-link="{{portfolioItem.url}}">{{ portfolioItem.name }}</h4><p>{{ portfolioItem.description }}</p></div><div class="item-icons"><div data-toggle="modal" data-target="#myModal" class="icon-modal"><span class="fa-stack fa-lg faa-parent animated-hover"><i class="fa fa-square fa-stack-2x"></i><i class="fa fa-camera fa-stack-1x"></i></span></div></div></div></div></li></ul></div></section>'),i.put("app/components/video/video.html",'<section id="video"><div class="homepage-hero-module"><div class="video-container"><div class="filter no-stretch"></div><video autoplay="" loop="" ng-repeat="videoItem in vm.videoItems" ng-init="refresh()" class="video-js"><source src="{{ videoItem.file }}" type="{{ videoItem.type }}">Your browser does not support the video tag. I suggest you upgrade your browser.</video><div class="poster"><img src="assets/img/location.jpg" alt="" class="no-stretch"></div></div></div></section>'),i.put("app/components/weather-animation/weather-animation.html",'<h3 class="weather-location"></h3><div ng-hide="vm.showAnimation" class="row centered"><div class="weather-animation"><div class="centered animation"><div class="sky"></div><div class="clouds"></div><div class="light"></div><div class="squiggle-container"><span class="squiggles s-top"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span><span class="squiggles s-right"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span><span class="squiggles s-bottom"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span><span class="squiggles s-left"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span><span class="squiggles s-top-right"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span><span class="squiggles s-top-left"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span><span class="squiggles s-bottom-right"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span><span class="squiggles s-bottom-left"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span></div><div class="stars"></div><div class="precipitation"></div><div class="storm"></div><div class="grass"></div><div class="ground"></div></div></div><span class="weather-current"></span></div>'),i.put("app/components/weather-form/weather-form.html",'<div ng-show="vm.showForm" class="user-search-weather form-horizontal centered weather-form"><div class="row centered"><h3>Find your location\'s weather!</h3></div><form class="form-group"><label for="city" class="col-sm-4 control-label">City</label><div class="col-sm-4"><input type="text" ng-model="search.city" ng-change="change(&quot;c&quot;)" placeholder="Enter a city" autofocus="" id="City" class="form-control"></div></form><div class="form-group"><label for="state" class="col-sm-4 control-label">State</label><div class="col-sm-4"><input type="text" ng-model="search.state" ng-change="change(&quot;s&quot;)" placeholder="Enter a state" autofocus="" id="State" class="form-control"></div></div><div class="form-group"><label for="zip" class="col-sm-4 control-label">Zip</label><div class="col-sm-4"><input type="text" ng-model="search.zip" ng-change="change(&quot;z&quot;)" placeholder="Enter a zip code" autofocus="" id="Zip" class="form-control"></div></div><div class="form-group"><div class="col-sm-offset-2 col-sm-8"><button id="lookup_coordinates" ng-click="vm.weatherSubmit()" class="btn btn-success">Go!</button></div></div></div>'),i.put("app/components/welcome/welcome.html",'<section id="home"><div class="welcome"><h5 class="welcome-hello"><cc-greetings></cc-greetings></h5><h5 class="welcome-from">Made with<i class="fa fa-heart"></i> by Jordan McArdle</h5></div><div class="arrow bounce"></div></section>'),i.put("app/components/weather-animation/partials/clouds.html",'<div class="clouds"></div>'),i.put("app/components/weather-animation/partials/grass.html",'<div class="grass"></div>'),i.put("app/components/weather-animation/partials/ground.html",'<div class="ground"></div>'),i.put("app/components/weather-animation/partials/light.html",'<div class="light"></div><div class="squiggle-container"><span class="squiggles s-top"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span><span class="squiggles s-right"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span><span class="squiggles s-bottom"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span><span class="squiggles s-left"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span><span class="squiggles s-top-right"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span><span class="squiggles s-top-left"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span><span class="squiggles s-bottom-right"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span><span class="squiggles s-bottom-left"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></span></div>'),
i.put("app/components/weather-animation/partials/precipitation.html",'<div class="precipitation"></div>'),i.put("app/components/weather-animation/partials/sky.html",'<div class="sky"></div>'),i.put("app/components/weather-animation/partials/stars.html",'<div class="stars"></div>'),i.put("app/components/weather-animation/partials/storm.html",'<div class="storm"></div>')}]);
//# sourceMappingURL=../maps/scripts/app-a88ef3ac05.js.map
