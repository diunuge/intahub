(function (module) {
    cloudPOS.directives = _.extend(module, {
        ChosenComboboxDirective: function ($compile) {
            var linker = function (scope, element, attrs) {
                var list = attrs['chosen'];
                scope.$watch(list, function () {
                    element.trigger('liszt:updated');
                    element.trigger("chosen:updated");
                });

                element.chosen({search_contains:true});
            };

            return {
                restrict: 'A',
                link: linker
            }
        }
    });
}(cloudPOS.directives || {}));

cloudPOS.ng.application.directive("chosen", ['$compile', cloudPOS.directives.ChosenComboboxDirective]).run(function ($log) {
    $log.info("ChosenComboboxDirective initialized");
});