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
