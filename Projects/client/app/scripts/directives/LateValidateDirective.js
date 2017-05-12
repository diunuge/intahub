(function (module) {
    cloudPOS.directives = _.extend(module, {
        LateValidateDirective: function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function (scope, elm, attr, ctrl) {
                    if (attr.type === 'radio' || attr.type === 'checkbox') return;
                    elm.bind('blur', function () {
                        scope.$apply(function () {
                            if (elm.val() == "") {
                                ctrl.$setValidity('req', false);
                            } else {
                                ctrl.$setValidity('req', true);
                            }
                        });
                    });
                }
            };
        }
    });
}(cloudPOS.directives || {}));

cloudPOS.ng.application.directive("lateValidate", [cloudPOS.directives.LateValidateDirective]).run(function ($log) {
    $log.info("LateValidateDirective initialized");
});