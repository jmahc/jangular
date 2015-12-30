export function AboutDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/about/about.html',
    scope: {},
    controller: AboutController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class AboutController {
  constructor (aboutContent) {
    'ngInject';

    var vm = this;

    vm.aboutMe = [];
    vm.activate(aboutContent);
  }

  activate(aboutContent, $log) {
    return this.aboutContent.getAbout().then(function() {
      $log.info('Activated About Me View');
    });
  }

  getAbout(aboutContent) {
    return aboutContent.getAboutMe().then(function(data) {
      this.aboutMe = data;
      return this.aboutMe;
    });
  }
}
