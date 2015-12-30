export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {},
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor (navbarContent) {
    'ngInject';

    var vm = this;
    vm.navbarItems = [];

    vm.activate(navbarContent);
  }

  activate(navbarContent, $log) {
    return navbarContent.getNavbarItems().then(function() {
      $log.info('Activated Navbar View');
    });
  }

  getNavbarItems(navbarContent) {
    return navbarContent.getNavbarItems()
      .then(function(data) {
        this.navbarItems = data;
        return this.navbarItems;
      });
  }
}
