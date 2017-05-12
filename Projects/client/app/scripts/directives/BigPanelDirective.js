(function (module) {
    cloudPOS.directives = _.extend(module, {
        BigPanelDirective: function () {
            return {
                restrict: "E",
                transclude: true,
                scope: {
                    title: "@"
                },

                template: "<div class='panelbig'>" +
                    "<div class='panel-header'>" +
                    "<div class='alert-box panel-header-text'>{{title}}</div></div>" +
                    "<div ng-transclude></div></div>"
            };

        }
    });
}(cloudPOS.directives || {}));

cloudPOS.ng.application.directive("panelbig", [cloudPOS.directives.BigPanelDirective]).run(function ($log) {
    $log.info("BigPanelDirective initialized");
});