/*!
 * angular-directive-boilerplate
 * 
 * Version: 0.0.8 - 2016-10-11T20:16:33.454Z
 * License: MIT
 */


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

angular.module("feedback.module").run(["$templateCache", function($templateCache) {$templateCache.put("feedback.html","<div id=\"feedback\"><div id=\"feedback-form\" class=\"animate-show\"><form method=\"POST\" action=\"/feedback\" class=\"form panel-body\" role=\"form\"><div class=\"form-group\"><input class=\"form-control\" name=\"email\" autofocus=\"\" placeholder=\"Your e-mail\" type=\"email\"></div><div class=\"form-group\"><textarea class=\"form-control\" name=\"body\" required=\"\" placeholder=\"Please write your feedback here...\" rows=\"5\">\n                \n            </textarea></div><button class=\"btn btn-primary pull-right\" type=\"submit\">Send</button></form></div><div id=\"feedback-tab\" ng-click=\"toggleTabVisibility()\">Feedback</div></div>");}]);