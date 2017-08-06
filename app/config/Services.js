angular.module("nunuAPP")
    .factory('Services', ["$http", "$q", "Constant", "Persistence", function($http, $q, Constant, Persistence) {
        var aUser = Persistence.read(Persistence.PERSISTENCE_KEY.USER_DATA);

        var saveUser = function(user) {
            aUser = user;
            Persistence.writeEncrypted(Persistence.PERSISTENCE_KEY.USER_DATA, aUser);
        }

        var getUser = function() {
            $readDataLocal = Persistence.read(Persistence.PERSISTENCE_KEY.USER_DATA);
            if ($readDataLocal) {
                aUser = Persistence.readEcrypted(Persistence.PERSISTENCE_KEY.USER_DATA);
                return aUser;
            }
            return;
        }

        var isLoggedIn = function() {
            if (this.getUser())
                return true;
            else
                return false;
        }

        var logout = function() {
            Persistence.remove(Persistence.PERSISTENCE_KEY.USER_DATA);
            aUser = null;
        }

        var execute = function(config) {
            return $http({
                method: 'POST',
                url: Constant.BaseApiUrl + config.url,
                data: config.data,
                headers: { 'key': config.key }
            }).then(function successCallback(response) {
                return response.data;
            }, function errorCallback(response) {
                console.log("error request data");
                return $q.reject(response);
            });
        }

        return {
            saveUser: saveUser,
            getUser: getUser,
            isLoggedIn: isLoggedIn,
            logout: logout,
            execute: execute,
        };

    }]);
