import * as angular from 'angular';
import * as ngMaterial from 'angular-material';

import { MdZippyComponent } from './zippy.component';

const mdZippyModule = angular.module('md-zippy', [ngMaterial]).component('mdZippy', MdZippyComponent).name;

export { mdZippyModule };
