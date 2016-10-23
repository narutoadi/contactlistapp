function AppCtrl ($scope, $http){
	console.log("Hello World from controller");

$http.get('/contactlist').success(function (response) {
	// body...
	console.log("I got the data i requested.");
	$scope.contactlist=response;
});

}