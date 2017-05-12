(function (module) {
    cloudPOS.directives = _.extend(module, {
        ActivitiesDisplayPanelDirective: function () {
            return {
                restrict: "E",
                transclude: true,
                scope: {
                    title: "@"
                },

                template: "<div class='display-panel' style='margin-top:15px;'>" +
                    "<div class='summary-header'>" +
                    "<div class='display-header-text'>{{title}}</div></div>" +
                    "<div ng-transclude></div></div>"
            };

        }
    });
}(cloudPOS.directives || {}));

cloudPOS.ng.application.directive("ngDisplaypanel", [cloudPOS.directives.ActivitiesDisplayPanelDirective]).run(function ($log) {
    $log.info("ActivitiesDisplayPanelDirective initialized");
});