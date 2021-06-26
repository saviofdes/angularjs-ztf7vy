function HomeService($http) {
  this.fetchData = function() {
    return $http.get('https://jsonplaceholder.typicode.com/users');
  };
}

angular.module('homeApp').service('homeService', ['$http', HomeService]);
