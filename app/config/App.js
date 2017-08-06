angular.module("nunuAPP")
.controller('App', function($scope, Services) {
	$scope.pageLoad = true;
	if(Services.isLoggedIn()){
		// Redirect If LogedIn >>>>>
		window.location = "#/app/dashboard";
		// <<<<<<<<<<<<<<<<<<<<<<<<<

        $scope.user = Services.getUser();

        $scope.closeAlert = function(index) { $scope.alerts.splice(index, 1); };

        $scope.logout = function() {
        	Services.logout();
        	window.location = "#/login";
        }
    } else {
    	window.location = "#/login";
    }
});
