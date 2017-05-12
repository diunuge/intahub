(function (cloudPOS) {
    var defineRoutes = function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/start.html'
            })
            .when('/login', {
                templateUrl: 'views/login.html'
            })
            .when('/home', {
                templateUrl: 'views/home.html'
            })
            .when('/test', {
                templateUrl: 'views/test/test.html'
            })
        ;
        $locationProvider.html5Mode(false);
    };
    cloudPOS.ng.application.config(defineRoutes).run(function ($log) {
        $log.info("Routes definition completed");
    });
}(cloudPOS || {}));
