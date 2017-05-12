(function (module) {
    cloudPOS.filters = _.extend(module, {
        FormatNumber: function ($filter) {
            return function (input, fractionSize) {
                if (isNaN(input)) {
                    return input;
                } else {
                    //TODO- Add number formatting also
                    if (input != "" && input != undefined) {
                        return $filter('number')(input, fractionSize);
                    };
                };
            }
        }
    });
    cloudPOS.ng.application.filter('FormatNumber', ['$filter', cloudPOS.filters.FormatNumber]).run(function ($log) {
        $log.info("FormatNumber filter initialized");
    });
}(cloudPOS.filters || {}));
