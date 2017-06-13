/** @internal */
import * as angular from 'angular';

import { MdZippyController } from './zippy.controller';

/** @internal */
export const MdZippyComponent: angular.IComponentOptions = {
  bindings: {
    title: '@'
  },
  transclude: true,
  controller: MdZippyController,
  template: `
    <md-list>
      <md-subheader class="md-no-sticky md-primary" ng-click="$ctrl.toggle()" style="outline: none;">
        <div layout="row" layout-align="space-between center">
          <div>{{$ctrl.title}}</div>
          <div>{{$ctrl.active ? '—' : '＋'}}</div>
        </div>
      </md-subheader>
      <md-list-item ng-show="$ctrl.active">
        <div ng-transclude></div>
      </md-list-item>
    </md-list>
  `
};
