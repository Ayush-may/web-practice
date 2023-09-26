var app = angular.module( 'app',["ngRoute"] );

app.config(function($routeProvider){
	$routeProvider
	.when('/student',{
		templateUrl: "views/student.html"
	})
	.when('/branch',{
		templateUrl:"branch.jsp"
	})
});

app.controller('todo', function($scope){
	$scope.to = 6;
});