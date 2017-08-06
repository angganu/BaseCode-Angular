angular.module("nunuAPP")
.controller('AuthController', function($scope,Services,Constant, $modal){
	$scope.pageLoad = false;
    $scope.forms = {};  

		$scope.closeAlert = function(index) { $scope.alerts.splice(index, 1); };

    	$scope.act_login = function(isValid) {
            $scope.progress = "loading";

            if (isValid) {
                var data = {};
                data['email'] 	 = $scope.forms.email;
                data['password'] = $scope.forms.password;
                var config = {
                    url: "login",
                    data: data
                };
                Services.execute(config).then(function(get) {
                	$scope.progress = "done";
                    if (get.success) {
                    	Services.saveUser(get.data);
                        window.location = "#/app/dashboard";
                    } else {
                        $scope.alerts = [{type:'danger', msg: get.message}];
                    }

                }, function(error) {
                	$scope.progress = "done";
                    $scope.alerts = [{type:'danger', msg: get.message}];
                });

            } else {
            	$scope.progress = "done";
            	$scope.alerts = [{type:'warning', msg: "Harap Lengkapi Form Input."}];
            }
        }
});
