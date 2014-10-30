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
