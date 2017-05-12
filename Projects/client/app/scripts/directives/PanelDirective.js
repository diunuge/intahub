(function (module) {
    cloudPOS.directives = _.extend(module, {
        PanelDirective: function () {
            return {
                restrict: "E",
                transclude: true,
                scope: {
                    title: "@"
                },

                template: "<div class='panel'>" +
                    "<div class='panel-header'>" +
                    "<div class='alert-box panel-header-text'>{{title}}</div></div>" +
                    "<div ng-transclude></div></div>"
            };

        }
    });
}(cloudPOS.directives || {}));

cloudPOS.ng.application.directive("panel", [cloudPOS.directives.PanelDirective]).run(function ($log) {
    $log.info("PanelDirective initialized");
});