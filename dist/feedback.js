/*!
 * angular-directive-boilerplate
 * 
 * Version: 0.0.8 - 2016-10-10T13:14:00.384Z
 * License: MIT
 */


'use strict';

angular.module('feedback.module', [])
	.directive('feedback', function () {
		var value = 0;

		return {
			restrict: 'AE',
			templateUrl: 'feedback.html',
			replace: true,
			link: function ($scope) {

				$scope.getValue = function () {
					return value;
				};
				$scope.increment = function () {
					value++;
				};
			}
		};
	});

angular.module("feedback.module").run(["$templateCache", function($templateCache) {$templateCache.put("feedback.html","<div class=\"the-directive\"><div>The value is {{getValue()}}</div><button ng-click=\"increment()\">+</button></div>");}]);