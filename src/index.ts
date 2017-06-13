/**
 * Import the polyfills and vendor files
 */
import './polyfills';
import './vendor';

/**
 * Temporary Import angular
 * see: https://github.com/Microsoft/TypeScript/issues/10178
 */
import * as angular from 'angular';

/**
 *  Import module to be bootstrapped
 */
import { mdZippyModule } from './component/zippy.module';

/**
 * Bootstrap the application using the imported moduleName
 */
const bootstrapModuleName = angular.module('application.bootstrap', [mdZippyModule]).name;

angular.element(function() {
  angular.bootstrap(document, [bootstrapModuleName]);
});
