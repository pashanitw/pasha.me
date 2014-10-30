angular
    .module('Dashboard')
    .directive('projectFrame', prFrame);

function prFrame () {
    var directive = {
        transclude: true,
        template: '<iframe ng-src="{{projectUrl}}"></iframe>',
        restrict: 'EA',
        replace:true,
        scope:{
            projectUrl:"="
        },
       link:link
    };
    return directive;

    function link(scope, element, attrs) {

    }
};
