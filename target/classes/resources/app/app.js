angular.module('app', [
    'ngResource',
    'ui.router',
    'ngStorage',
    'ui.bootstrap.showErrors',
    'authorization.services',
    'ngCookies',
    'customDirectives'
]);

angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise("/")
    $stateProvider
        .state('index', {
        url: "/",
        templateUrl: "app/index.tpl.html",
        controller: 'AppCtrl'
    });
}]);


angular.module('app').controller('AppCtrl', ['$scope','$cookieStore','$location','AuthService','$rootScope',
    '$localStorage','$resource', '$window',function($scope,$cookieStore,$location,AuthService,$rootScope,$localStorage,$resource,$window) {  
	var UserResource = $resource('/user/getall');
	$scope.error = "";
	
    $scope.save = function(){
        $scope.$broadcast('show-errors-check-validity'); 
        if ($scope.loginForm.$valid){
AuthService.login({'email':$scope.email,'fName':$scope.fName,'lName':$scope.lName,'mCode':$scope.mCode,'mNumber':$scope.mNumber},function(result){

			if(result['error']){
				console.log('error occured');
				$scope.error = "Email is already used, please try a different email"
			}
			else{
				$window.location.reload();
			}
				
			
            });
       }
   }//login
    
    
    UserResource.query(function(result){
       $scope.collapseData = result;
 });
    
    var loadUsers = function(){
        UserResource.query(function(result){
                   $scope.collapseData = result;
             });                
     }

}]);

angular.module('app').controller('HeaderCtrl', ['$scope','$rootScope','$location','AuthService', function($scope,$rootScope,$location,AuthService) { 
    

}]);
