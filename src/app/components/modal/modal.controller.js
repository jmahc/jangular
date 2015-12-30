export class ModalController {
  constructor () {
    'ngInject';

    var vm = this;
    vm.items = ['item1', 'item2', 'item3'];
    vm.animationsEnabled = true;

    vm.toggleAnimation();
  }

  toggleAnimation() {
    this.animationsEnabled = !this.animationsEnabled;
  }
}
