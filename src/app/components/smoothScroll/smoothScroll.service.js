// (function() {
//   'use strict';
//
// angular
//   .module('jmac')
//   .service('anchorSmoothScroll', anchorSmoothScroll);
//
//   function anchorSmoothScroll($timeout, $log) {
//     var vm = this;
//     $log.debug("Was this hit?? 2")
//     vm.scrollTo = function(eID) {
//       $log.debug("Was this hit??3 + " + eID)
//
//         // This scrolling function
//         // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
//         var startY = currentYPosition();
//         var stopY = elmYPosition(eID);
//         var distance = stopY > startY ? stopY - startY : startY - stopY;
//         if (distance < 100) {
//             scrollTo(0, stopY); return;
//         }
//         var speed = Math.round(distance / 100);
//         if (speed >= 20) speed = 20;
//         var step = Math.round(distance / 25);
//         var leapY = stopY > startY ? startY + step : startY - step;
//         var timer = 0;
//         if (stopY > startY) {
//             for ( var i = startY; i < stopY; i += step ) {
//                 $timeout("window.scrollTo(0, "+leapY+")", timer * speed);
//                 leapY += step; if (leapY > stopY) leapY = stopY; timer++;
//             } return;
//         }
//         for ( var p = startY; p > stopY; p -= step ) {
//             $timeout("window.scrollTo(0, "+leapY+")", timer * speed);
//             leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
//         }
//
//         function currentYPosition() {
//             // Firefox, Chrome, Opera, Safari
//             if (self.pageYOffset) return self.pageYOffset;
//             // Internet Explorer 6 - standards mode
//             if (angular.element(document) && angular.element(document).scrollTop)
//                 return angular.element(document).scrollTop;
//             // Internet Explorer 6, 7 and 8
//             if (angular.element('body').scrollTop) return angular.element('body').scrollTop;
//             return 0;
//         }
//
//         function elmYPosition(eID) {
//             var elm = angular.element(eID);
//             var y = elm.offsetTop;
//             var node = elm;
//             while (node.offsetParent && node.offsetParent != angular.element('body')) {
//                 node = node.offsetParent;
//                 y += node.offsetTop;
//             } return y;
//         }
//
//     }
//   }
// })();
