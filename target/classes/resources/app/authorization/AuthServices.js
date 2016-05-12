var module = angular.module('authorization.services',['ngResource','ngCookies','ngStorage']);

module.factory("AuthHttpRequestInterceptor", 
               function ($localStorage) {
             return {
                    request: function (config) {
             if($localStorage.token)
                  config.headers["Authorization"] = 'bearer '+ $localStorage.token; 
             return config;
            }
          };
});


module.factory('AuthService',function($resource,$rootScope,$location,$cookieStore,$localStorage){
 var LoginResource = $resource('/user/save');    
  // The public API of the service
  var service = {
    login: function(user,callback){
	var loginResource = new LoginResource();
	loginResource.email = user.email;
	loginResource.fName = user.fName;
	loginResource.lName = user.lName;
	loginResource.mCode = user.mCode;
	loginResource.mNumber = user.mNumber;
	
	
	loginResource.$save(function(result){
        if(typeof result !== 'undefined'){
            if(result.type){
                $localStorage.token = result.token;
                var user = parseToken(result.token);
                console.log(" data after login : "+JSON.stringify(user));
                //$cookieStore.put('user',user);
                $rootScope.currentUser = user;
            }
        }
		callback(result);
	}); 
      }
  }//service
  
  
  return service;
  
});
