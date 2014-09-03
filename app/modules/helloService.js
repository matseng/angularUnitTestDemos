angular.module('HelloModule', [])
    .factory('helloService', function() {
        return function() {
            return 'hello';
        }
    });

angular.module('HelloModule').
  // run(function($rootScope) {
  //   $rootScope.myVar = 'unchanged';
  //   $rootScope.alert = function() {
  //     $rootScope.myVar = 'changed!';
  //     alert("You've been alerted!");
  //   };
  //   $rootScope.update = function() {
  //     $rootScope.$apply();
  //   };
  // }).
  directive('myClick', function() {
    return function($scope, element, attrs) {
      element.on('click', function() {
          // attrs.myClick();
          // $scope.$apply(function() {
              //fire the onClick function
              $scope.$eval(attrs.myClick); //myClick= "myfcn()"
          // });
      });
    }
  });
