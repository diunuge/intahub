(function (module) {
    cloudPOS.filters = _.extend(module, {
        DateFormat: function (dateFilter, localStorageService) {
            return function (input) {
                if (input) {
                    var tDate = new Date(input);
                    return dateFilter(tDate, localStorageService.getFromLocalStorage('dateformat'));
                }
                return '';
            }
        }
    });
    cloudPOS.ng.application.filter('DateFormat', ['dateFilter', 'localStorageService', cloudPOS.filters.DateFormat]).run(function ($log) {
        $log.info("DateFormat filter initialized");
    });
}(cloudPOS.filters || {}));
