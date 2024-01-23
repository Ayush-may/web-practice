var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when("/createQuiz",{
		templateUrl: "view/createQuiz.html"
	})
	.when("/addQuestions",{
		templateUrl : "view/addQuestion.html"
	});
})

app.controller('ctrl',function($scope,$rootScope,$http){
	$scope.quiz = [];
	$scope.hideThis = true;
	$scope.disableFlag = true;
	$scope.tempData = [];

	$scope.checKInput = ()=>{
		if( $scope.authorNameInput == "" && $scope.typeInput == "" ){
			$scope.disableFlag = true;
			return;
		}
		else{
			$scope.disableFlag = false;
		}
	}

	$scope.addAuthor = ()=>{
		$scope.tempData = {
			author : $scope.authorNameInput,
			type : $scope.typeInput,
			data : []
		}
		// $scope.authorNameInput = $scope.typeInput = "";
		$scope.quiz.push( tempData );
		console.log( $scope.quiz );
	}
});

