var app = angular.module("nunuAPP", ["LocalStorageModule","mdo-angular-cryptography","ui.router","ui.bootstrap"]);

app.constant('Constant', {
    BaseApiUrl: "http://localhost/api-mangamob/public/v1/",
    cache:false

});

app.config(['$cryptoProvider', function($cryptoProvider) {
    $cryptoProvider.setCryptographyKey('AaMiiN3X');
}]);

