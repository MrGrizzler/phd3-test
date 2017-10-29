const app = angular.module('app', []);

app.controller('MainCtrl', ['$scope', function($scope){
  $scope.hello = "hello world!!";
}]);

app.directive('liftToTop', ['$window', function($window){
  return {
    restrict: 'A', //attributes only
    link: function(scope, element, attrs) {
      const w = angular.element($window),
        topClass = attrs.liftToTop,
        initialOffset = element.offset().top;
      
      //bind the the scroll event  
      w.bind('scroll', function(){
        console.log(this.pageYOffset);
        
        let currentTop = element[0].getBoundingClientRect().top; //get current pos
        
        if(currentTop > 50) {
          //move element up/down against the scroll direction
          element.css('top', -1 * this.pageYOffset + 'px');
          element.removeClass(topClass);
        }
        
        //once current rect reaches 50, apply fixed
        if(currentTop === 50) {
          element.addClass(topClass);
        }
      });
    }
  };
}]);