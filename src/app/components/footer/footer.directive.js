export function FooterDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/footer/footer.html',
    scope: {
        creationDate: '='
    },
    controller: FooterController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class FooterController {
  constructor (footerContent) {
    'ngInject';

    var vm = this;
    vm.footerItems = [];

    vm.activate(footerContent);
  }

  activate($log, footerContent) {
    return footerContent.getFooterItems().then(function() {
      $log.info('Activated Footer View');
    });
  }
  getFooterItems(footerContent) {
    return footerContent.getFooterItems().then(function(data) {
      this.footerItems = data;
      return this.footerItems;
    });
  }
}
