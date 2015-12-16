(function() {
  'use strict';

  angular
    .module('jmac')
    .directive('videoBanner', videoBanner);

  /** @ngInject */
  function videoBanner() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/video/video.html',
      controller: VideoController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function VideoController() {
      //video scaling
      scaleVideoContainer();
      initBannerVideoSize('.video-container .poster img');
      initBannerVideoSize('.video-container .filter');
      initBannerVideoSize('.video-container video');

      angular.element(window).on('resize', function() {
        console.log('anything?')
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
      });

      function scaleVideoContainer() {
        var height = angular.element(window).height() + 5;
        var unitHeight = parseInt(height) + 'px';
        angular.element(".homepage-hero-module").css('height', unitHeight);
      }

      function initBannerVideoSize(element) {

        angular.element(element).each(function() {
          angular.element(this).data('height', angular.element(this).height());
          angular.element(this).data('width', angular.element(this).width());
        });
        scaleBannerVideoSize(element);
      }

      function scaleBannerVideoSize(element) {

        var windowWidth = angular.element(window).width(),
          windowHeight = angular.element(window).height() + 5,
          videoWidth,
          videoHeight;
        var windowRatio = windowHeight / windowWidth;

        angular.element(element).each(function() {
          var videoAspectRatio = angular.element(this).data('height') / angular.element(this).data('width');

          angular.element(this).width(windowWidth);

          if (windowWidth < 1000) {
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;

            if (angular.element(this).hasClass('no-stretch')) {
              var increase = 300;
              var newW = videoWidth + increase;
              var newH = (newW * videoHeight) / videoWidth;
              videoWidth = newW;
              videoHeight = newH;

              angular.element(this).css({
                'margin-top': 0,
                'margin-left': -(videoWidth - windowWidth) / 2 + 'px'
              });

            }
            angular.element(this).width(videoWidth).height(videoHeight);
          } else if (windowWidth > 1000) {
            if (windowRatio < 0.8 && windowRatio > 0.58) {
              videoHeight = windowHeight;
              videoWidth = videoHeight / videoAspectRatio;
              videoWidth = (videoHeight / videoAspectRatio) + 200;

              angular.element(this).css({
                'margin-top': 0,
                'margin-left': -(videoWidth - windowWidth) / 2 + 'px'
              });
              angular.element(this).width(videoWidth).height(videoHeight);
            }
          }

          angular.element('.homepage-hero-module .video-container video').addClass('fadeIn animated');
        });
      }

      return;
    }
  }

})();
