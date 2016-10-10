'use strict';

angular.module('feedback.module', ['ngAnimate'])
	.directive('feedback', function () {
		var value = 0;

		return {
			restrict: 'AE',
			templateUrl: 'feedback.html',
			replace: true,
			link: function ($scope) {
				$scope.tabVisible = false;

				$scope.toggleTabVisibility = function() {
					$scope.tabVisible = !$scope.tabVisible;
				};

				$scope.getValue = function () {
					return value;
				};
				$scope.increment = function () {
					value++;
				};
			}
		};
	})
	.animation('.animate-show', function() {
		var NG_HIDE_CLASS = 'ng-hide';
		var DURATION = 500;
		return {
			addClass: function(element, className, done) {
				if(className === NG_HIDE_CLASS) {
					jQuery(element).slideToggle(DURATION, done);
				}
				//done();
			},
			removeClass: function(element, className, done) {
				if(className === NG_HIDE_CLASS) {
					jQuery(element).slideToggle(DURATION, done);
				}
				//done();
			}
		};
	});
