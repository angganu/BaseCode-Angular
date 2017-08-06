angular.module("nunuAPP")
.controller('DashboardController', function($scope,Constant,Services) {
    $scope.user = Services.getUser();
    if(Services.isLoggedIn()){
        $scope.pageLoad = false;

    } else {
        $scope.pageLoad = false;
        window.location = "#/login";
    }
});
