var app = angular.module('myApp',[]);

app.controller('firstCtrl',function($scope){
    $scope.name='sachin';
    $scope.salary=10000;
});

app.controller('secCtrl', function($scope, $http){
	$http.get("../home.json")
    .then(function (response) {$scope.names = response.data.records;});
});

app.controller('thirdCtrl', function($scope) {
    $scope.names = ["Front page", "Home"];
    $scope.links = ["/index","/home"];
});

app.controller('fourthCtrl', function($scope){
	$scope.mySwitch=true;
});

app.controller('fifthCtrl', function($scope){
	$scope.showMe=false;
	$scope.myFunc = function(){
		$scope.showMe= !$scope.showMe;
	}
});

app.controller('sixthCtrl', function(){
	$scope.buttons=["btn btn-primary", "btn btn-success", "btn btn-info", "btn btn-warning", "btn btn-link" , "btn btn-warning"];
});