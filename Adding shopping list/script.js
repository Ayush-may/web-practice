var app = angular.module('app',[]);
app.controller('ctrl',function($scope){
	$scope.products = [];
	$scope.hideThis = true;
	$scope.totalPrice = 0;

	$scope.hide = () =>{
		if( $scope.products.length != 0 ){
			$scope.hideThis = false;
		}
		else{
			$scope.hideThis = true;		
		}
	}

	$scope.removeItem = (x)=>{
		$scope.totalPrice -= $scope.products[x].price;
		$scope.products.splice(x,1);
		window.print();
	}	

	$scope.addItem = ()=>{
		$scope.products.unshift( {
			name : $scope.item,
			price : $scope.price
		});
		$scope.totalPrice +=$scope.price;
		$scope.item  = $scope.price = "";
		$scope.hide();
	}

})