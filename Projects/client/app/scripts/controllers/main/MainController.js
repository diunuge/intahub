(function (module) {
    cloudPOS.controllers = _.extend(module, {
        MainController: function (scope, location, sessionManager, translate, $rootScope, localStorageService, keyboardManager, $idle, tmhDynamicLocale,
                  uiConfigService, $http) {

            $http.get('release.json').success(function(data) {
                scope.version = data.version;
                scope.releasedate = data.releasedate;
            });

            scope.myname="Diunuge";
        }
    });
    cloudPOS.ng.application.controller('MainController', [
        '$scope',
        '$location',
        'SessionManager',
        '$translate',
        '$rootScope',
        'localStorageService',
        'keyboardManager', '$idle',
        'tmhDynamicLocale',
        'UIConfigService',
        '$http',
        cloudPOS.controllers.MainController
    ]).run(function ($log) {
        $log.info("MainController initialized");
    });
}(cloudPOS.controllers || {}));
