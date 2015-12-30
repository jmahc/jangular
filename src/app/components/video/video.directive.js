export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/video/video.html',
    controller: VideoController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class VideoController {
  constructor ($log, videoContent, $scope, _) {
    'ngInject';

    var vm = this;
    vm.videoItems = [];

    vm.activate();

    $scope.refresh = _.debounce(function() {
        // Debounce has timeout and prevents multiple calls, so this will be called
        // once the iteration finishes
        vm.initVideo()
    }, 0);

    angular.element(window).on('resize', function() {
      $log.debug('Window resizing...')
      vm.scaleVideoContainer();
      vm.scaleBannerVideoSize('.video-container .poster img');
      vm.scaleBannerVideoSize('.video-container .filter');
      vm.scaleBannerVideoSize('.video-container video');
    });
  }

  activate(videoContent, $log) {
    return videoContent.getVideoItems()
      .then(function() {
        $log.info('Activated Video View');
      });
  }

  getVideoItems(videoContent) {
    return videoContent.getVideoItems().then(function(data) {
      this.videoItems = data;
      return this.videoItems;
    });
  }

  initVideo() {
    this.scaleVideoContainer();
    this.initBannerVideoSize('.video-container .poster img');
    this.initBannerVideoSize('.video-container .filter');
    this.initBannerVideoSize('.video-container video');
  }

  scaleVideoContainer($log) {
    $log.debug("scaleVideoContainer function is called.")
    var height = angular.element(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    angular.element(".homepage-hero-module").css('height', unitHeight);
    $log.debug("scaleVideoContainer function's unitHeight: " + unitHeight)
  }

  initBannerVideoSize(element, $log) {
    $log.debug("initBannerVideoSize function is called and element is: " + element)
    angular.element(element).each(function() {
      angular.element(this).data('height', angular.element(this).height());
      angular.element(this).data('width', angular.element(this).width());
    });
    this.scaleBannerVideoSize(element);
  }

  scaleBannerVideoSize(element, $log) {
    $log.debug("scaleBannerVideoSize function is called and element is: " + element)
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
}
