import angular from 'angular';

let homeModule = angular.module('homeApp', []);

import { UserDetail } from './user/user-detail.component';
import { HomeComponent } from './home.component';
import { ChildComponent } from './child/child.component';

homeModule.component('home', HomeComponent);
homeModule.component('child', ChildComponent);
homeModule.component('userDetail', UserDetail);

export default homeModule;
