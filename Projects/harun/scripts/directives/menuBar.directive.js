/**
 * Created by harun.h on 4/26/2017.
 */
myApplication.directive('commonMenuBar', function(){
    return {
        restrict: 'E',
        scope: {
            itemArr: '=itemArray'
        },
        templateUrl: 'views/directives/commonMenuBar.view.html',
        link: function($scope, elem, attrs){

        }
    };
});