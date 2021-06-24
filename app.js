require('angular');
require('./home/home.module');
require('./home/home.component');
require('./home/home.service');
require('./home/child/child.component');
import './style.css';

angular.element(function() {
  angular.bootstrap(document, ['homeApp']);
});
