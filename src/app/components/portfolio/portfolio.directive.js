export function PortfolioDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/portfolio/portfolio.html',
    scope: {
        creationDate: '='
    },
    controller: PortfolioController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class PortfolioController {
  constructor (portfolioContent) {
    'ngInject';

    var vm = this;

    vm.portfolioItems = [];

    vm.activate(portfolioContent);
  }

  activate(portfolioContent, $log) {
    return portfolioContent.getPortfolioItems()
      .then(function() {
        $log.info('Activated Portfolio View');
      });
  }

  getPortfolioItems(portfolioContent) {
    return portfolioContent.getPortfolioItems()
      .then(function(data) {
        this.portfolioItems = data;
        return this.portfolioItems;
      });
  }
}
