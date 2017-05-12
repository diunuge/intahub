(function (module) {
    cloudPOS.controllers = _.extend(module, {
        TestController: function (scope, resourceFactory, location) {


            scope.fullname="Diunuge Buddhika";

        }
    });



    cloudPOS.ng.application.controller('TestController', ['$scope', 'ResourceFactory', '$location', cloudPOS.controllers.TestController]).run(function ($log) {
        $log.info("TestController initialized");
    });
}(cloudPOS.controllers || {}));