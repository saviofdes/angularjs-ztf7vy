function HomeController(homeService) {
  this.name = {
    firstName: 'Home',
    lastName: 'Component'
  };
  this.idFromChild = 0;

  this.$onInit = function() {
    console.log(this.name);
    homeService.fetchData();
  };

  this.onCallParentCallback = id => {
    this.idFromChild = id;
  };
}

const HomeComponent = {
  controller: ['homeService', HomeController],
  templateUrl: './home.html',
  bindings: {}
};
angular.module('homeApp').component('home', HomeComponent);
