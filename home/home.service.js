function HomeService() {
  this.fetchData = function() {
    console.log('data fetched');
  };
}

angular.module('homeApp').service('homeService', HomeService);
