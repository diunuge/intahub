define(['Q', 'underscore', 'cloudPOS'], function (Q) {
    var components = {
        models: [
            'clientStatus',
            'LoggedInUser',
            'roleMap',
            'Langs'
        ],
        services: [
            'ResourceFactoryProvider',
            'HttpServiceProvider',
            'AuthenticationService',
            'SessionManager',
            'Paginator',
            'UIConfigService'
        ],
        controllers: [
            'main/MainController',
            'main/LoginFormController',
            'main/TaskController',
            'main/SearchController',
            'main/NavigationController',
            'main/ViewCheckerinboxController',
            'main/ExpertSearchController',
            'main/RichDashboard',
            'main/ProfileController',
            'main/ViewMakerCheckerTaskController',
            'main/AdHocQuerySearchController',
            'test/TestController'
        ],
        filters: [
            'StatusLookup',
            'DateFormat',
            'DayMonthFormat',
            'YesOrNo',
            'UrlToString',
            'sort',
            'DotRemove',
            'FormatNumber',
            'TranslateDataTableColumn',
            'SearchFilter',
            'AddUpTotalFor'
        ],
        directives: [
            'DialogDirective',
            'PanelDirective',
            'BigPanelDirective',
            'OnBlurDirective',
            'LateValidateDirective',
            'TreeviewDirective',
            'CkEditorDirective',
            'AutofocusDirective',
            'SummaryDirective',
            'FormValidateDirective',
            'FormSubmitValidateDirective',
            'ApiValidationDirective',
            'HasPermissionDirective',
            'ActivitiesDisplayPanelDirective',
            'ScrollbarTopDirective',
            'ChosenComboboxDirective',
            'NumberFormatDirective',
            'SuccessfulResponsesDirective',
            'TabsPersistenceDirective'
        ]
    };

    return function() {
        var defer = Q.defer();
        require(_.reduce(_.keys(components), function (list, group) {
            return list.concat(_.map(components[group], function (name) {
                return group + "/" + name;
            }));
        }, [
            'routes',
            'initialTasks',
            'webstorage-configuration'
        ]), function(){
            defer.resolve();
        });
        return defer.promise;
    }
});
