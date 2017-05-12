(function (module) {
    cloudPOS.filters = _.extend(module, {
        DotRemove: function () {
            return function (input) {
                if (input) {
                    var exp = input;
                    var alpha = '';
                    for (var i = 0; i < exp.length; i++) {
                        if (exp[i] != '.') {
                            alpha = alpha + exp[i];
                        }
                    }
                    return alpha;
                }
            }
        }
    });
    cloudPOS.ng.application.filter('DotRemove', ['dateFilter', cloudPOS.filters.DotRemove]).run(function ($log) {
        $log.info("DotRemove filter initialized");
    });
}(cloudPOS.filters || {}));
