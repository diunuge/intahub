(function (module) {
    cloudPOS.filters = _.extend(module, {
        YesOrNo: function () {
            return function (input) {
                var status = 'No';
                if (input == true) {
                    status = 'Yes';
                } else if (input == false) {
                    status = 'No';
                }
                return status;
            }
        }
    });
    cloudPOS.ng.application.filter('YesOrNo', ['dateFilter', cloudPOS.filters.YesOrNo]).run(function ($log) {
        $log.info("YesOrNo filter initialized");
    });
}(cloudPOS.filters || {}));
