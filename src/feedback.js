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
