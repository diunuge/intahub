(function (module) {
    cloudPOS.directives = _.extend(module, {
        AutofocusDirective: function ($timeout, $parse) {
            return {
                link: function (scope, element, attrs) {
                    var focus = $parse(attrs.ngAutofocus);
                    scope.$watch(focus, function (value) {
                        if (value === true) {
                            $timeout(function () {
                                element[0].focus();
                            });
                        }
                    });
                }
            };

        }
    });
}(cloudPOS.directives || {}));

cloudPOS.ng.application.directive("ngAutofocus", ['$timeout', '$parse', cloudPOS.directives.AutofocusDirective]).run(function ($log) {
    $log.info("AutofocusDirective initialized");
});