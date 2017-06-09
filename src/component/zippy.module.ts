import * as angular from 'angular';
import * as ngMaterial from 'angular-material';

import { MdZippyComponent } from './zippy.component';

export const MdZippyModule = angular.module('md-zippy', [ngMaterial]).component('mdZippy', MdZippyComponent).name;
