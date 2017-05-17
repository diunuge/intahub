define(['Q', 'underscore', 'cloudPOS'], function (Q) {
    var components = {
        models: [
            'Langs'
        ],
        services: [
            'ResourceFactoryProvider',
            'HttpServiceProvider',
            'SessionManager',
            'UIConfigService'
        ],
        controllers: [
            'main/MainController',
            'test/TestController'
        ],
        filters: [
        ],
        directives: [
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
