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
