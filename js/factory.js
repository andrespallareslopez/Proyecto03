/// <reference path="../typings/angularjs/angular.d.ts"/>
var app=angular.module('myApp',[]);

/* Different point of view of factory */
app.factory('myservice',function($http){
	return {
			   getGrupos:function(callback){
			   var dir1='http://localhost:65380/api/grupos';
			   $http.get(dir1).success(callback);
		    },
			   getFamilias:function(callback){
			   var dir2='http://localhost:65380/api/grupos';
			   $http.get(dir2).success(callback);
		    }		
	       };
});

app.factory('myservice2',function($http){
	return {
		getGrupos:function(){
			var dir1='http://localhost:65380/api/grupos';
			return $http.get(dir1).then(function(result){
				return result.data;
			});
		},
		getFamilias:function(id){
			var dir2='http://localhost:65380/api/grupos/'+id;
			return $http.get(dir2).then(function(result){
				return result.data[0].gesFamilias;
			});
		},
		getProductos:function(id){
			var dir3='http://localhost:65380/api/productos/'+id;
			return $http.get(dir3).then(function(result){
				return result;
			});
		}
	};
});
app.controller("MyController",['$scope','myservice','myservice2',function($scope,myservice,myservice2){
	
	//$scope.grupos=myservice2.getGrupos();
	myservice.getGrupos(function(result){
		$scope.grupos=result;
	});
	myservice2.getFamilias(2).then(function(result){
		$scope.familias=result;
	});
}]);

