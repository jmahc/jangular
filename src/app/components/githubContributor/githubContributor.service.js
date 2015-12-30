export class GithubContributorService {
  constructor ($log, $http) {
    'ngInject';

    var vm = this;

    vm.$log = $log;
    vm.$http = $http;
    vm.apiHost = 'https://api.github.com/repos/Swiip/generator-gulp-angular';
  }

  getContributors(limit) {
    if (!limit) {
      limit = 30;
    }

    return this.$http.get(this.apiHost + '/contributors?per_page=' + limit)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        this.$log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      });
  }
}
