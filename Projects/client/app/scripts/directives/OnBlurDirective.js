(function (module) {
    cloudPOS.directives = _.extend(module, {
        OnBlurDirective: function ($parse) {
            return function (scope, elm, attrs) {
                var onBlurFunction = $parse(attrs['ngOnBlur']);
                elm.bind("blur", function (event) {
                    scope.$apply(function () {
                        onBlurFunction(scope, { $event: event });
                    })
                });
            };
        }
    });
}(cloudPOS.directives || {}));

cloudPOS.ng.application.directive("ngOnBlur", ['$parse', cloudPOS.directives.OnBlurDirective]).run(function ($log) {
    $log.info("OnBlurDirective initialized");
});