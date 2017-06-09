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
    <div class="zippy">
      <div class="title" ng-click="$ctrl.toggle()">{{$ctrl.title}}</div>
      <div ng-show="$ctrl.active">
        <div class="body" ng-transclude></div>
      </div>
    </div>
  `
};
