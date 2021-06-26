require('angular');
require('./home/home.module');
require('./home/home.component');
require('./home/home.service');
require('./home/child/child.component');
require('./home/user/user-detail.component');
import './style.css';
import './home/user/user-detail.css';

angular.element(function() {
  try {
    angular.bootstrap(document, ['homeApp']);
  } catch (e) {
    console.log(e);
  }
});
