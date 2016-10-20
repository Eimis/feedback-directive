/*!
 * feedback-directive
 * 
 * Version: 0.0.3 - 2016-10-20T21:07:56.083Z
 * License: MIT
 */


'use strict';

angular.module('feedback.module', ['ngAnimate'])
	.directive('feedback', function () {
		return {
			scope: {
				callback: '='
			},
			restrict: 'AE',
			templateUrl: 'feedback.html',
			replace: true,
			controller: function($scope, $q) {
				$scope.toggleTabVisibility = function() {
					// TODO use angular-animation to do the toggle
					$("#feedback-form").toggle("slide");
				};

				$scope.submit = function() {
					$scope.data = {
						email: $scope.feedbackEmail,
						content: $scope.feedbackContent
					};
					if ($scope.callback) {
						$scope.callback($scope.data);
						$("#feedback-form").toggle("slide"); // Close form
					}
				};

			},
			link: function ($scope) {
			}
		};
	});

angular.module("feedback.module").run(["$templateCache", function($templateCache) {$templateCache.put("feedback.html","<div id=\"feedback\"><div id=\"feedback-form\" ng-submit=\"submit()\" class=\"animate-show\"><form class=\"form panel-body\" role=\"form\"><div class=\"form-group\"><input class=\"form-control\" ng-model=\"feedbackEmail\" name=\"email\" autofocus=\"\" placeholder=\"Your e-mail (optional)\" type=\"email\"></div><div class=\"form-group\"><textarea class=\"form-control\" name=\"body\" ng-model=\"feedbackContent\" required=\"\" placeholder=\"Feedback us!\" rows=\"5\">\n            </textarea></div><button class=\"btn btn-primary pull-right\">Send</button></form></div><div id=\"feedback-tab\" ng-click=\"toggleTabVisibility()\">Feedback</div></div>");}]);