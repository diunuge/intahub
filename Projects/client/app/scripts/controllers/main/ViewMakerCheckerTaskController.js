(function (module) {
    cloudPOS.controllers = _.extend(module, {
        ViewMakerCheckerTaskController: function (scope, routeParams) {
            scope.commandId = routeParams.commandId;
        }
    });
    cloudPOS.ng.application.controller('ViewMakerCheckerTaskController', ['$scope', '$routeParams', cloudPOS.controllers.ViewMakerCheckerTaskController]).run(function ($log) {
        $log.info("ViewMakerCheckerTaskController initialized");
    });
}(cloudPOS.controllers || {}));


