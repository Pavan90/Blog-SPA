angular.module('blogApp.controllers',['blogApp.directives'])
.controller('postCtrl',['$scope','$http',function($scope,$http){

$http.get('data/posts.json').success(function(data){
  $scope.posts = data;
})
}])

.controller('singlePostCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){

$http.get('data/posts.json').success(function(data){
  $scope.post = data[$routeParams.id];
})
}])
.controller('pageCtrl',['$scope','$http','$routeParams',function($scope,$http,$routeParams){

$http.get('data/pages.json').success(function(data){
  $scope.page = data[$routeParams.id];
})
}])
