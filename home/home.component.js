function HomeController(homeService) {
  this.name = {
    firstName: 'Home',
    lastName: 'Component'
  };
  this.idFromChild = 0;
  this.users = [];

  this.$onInit = function() {
    console.log(this.name);
    homeService.fetchData().then(response => {
      this.users = response.data;
    });
  };

  this.onCallParentCallback = id => {
    this.idFromChild = id;
  };
}

const HomeComponent = {
  controller: ['homeService', HomeController],
  templateUrl: './home.template.html',
  bindings: {}
};
export { HomeComponent };
