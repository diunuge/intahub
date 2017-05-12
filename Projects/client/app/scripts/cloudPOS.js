var cloudPOS = (function (module) {
    module.ng = {
        config: angular.module('config_params', ['configurations']),
        services: angular.module('CloudPOS_Services', ['ngResource']),
        application: angular.module('CloudPOS_Application', ['CloudPOS_Services', 'config_params', 'webStorageModule', 'ui.bootstrap' , 'pascalprecht.translate', 'nvd3ChartDirectives', 'notificationWidget', 'angularFileUpload', 'modified.datepicker', 'ngRoute', 'ngSanitize', 'LocalStorageModule', 'ngIdle', 'ngCsv', 'frAngular', 'tmh.dynamicLocale', 'mgo-angular-wizard', 'webcam', 'angularUtils.directives.dirPagination'])
    };
    return module;
}(cloudPOS || {}));
