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
			controller: function($scope) {
				$scope.toggleTabVisibility = function() {
					// TODO use angular-animation to do the toggle
					$("#feedback-form").toggle("slide");
				};

				$scope.sendFeedback = function() {
					$scope.data = {
						email: $scope.feedbackEmail,
						content: $scope.feedbackContent
					};
					if ($scope.callback)
						$scope.callback($scope.data);
				};

			},
			link: function ($scope) {
			}
		};
	});
