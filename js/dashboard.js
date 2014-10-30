(function(){ 
angular.module('Dashboard', ['ui.bootstrap', 'ui.router', 'ngCookies']);
'use strict';

/**
 * Route configuration for the Dashboard module.
 */
angular.module('Dashboard').config(['$stateProvider', '$urlRouterProvider', 
    function($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // Application routes
    $stateProvider
        .state('index', {
            url: '/',
            templateUrl: 'dashboard.html'
        })
        .state('tables', {
            url: '/tables', 
            templateUrl: 'tables.html'
        });
}]);

/**
 * Master Controller
 */
angular.module('Dashboard')
    .controller('MasterCtrl', ['$scope', '$cookieStore','$sce', MasterCtrl]);

function MasterCtrl($scope, $cookieStore,$sce) {
    /**
     * Sidebar Toggle & Cookie Control
     *
     */
    var mobileView = 992;

    $scope.getWidth = function() { return window.innerWidth; };

    $scope.$watch($scope.getWidth, function(newValue, oldValue)
    {
        if(newValue >= mobileView)
        {
            if(angular.isDefined($cookieStore.get('toggle')))
            {
                if($cookieStore.get('toggle') == false)
                {
                    $scope.toggle = false;
                }            
                else
                {
                    $scope.toggle = true;
                }
            }
            else 
            {
                $scope.toggle = true;
            }
        }
        else
        {
            $scope.toggle = false;
        }

    });
$scope.jsComponents=[
    {
        name: "Polar Clock",
        link:"http://pashanitw.github.io/Html5-Canvas-PolarClock"
    },
    {
        name: "Paint App",
        link:"http://pashanitw.github.io/paint/"
    },
    {
        name: "Fb App",
        link:"http://pashanitw.github.io/Html5-Canvas-PolarClock"
    }
];
    $scope.setProject = function (project) {
        $scope.currentProject = project;
        $scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.currentProject.link);
    }
    $scope.toggleSidebar = function() 
    {
        $scope.toggle = ! $scope.toggle;

        $cookieStore.put('toggle', $scope.toggle);
    };

    window.onresize = function() { $scope.$apply(); };
}

/**
 * Alerts Controller
 */
angular.module('Dashboard').controller('AlertsCtrl', ['$scope', AlertsCtrl]);

function AlertsCtrl($scope) {
    $scope.alerts = [
        { type: 'success', msg: 'Thanks for visiting! Feel free to create pull requests to improve the dashboard!' },
        { type: 'danger', msg: 'Found a bug? Create an issue with as many details as you can.' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({msg: 'Another alert!'});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
}
/**
 * Loading Directive
 * @see http://tobiasahlin.com/spinkit/
 */
angular.module('Dashboard').directive('rdLoading', rdLoading);

function rdLoading () {
    var directive = {
        restrict: 'AE',
        template: '<div class="loading"><div class="double-bounce1"></div><div class="double-bounce2"></div></div>'
    };
    return directive;
};
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
        function getDocHeight(doc) {
            doc = doc || document;
            // stackoverflow.com/questions/1145850/
            var body = doc.body, html = doc.documentElement;
            var height = Math.max( body.scrollHeight, body.offsetHeight,
                html.clientHeight, html.scrollHeight, html.offsetHeight );
            return height;
        }
        function setIframeHeight() {
            var ifrm = element[0],height;
            var doc = ifrm.contentDocument? ifrm.contentDocument:
                ifrm.contentWindow.document;
            element.css('visibility','hidden');
            height = getDocHeight( doc ) + 4 + "px"; // reset to minimal height ...
            // IE opt. for bing/msn needs a bit added or scrollbar appears
            ifrm.contentWindow.onload=function(){
                element.css('height',height);
                element.css('visibility','visible');
            }
        }
        scope.$watch('projectUrl',function(newVal){
            if(newVal){
                setIframeHeight();
            }
        })
    }
};

})();