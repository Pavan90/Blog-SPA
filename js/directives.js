angular.module('blogApp.directives',[])
.directive('navigationbar',[function(){
  return {
restrict: 'E',
//template:'<h1>Navigation....</h1>'
controller: ['$scope','$http',function($scope,$http){
$http.get('data/pages.json').success(function(data){
  $scope.pages = data;
})
}],
templateUrl: 'views/navigationbar.html '
}
}]);
