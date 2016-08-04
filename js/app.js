
var app = angular.module('blogApp',[
  'ngRoute',
  'blogApp.controllers',


]);
app.config(['$routeProvider',function($routeProvider){
$routeProvider.when('/',{
 templateUrl: 'views/post.html',
 controller: 'postCtrl'
}).when('/post/:id',{
  templateUrl:'views/singlePost.html',
  controller: 'singlePostCtrl'
}).when('/page/:id',{
  templateUrl: 'views/page.html',
  controller:'pageCtrl'
})

.otherwise({
 redirectTo: '/'
})

}]);
