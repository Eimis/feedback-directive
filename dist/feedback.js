/*!
 * angular-directive-boilerplate
 * 
 * Version: 0.0.8 - 2016-10-10T22:05:09.946Z
 * License: MIT
 */


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

angular.module("feedback.module").run(["$templateCache", function($templateCache) {$templateCache.put("feedback.html","<div class=\"the-directive\"><div>The value is {{getValue()}}</div><button ng-click=\"increment()\">+</button><pre>tabVisible: {{tabVisible}}</pre><div id=\"feedback\"><div ng-show=\"tabVisible\" id=\"feedback-form\" class=\"animate-show\"><form method=\"POST\" action=\"/feedback\" class=\"form panel-body\" role=\"form\"><div class=\"form-group\"><input class=\"form-control\" name=\"email\" autofocus=\"\" placeholder=\"Your e-mail\" type=\"email\"></div><div class=\"form-group\"><textarea class=\"form-control\" name=\"body\" required=\"\" placeholder=\"Please write your feedback here...\" rows=\"5\">\n                    \n                </textarea></div><button class=\"btn btn-primary pull-right\" type=\"submit\">Send</button></form></div><div id=\"feedback-tab\" ng-click=\"toggleTabVisibility()\">Feedback</div></div></div>");}]);