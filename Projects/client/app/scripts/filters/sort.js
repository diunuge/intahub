(function (module) {
    cloudPOS.filters = _.extend(module, {
        sort: function () {
            return function (input) {
                return input.sort();
            }
        }
    });
    cloudPOS.ng.application.filter('sort', ['dateFilter', cloudPOS.filters.sort]).run(function ($log) {
        $log.info("sort filter initialized");
    });
}(cloudPOS.filters || {}));
