var app = angular.module('demo', ['ngSanitize', 'feedback.module'])
.controller("demoController", ["$scope", function($scope){
	$scope.doSomething = function(data) {
		console.log("Doing something...");
		if (data)
			console.log(data);
	}
}]);