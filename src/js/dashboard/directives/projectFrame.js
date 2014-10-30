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
