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
        name: "html5 video",
        link:"http://pashanitw.github.io/media/"
    },
    {
        name: "Ripple Effect",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Image Slider",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Offcanvas Menu",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "3D HoverEffect",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "3D input Form",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Float Input Labels",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Range Slider",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Multi Step Form",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Bread Crumb",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Css3 Gradients",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Vertical Accordion Menu",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Javascript Syntax Highliter",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Canvas Fireworks",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Logos",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Double Fold Ribbon",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Bouncing Balls",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Html5 Fireworks",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "popular and fork ribbons",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "LightBox",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Pricing Table",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Canvas gauge chart",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Webkit Filters",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Ribbon Effects",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Snake Game Webgl",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Angular magnify Directive",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Lcd Clock(responsive)",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Milk Clock(responsive)",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "World Clock(responsive)",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Accordion Image Sider",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Stylish Image Slider",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Css3 Tree Diagram",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Doodle Animation",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "cloud animation",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Border Transition Effect",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Windows Phone Loading",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Windows8 Boot Loading",
        link:"http://pashanitw.github.io/ripple-effect/"
    },
    {
        name: "Animated Checkbox",
        link:"http://pashanitw.github.io/ripple-effect/"
    }



];
$scope.css3=[
    {
        name: "Morphing Cubes",
        link:"http://pashanitw.github.io/Html5-Canvas-PolarClock"
    },
    {
        name: "Flip Clock",
        link:"http://pashanitw.github.io/paint/"
    },
    {
      name: "Css3 Navigation-1",
      link:"http://pashanitw.github.io/navigation/"
    }

];
$scope.css3Components=[
    {
        name: "Navigation Patterns",
        link:"http://pashanitw.github.io/Html5-Canvas-PolarClock"
    },
    {
        name: "Side Bar",
        link:"http://pashanitw.github.io/paint/"
    },
    {
        name: "Hamburger menu",
        link:"http://pashanitw.github.io/paint/"
    },
    {
        name: "Toastr",
        link:"http://pashanitw.github.io/paint/"
    }
];
$scope.hybridComponents=[
    {
        name: "Navigation Patterns",
        link:"http://pashanitw.github.io/Html5-Canvas-PolarClock"
    },
    {
        name: "Side Bar",
        link:"http://pashanitw.github.io/paint/"
    },
    {
        name: "Hamburger menu",
        link:"http://pashanitw.github.io/paint/"
    },
    {
        name: "Toastr",
        link:"http://pashanitw.github.io/paint/"
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
             // reset to minimal height ...
            // IE opt. for bing/msn needs a bit added or scrollbar appears
            ifrm.onload=function(){
                height = getDocHeight( doc ) + 4 + "px";
                element.css('height',height);
                element.css('visibility','visible');
                console.log("height is",heig)
            }
        }
        scope.$watch('projectUrl',function(newVal){
            if(newVal){
               // setIframeHeight();
            }
        })
    }
};

})();