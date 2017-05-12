(function (module) {
    cloudPOS.directives = _.extend(module, {
        FormValidateDirective: function ($compile) {
            return {
                restrict: 'E',
                require: '?ngmodel',
                link: function (scope, elm, attr, ctrl) {
                    scope.formNameAttribute = attr.valattributeform;
                    scope.inputAttributeName = attr.valattribute;
                    var template = '<span  ng-show="' + scope.formNameAttribute + '.' + scope.inputAttributeName + '.$invalid">' +
                        '<small class="error" ng-show="' + scope.formNameAttribute + '.' + scope.inputAttributeName + '.$error.req || rc.' + scope.formNameAttribute + '.attempted">' +
                        '{{' + "'label.requirefield'" + ' | translate}}' +
                        '</small>' +
                        '</span>';
                    elm.html('').append($compile(template)(scope));
                }
            };
        }
    });
}(cloudPOS.directives || {}));

cloudPOS.ng.application.directive("formValidate", ['$compile', cloudPOS.directives.FormValidateDirective]).run(function ($log) {
    $log.info("FormValidateDirective initialized");
});