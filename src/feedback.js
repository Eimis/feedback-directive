'use strict';

angular.module('feedback.module', ['ngAnimate'])
	.directive('feedback', function () {
		return {
			restrict: 'AE',
			templateUrl: 'feedback.html',
			replace: true,
			link: function ($scope) {
				$scope.tabVisible = false;

				$scope.toggleTabVisibility = function() {
					$("#feedback-form").toggle("slide");
					//$scope.tabVisible = !$scope.tabVisible;
				};
			}
		};
	})
	//.animation('.animate-show', function() {
	//	var NG_HIDE_CLASS = 'ng-hide';
	//	var DURATION = 500;
	//	return {
	//		beforeAddClass: function(element, className, done) {
	//			if(className === NG_HIDE_CLASS) {
	//				jQuery(element).toggle(DURATION, done);
	//			}
	//			//done();
	//		},
	//		removeClass: function(element, className, done) {
	//			if(className === NG_HIDE_CLASS) {
	//				jQuery(element).toggle(DURATION, done);
	//			}
	//			//done();
	//		}
	//	};
	//})
;
