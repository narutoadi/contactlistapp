function AppCtrl ($scope, $http){
	console.log("Hello World from controller");

var refresh = function(){
$http.get('/contactlist').success(function (response) {
	// body...
	console.log("I got the data i requested.");
	$scope.contactlist=response;
	$scope.contact = '';
});
};

	refresh();

$scope.addContact = function () {
	// body...
	console.log($scope.contact);
	$http.post('/contactlist', $scope.contact);
	refresh();
};

$scope.remove = function(id){
	console.log(id);
	$http.delete('/contactlist/' + id).success(function(response){
		refresh();
	});
};

$scope.edit = function(id) {
	console.log(id);
	$http.get('/contactlist/' + id).success(function(response){
		$scope.contact = response;
	});
};

$scope.update = function() {
	console.log($scope.contact._id);
	$http.put('/contactlist/' + $scope.contact._id, $scope.contact).success(function(response){
		 refresh();
	});
};

$scope.clear = function() {
	$scope.contact = "";
};

}